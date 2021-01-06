import { Object as TSO } from 'ts-toolbelt';
import type { default as apid } from './api-types';
import SwaggerClient from 'swagger-client';
import aws4 from 'aws4';
// import AJV from 'ajv';

import STS from './STS';
import LWA from './LWA';

// const ajv = new AJV({ removeAdditional: true });

// load the json spec file. It is done this way, rather than as a direct .json import, because this
// works with top-level await enabled, and i do have some sort of hope of getting this library to
// work in a browser in the future, so i wanted to be able to diverge paths on 'how to get the
// .json'.  That may not end up being a thing, but it's a worthy goal, perhaps.

// TODO: we can *probably* figure out a way to jettison the entire 'spec' variable once we're done
// with it, as it probably takes up a pretty big chunk of ram.

/* @ts-ignore */ // ignore the next line so that the code that builds the import file can be compiled
const spec = (async function() {
    const spec = (await import('./sp-api-swagger.json')).default;
    // ajv.addSchema(spec, 'spec');
    return spec;
})();

// const spec = (await import('./sp-api-swagger.json')).default;

// Possible API regions, you can pass one to the SpApi constructor.
export enum ApiRegion {
    NorthAmerica = 'na',
    NorthAmericaSandbox = 'sandbox-na',
    Europe = 'eu',
    EuropeSandbox = 'sandbox-eu',
    FarEast = 'fe',
    FarEastSandbox = 'sandbox-fe',
};

// The server addresses used for each of those regions, referenced internally, you shouldn't need it
// outside.
const RegionServers: Record<ApiRegion, { awsRegion: string, endpoint: string }> = {
    na: { awsRegion: 'us-east-1', endpoint: 'sellingpartnerapi-na.amazon.com' },
    'sandbox-na': { awsRegion: 'us-east-1', endpoint: 'sandbox.sellingpartnerapi-na.amazon.com' },
    eu: { awsRegion: 'eu-west-1', endpoint: 'sellingpartnerapi-eu.amazon.com' },
    'sandbox-eu': { awsRegion: 'eu-west-1', endpoint: 'sandbox.sellingpartnerapi-eu.amazon.com' },
    fe: { awsRegion: 'us-west-2', endpoint: 'sellingpartnerapi-fe.amazon.com' },
    'sandbox-fe': { awsRegion: 'us-west-2', endpoint: 'sandbox.sellingpartnerapi-fe.amazon.com' },
};

// https://github.com/amzn/selling-partner-api-docs/blob/391a5b20fa2ab8c072afdda05a109f22635d6d0a/guides/developer-guide/SellingPartnerApiDeveloperGuide.md#marketplaceid-values
export enum Marketplace {
    // North America
    CA = 'A2EUQ1WTGCTBG2',
    US = 'ATVPDKIKX0DER',
    MX = 'A1AM78C64UM0Y8',
    BR = 'A2Q3Y263D00KWC', // Brazil in North America? Are you ok, Amazon?
    // Europe
    ES = 'A1RKKUPIHCS9HS',
    GB = 'A1F83G8C2ARO7P',
    FR = 'A13V1IB3VIYZZH',
    NL = 'A1805IZSGTT6HS',
    DE = 'A1PA6795UKMFR9',
    IT = 'APJ6JRA9NG5V4',
    TR = 'A33AVAJ2PDY3EV',
    AE = 'A2VIGQ35RCS4UG',
    IN = 'A21TJRUUN4KGV',
    // Far East
    SG = 'A19VAU5U5O7RUS',
    AU = 'A39IBJ37TRP1C6',
    JP = 'A1VC38T7YXB528',
};

type getAuthorizationCodeParams = {
    sellingPartnerId: string,
    developerId: string,
    mwsAuthToken: string,
};

// get spapi_oauth_code from client app, use getLoginRefreshToken to get the refresh_token, save
// the refresh_token to the user account, then load that refresh_token and use it to getLoginAccessToken()
// whenever necessary.  Note that when you do exchange the spapi_oauth_code, you get an initial access_token
// along with your refresh token, so you possibly don't have to call getLoginAccessToken() immediately?

type ConstructorParam = {
    region?: ApiRegion,
    clientId: string,
    clientSecret: string,
    oauthCode?: string,
    refreshToken?: string,
    awsAccessKey: string,
    awsSecret: string,
    appRoleArn: string,
};

type ConstructorParams = TSO.Either<ConstructorParam, 'refreshToken' | 'oauthCode'>;

export default class SpApi {
    /* private */ swaggerClient: typeof SwaggerClient;
    private isReady = false;
    private lwaPromise: Promise<LWA>;
    private lwa: LWA | null = null;
    private sts: STS;

    // region: see ApiRegion
    // clientId: LWA Client Id
    // clientSecret: LWA Client Secret
    // oauthCode: oauthCode provided from LWA (either this or refreshToken is necessary)
    // refreshToken: refreshToken provided from LWA (either this or oauthCode is necessary)
    // awsAccessKey: The userID of your IAM user account to access your app
    // awsSecret: The secret key from the IAM user account to access your app
    // appRoleArn: The ARN of the Role that the IAM user will Assume to access your app
    constructor({ region, clientId, clientSecret, oauthCode, refreshToken, awsAccessKey, awsSecret, appRoleArn }: ConstructorParams) {
        // default region to NorthAmerica if not provided
        const thisRegion = region ?? ApiRegion.NorthAmerica;

        if (oauthCode && refreshToken) {
            throw new Error('cannot provide both oauthCode and refreshToken');
        }
        if (!oauthCode && !refreshToken) {
            throw new Error('must provide one of oauthCode or refreshToken');
        }
        if (oauthCode) {
            this.lwaPromise = LWA.fromOauthCode(oauthCode, clientId, clientSecret);
        } else {
            this.lwaPromise = LWA.fromRefreshToken(refreshToken as string, clientId, clientSecret);
        }
        this.sts = new STS({ role: appRoleArn, secret: awsSecret, accessKey: awsAccessKey });

        const { endpoint } = RegionServers[thisRegion];
        this.requestInterceptor = this.requestInterceptor.bind(this);
        spec.then((thisSpec: any) => {
            thisSpec.host = endpoint;
            this.init(thisSpec);
        });
    }

