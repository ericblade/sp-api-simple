import SwaggerClient from 'swagger-client';
import type { default as apid } from './api-types';
import { TEST_REFRESH_TOKEN, LWA_CLIENT_ID, LWA_CLIENT_SECRET, AWS_ACCESS_KEY, AWS_SECRET } from './testkeys.js';
import aws4 from 'aws4';
import https from 'https';
import sleep from 'await-sleep';

const testkeys = {
    TEST_REFRESH_TOKEN,
    LWA_CLIENT_ID,
    LWA_CLIENT_SECRET,
    AWS_ACCESS_KEY,
    AWS_SECRET,
};

/* @ts-ignore */ // ignore the next line so that the code that builds the import file can be compiled
const spec = (await import('./sp-api-swagger.json')).default;

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

    private constructor({ access_token, refresh_token, expires_at }: LWATokens, clientId: string = testkeys.LWA_CLIENT_ID, clientSecret: string = testkeys.LWA_CLIENT_SECRET) {
        this.access_token = access_token;
        this.refresh_token = refresh_token;
        this.expires_at = expires_at;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }
    static async fromOauthCode(code: string, clientId: string = testkeys.LWA_CLIENT_ID, clientSecret: string = testkeys.LWA_CLIENT_SECRET) {
        const params = {
            grant_type: 'authorization_code',
            code,
            client_id: clientId,
            client_secret: clientSecret,
        }
        const request = {
            url: OAUTH_URL,
            method: 'POST',
/*             body: `grant_type=refresh_token
&refresh_token=${token}
&client_id=${clientId}
&client_secret=${clientSecret}`,
 */
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
    static async fromRefreshToken(refreshToken: string, clientId: string = testkeys.LWA_CLIENT_ID, clientSecret: string = testkeys.LWA_CLIENT_SECRET) {
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
};

export default class SpApi {
    private swaggerClient: typeof SwaggerClient;
    private isReady = false;
    private lwaPromise: Promise<LWA>;
    private lwa: LWA | null = null;
    private region: ApiRegion;
    private lwaClientId: string;
    private clientSecret: string;
    private awsAccessKey: string;
    private awsSecret: string;

    constructor({ region, clientId, clientSecret, oauthCode, refreshToken, awsAccessKey, awsSecret }: ConstructorParams) {
        this.region = region ?? ApiRegion.NorthAmerica;
        this.lwaClientId = clientId;
        this.clientSecret = clientSecret;
        this.awsAccessKey = awsAccessKey;
        this.awsSecret = awsSecret;

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
        const thisSpec = { ...spec };
        thisSpec.host = endpoint;
        this.init(thisSpec);
        this.requestInterceptor = this.requestInterceptor.bind(this);
    }
    private async init(spec: any) {
        [ this.swaggerClient, this.lwa ] = await Promise.all([ new SwaggerClient({ spec, requestInterceptor: this.requestInterceptor }), this.lwaPromise ]);
        this.isReady = true;
    }
    requestInterceptor = async (req: any) => { // req is a Request, but what the hell kind of Request? headers.append isn't there, and default Request headers is readonly.
        // https://gist.github.com/davidkelley/c1274cffdc0d9d782d7e
        function amzLongDate(date: Date) {
            return date.toISOString().replace(/[:\-]|\.\d{3}/g, '').substr(0, 17);
        }
        const requestDate = new Date();
        const u = new URL(req.url);
        const opts = {
            service: 'execute-api',
            host: u.hostname,
            path: `${u.pathname}${u.searchParams?'?':''}${u.searchParams}`,
            headers: {
                'x-amz-access-token': (await this.lwa!.getAccessToken()) as string,
                'user-agent': 'sp-api-simple/0.1 (Language=JavaScript; Platform=Node)',
            },
        };

        const signedOpts = aws4.sign(opts, { secretAccessKey: this.awsSecret, accessKeyId: this.awsAccessKey });
        // console.warn('* signedOpts=', signedOpts);
        // https.request(signedOpts, res => res.pipe(process.stdout)).end();
        return { ...req, ...signedOpts };

/*         let opts = {
            service: 'execute-api',
            host: 'sellingpartnerapi-na.amazon.com',
            path: '/authorization/v1/authorizationCode?sellingPartnerId=1&developerId=1&mwsAuthToken=1',
            headers: {
                'x-amz-access-token': (await this.lwa!.getAccessToken()) as string,
                'user-agent': 'sp-api-simple/0.1 (Language=JavaScript; Platform=Node)',
            },
        };

        aws4.sign(opts, { secretAccessKey: this.awsSecret, accessKeyId: this.awsAccessKey });

        https.request(opts, res => res.pipe(process.stdout)).end()
 */
        // await sleep(500000);
        return req;
        // console.warn('* ret=', {...req, ...signedOpts});
        // return { ...req, ...signedOpts };
/*         req.headers = {
            'x-amz-access-token': (await this.lwa!.getAccessToken()) as string,
            'x-amz-date': amzLongDate(requestDate),
            'user-agent': 'sp-api-simple/0.1 (Language=JavaScript; Platform=Node)',
        }
        console.warn('**** requestInterceptor', req);
        const signedReq = aws4.sign({
            ...req,
            service: 'execute-api',
            host: u.hostname,
            path: u.pathname,
        }, { secretAccessKey: this.clientSecret, accessKeyId: 'AKIAQJSLQX2LEXYO3CZC' });
        console.warn('**** sign result', signedReq);
        return signedReq;
 */        // return req;
    }
    private ready() {
        let readyInterval: any; // Timeout not working, don't feel like digging up how to fix right now
        return new Promise((resolve, reject) => {
            if (this.isReady) resolve(true);
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
}

const test = new SpApi({
    region: ApiRegion.NorthAmerica,
    clientId: testkeys.LWA_CLIENT_ID,
    clientSecret: testkeys.LWA_CLIENT_SECRET,
    refreshToken: testkeys.TEST_REFRESH_TOKEN,
    awsAccessKey: testkeys.AWS_ACCESS_KEY,
    awsSecret: testkeys.AWS_SECRET,
});
console.warn('* SpApi created');
const x = await test.getAuthorizationCode({ developerId: '1', mwsAuthToken: '1', sellingPartnerId: '1' });
console.warn('* x=', x);

// const test = new SpApi({ region: ApiRegion.NorthAmericaSandbox });
// const x = await test.getAuthorizationCode({developerId: '1',mwsAuthToken: '1',sellingPartnerId:'1'})
/* const { apis: {
    authorization,
    catalog,
    fbaInbound,
    fbaInventory,
    smallAndLight,
    feeds,
    default: financial, // this should be financial?!
    fbaOutbound,
    merchantFulfillment,
    messaging,
    notifications,
    ordersV0,
    fees,
    productPricing,
    reports,
    sales,
    service,
    shipping,
    solicitations,
    uploads,
} } = x;

export function getAuthorizationCode(params: getAuthorizationCodeParams): apid.GetAuthorizationCodeResponse {
    return authorization.getAuthorizationCode(params);
}

await getAuthorizationCode({developerId: 'testing',mwsAuthToken: 'testing',sellingPartnerId: 'testing' });
 */
