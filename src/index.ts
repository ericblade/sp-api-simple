import SwaggerClient from 'swagger-client';
import type { default as apid } from './api-types';

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

export default class SpApi {
    swaggerClient: typeof SwaggerClient;
    isReady = false;

    constructor({ region }: { region: ApiRegion } = { region: ApiRegion.NorthAmerica }) {
        const { endpoint } = RegionServers[region];
        const thisSpec = { ...spec };
        thisSpec.host = endpoint;
        this.init(thisSpec);
    }
    private async init(spec: any) {
        console.warn('* init spec host=', spec.host);
        this.swaggerClient = await (new SwaggerClient({ spec }));
        this.isReady = true;
    }
    private ready() {
        return new Promise((resolve, reject) => {
            if (this.isReady) resolve(true);
            setTimeout(() => {
                if (this.isReady) resolve(true);
            }, 10);
        });
    }
    async getAuthorizationCode(params: getAuthorizationCodeParams): Promise<apid.GetAuthorizationCodeResponse> {
        await this.ready();
        return this.swaggerClient.apis.authorization.getAuthorizationCode(params);
    }
}

const test = new SpApi({ region: ApiRegion.NorthAmericaSandbox });
const x = await test.getAuthorizationCode({developerId: '1',mwsAuthToken: '1',sellingPartnerId:'1'})
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