    // swagger-client, LWA, and STS all have asynchronous processes that must be completed before
    // they are ready to be used.  init() makes sure that all of those have completed, and then sets
    // this.isReady, so we can use the later defined ready() function to ensure that we are ready
    // to handle requests, or put them into a queue while we wait for all of these pieces to get
    // the information they need.
    private async init(spec: any) {
        [ this.swaggerClient, this.lwa ] = await Promise.all([
            new SwaggerClient({ spec, requestInterceptor: this.requestInterceptor }),
            this.lwaPromise,
            this.sts.ready(),
        ]);

        this.isReady = true;
    }

    // SwaggerClient pipes it's request object through this function, which provides all of the
    // access keys and signs the request before allowing SwaggerClient to complete it.
    requestInterceptor = async (req: any) => { // req is a Request, but what the hell kind of Request? headers.append isn't there, and default Request headers is readonly.
        const u = new URL(req.url);
        const opts = {
            service: 'execute-api',
            host: u.hostname,
            path: `${u.pathname}${u.searchParams?'?':''}${u.searchParams}`,
            headers: {
                'x-amz-access-token': (await this.lwa!.getAccessToken()) as string,
                'user-agent': 'sp-api-simple/0.1 (Language=JavaScript; Platform=Node)',
                'x-amz-security-token': this.sts.roleTokens.securityToken,
            },
        };

        const signedOpts = aws4.sign(opts, { secretAccessKey: this.sts.roleTokens.secret, accessKeyId: this.sts.roleTokens.id });
        return { ...req, ...signedOpts };
    }

    // always await this function before you make use of any features that require LWA, STS, or the
    // sp-api.
    private ready() {
        let readyInterval: any; // Timeout not working, don't feel like digging up how to fix right now
        return new Promise(async (resolve, reject) => {
            if (this.isReady) {
                await this.sts.ready();
                resolve(true);
            } else {
                readyInterval = setInterval(() => {
                    if (this.isReady) {
                        clearInterval(readyInterval);
                        resolve(true);
                    }
                }, 10);
            }
        });
    }

    // TODO: this probably *doesn't* work because this service call is a grantless operation, and
    // therefore has different authorization requirements than most of the rest of the API.
    async getAuthorizationCode(params: getAuthorizationCodeParams): Promise<apid.GetAuthorizationCodeResponse> {
        await this.ready();
        return this.swaggerClient.apis.authorization.getAuthorizationCode(params);
    }

    // intended to test the whole thing through from start to finish, use with a sandbox region.
    async test() {
        await this.ready();
        // console.warn('* ', this.swaggerClient.apis.catalog);
        // listCatalogItems, getCatalogItem, listCatalogCategories
        // "MarketplaceId": {
        // "value": "TEST_CASE_200"
    // },
    // "SellerSKU": {
        // "value": "SKU_200"
        const x = await this.swaggerClient.apis.catalog.listCatalogItems({ MarketplaceId: 'TEST_CASE_200', SellerSKU: 'SKU_200' });
        console.warn('* x=', x);
    }

    async getMarketplaceParticipations() {
        // console.warn('* getMarketplaceParticipations');
        await this.ready();
        // console.warn('* ready');
        const res = await this.swaggerClient.apis.sellers.getMarketplaceParticipations(); // TODO: as Response from node-fetch?
        // console.warn('* res=', res);
        // console.warn('* payload=', res.body.payload);
        // const isValid = ajv.validate({ $ref: 'spec#/definitions/MarketplaceParticipationList' }, res.body.payload);
        // console.warn('***** isValid: ', isValid);
    /*
    {
      ok: true,
      url: 'https://sandbox.sellingpartnerapi-na.amazon.com/sellers/v1/marketplaceParticipations',
      status: 200,
      statusText: 'OK',
      headers: {
        connection: 'close',
        'content-length': '249',
        'content-type': 'application/json',
        date: [ 'Sun', '29 Nov 2020 09:51:49 GMT' ],
        'x-amz-apigw-id': 'Ww5QSEvbIAMF9MQ=',
        'x-amzn-requestid': '2d499534-7908-4279-a2e5-ce91e46c0dc1',
        'x-amzn-trace-id': 'Root=1-5fc36f34-1262e6210174da7c2cd70ccc;Sampled=0'
      },
      text: '{"payload":[{"marketplace":{"id":"ATVPDKIKX0DER","countryCode":"US","name":"Amazon.com","defaultCurrencyCode":"USD","defaultLanguageCode":"en_US","domainName":"www.amazon.com"},"participation":{"isParticipating":true,"hasSuspendedListings":false}}]}',
      data: '{"payload":[{"marketplace":{"id":"ATVPDKIKX0DER","countryCode":"US","name":"Amazon.com","defaultCurrencyCode":"USD","defaultLanguageCode":"en_US","domainName":"www.amazon.com"},"participation":{"isParticipating":true,"hasSuspendedListings":false}}]}',
      body: { payload: [ [Object] ] },
      obj: { payload: [ [Object] ] }
    }
    */
        const mps = (res?.body?.payload ?? res.body) as apid.MarketplaceParticipationList;
        return {
            status: res.status,
            headers: res.headers,
            result: mps,
        }
    }
}
