import SwaggerClient from 'swagger-client';
import type { default as apid } from './api-types';

const spec = (await import('./sp-api-swagger.json')).default;
const x = await (new SwaggerClient({ spec }));

console.warn('x=', x);

const { apis: {
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

type getAuthorizationCodeParams = {
    sellingPartnerId: string,
    developerId: string,
    mwsAuthToken: string,
};

export function getAuthorizationCode(params: getAuthorizationCodeParams): apid.GetAuthorizationCodeResponse {
    return authorization.getAuthorizationCode(params);
}
