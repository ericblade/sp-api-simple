import SwaggerClient from 'swagger-client';
/* @ts-ignore */ // ignore the next line so that the code that builds the import file can be compiled
const spec = (await import('./sp-api-swagger.json')).default;
export var ApiRegion;
(function (ApiRegion) {
    ApiRegion["NorthAmerica"] = "na";
    ApiRegion["NorthAmericaSandbox"] = "sandbox-na";
    ApiRegion["Europe"] = "eu";
    ApiRegion["EuropeSandbox"] = "sandbox-eu";
    ApiRegion["FarEast"] = "fe";
    ApiRegion["FarEastSandbox"] = "sandbox-fe";
})(ApiRegion || (ApiRegion = {}));
;
const RegionServers = {
    na: { awsRegion: 'us-east-1', endpoint: 'sellingpartnerapi-na.amazon.com' },
    'sandbox-na': { awsRegion: 'us-east-1', endpoint: 'sandbox.sellingpartnerapi-na.amazon.com' },
    eu: { awsRegion: 'eu-west-1', endpoint: 'sellingpartnerapi-eu.amazon.com' },
    'sandbox-eu': { awsRegion: 'eu-west-1', endpoint: 'sandbox.sellingpartnerapi-eu.amazon.com' },
    fe: { awsRegion: 'us-west-2', endpoint: 'sellingpartnerapi-fe.amazon.com' },
    'sandbox-fe': { awsRegion: 'us-west-2', endpoint: 'sandbox.sellingpartnerapi-fe.amazon.com' },
};
export var Marketplace;
(function (Marketplace) {
    Marketplace["CA"] = "A2EUQ1WTGCTBG2";
    Marketplace["US"] = "ATVPDKIKX0DER";
    Marketplace["MX"] = "A1AM78C64UM0Y8";
    Marketplace["BR"] = "A2Q3Y263D00KWC";
    Marketplace["ES"] = "A1RKKUPIHCS9HS";
    Marketplace["GB"] = "A1F83G8C2ARO7P";
    Marketplace["FR"] = "A13V1IB3VIYZZH";
    Marketplace["NL"] = "A1805IZSGTT6HS";
    Marketplace["DE"] = "A1PA6795UKMFR9";
    Marketplace["IT"] = "APJ6JRA9NG5V4";
    Marketplace["TR"] = "A33AVAJ2PDY3EV";
    Marketplace["AE"] = "A2VIGQ35RCS4UG";
    Marketplace["IN"] = "A21TJRUUN4KGV";
    Marketplace["SG"] = "A19VAU5U5O7RUS";
    Marketplace["AU"] = "A39IBJ37TRP1C6";
    Marketplace["JP"] = "A1VC38T7YXB528";
})(Marketplace || (Marketplace = {}));
;
export default class SpApi {
    constructor({ region } = { region: ApiRegion.NorthAmerica }) {
        this.isReady = false;
        const { endpoint } = RegionServers[region];
        const thisSpec = { ...spec };
        thisSpec.host = endpoint;
        this.init(thisSpec);
    }
    async init(spec) {
        console.warn('* init spec host=', spec.host);
        this.swaggerClient = await (new SwaggerClient({ spec }));
        this.isReady = true;
    }
    ready() {
        return new Promise((resolve, reject) => {
            if (this.isReady)
                resolve(true);
            setTimeout(() => {
                if (this.isReady)
                    resolve(true);
            }, 10);
        });
    }
    async getAuthorizationCode(params) {
        await this.ready();
        return this.swaggerClient.apis.authorization.getAuthorizationCode(params);
    }
}
const test = new SpApi({ region: ApiRegion.NorthAmericaSandbox });
const x = await test.getAuthorizationCode({ developerId: '1', mwsAuthToken: '1', sellingPartnerId: '1' });
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
