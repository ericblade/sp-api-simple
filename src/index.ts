import SwaggerClient from 'swagger-client';
import type { default as apid } from './api-types';

/* @ts-ignore */ // ignore the next line so that the code that builds the import file can be compiled
const spec = (await import('./sp-api-swagger.json')).default;

enum ApiRegion {
    NorthAmerica = 'na',
    Europe = 'eu',
    FarEast = 'fe',
};

const RegionServers: Record<ApiRegion, { awsRegion: string, endpoint: string }> = {
    na: { awsRegion: 'us-east-1', endpoint: 'sellingpartnerapi-na.amazon.com' },
    eu: { awsRegion: 'eu-west-1', endpoint: 'sellingpartnerapi-eu.amazon.com' },
    fe: { awsRegion: 'us-west-2', endpoint: 'sellingpartnerapi-fe.amazon.com' },
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

const test = new SpApi({ region: ApiRegion.FarEast });
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
