import SwaggerClient from 'swagger-client';
import type { default as apid } from './api-types';
import aws4 from 'aws4';
import { STS } from './sts';

/* @ts-ignore */ // ignore the next line so that the code that builds the import file can be compiled
const spec = (async function() {
    return (await import('./sp-api-swagger.json')).default;
});
// const spec = (await import('./sp-api-swagger.json')).default;

export enum ApiRegion {
    NorthAmerica = 'na',
    NorthAmericaSandbox = 'sandbox-na',
    Europe = 'eu',
    EuropeSandbox = 'sandbox-eu',
    FarEast = 'fe',
    FarEastSandbox = 'sandbox-fe',
};

const RegionServers: Record<ApiRegion, { awsRegion: string, endpoint: string }> = {
    na: { awsRegion: 'us-east-1', endpoint: 'sellingpartnerapi-na.amazon.com' },
    'sandbox-na': { awsRegion: 'us-east-1', endpoint: 'sandbox.sellingpartnerapi-na.amazon.com' },
    eu: { awsRegion: 'eu-west-1', endpoint: 'sellingpartnerapi-eu.amazon.com' },
    'sandbox-eu': { awsRegion: 'eu-west-1', endpoint: 'sandbox.sellingpartnerapi-eu.amazon.com' },
    fe: { awsRegion: 'us-west-2', endpoint: 'sellingpartnerapi-fe.amazon.com' },
    'sandbox-fe': { awsRegion: 'us-west-2', endpoint: 'sandbox.sellingpartnerapi-fe.amazon.com' },
};

export enum Marketplace {
    CA = 'A2EUQ1WTGCTBG2',
    US = 'ATVPDKIKX0DER',
    MX = 'A1AM78C64UM0Y8',
    BR = 'A2Q3Y263D00KWC',
    ES = 'A1RKKUPIHCS9HS',
    GB = 'A1F83G8C2ARO7P',
    FR = 'A13V1IB3VIYZZH',
    NL = 'A1805IZSGTT6HS',
    DE = 'A1PA6795UKMFR9',
    IT = 'APJ6JRA9NG5V4',
    TR = 'A33AVAJ2PDY3EV',
    AE = 'A2VIGQ35RCS4UG',
    IN = 'A21TJRUUN4KGV',
    SG = 'A19VAU5U5O7RUS',
    AU = 'A39IBJ37TRP1C6',
    JP = 'A1VC38T7YXB528',
};

type getAuthorizationCodeParams = {
    sellingPartnerId: string,
    developerId: string,
    mwsAuthToken: string,
};

const OAUTH_URL = 'https://api.amazon.com/auth/o2/token';

export class LWA {
    private access_token: string;
    private refresh_token: string;
    private expires_at: number;
    private clientId: string;
    private clientSecret: string;

    private constructor({ access_token, refresh_token, expires_at }: LWATokens, clientId: string, clientSecret: string) {
        this.access_token = access_token;
        this.refresh_token = refresh_token;
        this.expires_at = expires_at;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }
    static async fromOauthCode(code: string, clientId: string, clientSecret: string) {
        const params = {
            grant_type: 'authorization_code',
            code,
            client_id: clientId,
            client_secret: clientSecret,
        }
        const request = {
            url: OAUTH_URL,
            method: 'POST',
            body: Object.keys(params).map((key: any) => {
                return encodeURIComponent(key)+'='+encodeURIComponent((params as any)[key]);
            }).join('&'),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        };
        const res = await SwaggerClient.http(request);
        const t: LWATokens = {
            access_token: res.body.access_token,
            refresh_token: res.body.refresh_token,
            expires_at: Date.now() + res.body.expires_in - 600,
        };
        return new LWA(t, clientId, clientSecret);
    }
    static async fromRefreshToken(refreshToken: string, clientId: string, clientSecret: string) {
        const params = {
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
            client_id: clientId,
            client_secret: clientSecret,
        };
        const request = {
            url: OAUTH_URL,
            method: 'POST',
            body: Object.keys(params).map((key: any) => {
                return encodeURIComponent(key) + '=' + encodeURIComponent((params as any)[key]);
            }).join('&'),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        };
        const res = await SwaggerClient.http(request);
        const t: LWATokens = {
            access_token: res.body.access_token,
            refresh_token: res.body.refresh_token,
            expires_at: Date.now() + res.body.expires_in - 600,
        };
        return new LWA(t, clientId, clientSecret);
    }
    async refreshAccessToken() {
        const newTokens = await LWA.fromRefreshToken(this.refresh_token, this.clientId, this.clientSecret);
        Object.assign(this, newTokens);
        return this;
    }
    async getAccessToken() {
        if (this.access_token === '') {
            return null;
        }
        if (this.refresh_token === '') {
            return null;
        }
        if (this.expires_at < Date.now()) {
            await this.refreshAccessToken();
        }
        return this.access_token;
    }
}
type LWATokens = {
    access_token: string,
    refresh_token: string,
    expires_at: number,
};
// get spapi_oauth_code from client app, use getLoginRefreshToken to get the refresh_token, save
// the refresh_token to the user account, then load that refresh_token and use it to getLoginAccessToken()
// whenever necessary.  Note that when you do exchange the spapi_oauth_code, you get an initial access_token
// along with your refresh token, so you possibly don't have to call getLoginAccessToken() immediately?

type ConstructorParams = {
    region?: ApiRegion,
    clientId: string,
    clientSecret: string,
    oauthCode?: string,
    refreshToken?: string,
    awsAccessKey: string,
    awsSecret: string,
    appRoleArn: string,
};

export default class SpApi {
    /* private */ swaggerClient: typeof SwaggerClient;
    private isReady = false;
    private lwaPromise: Promise<LWA>;
    private lwa: LWA | null = null;
    private sts: STS;
    private region: ApiRegion;
    private lwaClientId: string;
    private clientSecret: string;
    private awsAccessKey: string;
    private awsSecret: string;
    private appRoleArn: string;

    constructor({ region, clientId, clientSecret, oauthCode, refreshToken, awsAccessKey, awsSecret, appRoleArn }: ConstructorParams) {
        this.region = region ?? ApiRegion.NorthAmerica;
        this.lwaClientId = clientId;
        this.clientSecret = clientSecret;
        this.awsAccessKey = awsAccessKey;
        this.awsSecret = awsSecret;
        this.appRoleArn = appRoleArn;
        this.sts = new STS({ role: appRoleArn, secret: awsSecret, accessKey: awsAccessKey });

        console.warn('**** this.region=', this.region);
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
        const { endpoint } = RegionServers[this.region];
        const thisSpec: any = { ...spec };
        thisSpec.host = endpoint;
        this.init(thisSpec);
        this.requestInterceptor = this.requestInterceptor.bind(this);
    }
    private async init(spec: any) {
        [ this.swaggerClient, this.lwa ] = await Promise.all([
            new SwaggerClient({ spec, requestInterceptor: this.requestInterceptor }),
            this.lwaPromise,
            this.sts.ready(),
        ]);

        this.isReady = true;
    }
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

        return req;
    }
    private ready() {
        let readyInterval: any; // Timeout not working, don't feel like digging up how to fix right now
        return new Promise(async (resolve, reject) => {
            if (this.isReady) {
                await this.sts.ready();
                return true;
            }
            readyInterval = setInterval(() => {
                if (this.isReady) {
                    clearInterval(readyInterval);
                    resolve(true);
                }
            }, 10);
        });
    }
    async getAuthorizationCode(params: getAuthorizationCodeParams): Promise<apid.GetAuthorizationCodeResponse> {
        await this.ready();
        return this.swaggerClient.apis.authorization.getAuthorizationCode(params);
    }
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
        await this.ready();
        const res = await this.swaggerClient.apis.sellers.getMarketplaceParticipations(); // TODO: as Response from node-fetch?
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
