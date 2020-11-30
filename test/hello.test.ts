/* @ts-ignore */
import { TEST_REFRESH_TOKEN, LWA_CLIENT_ID, LWA_CLIENT_SECRET, AWS_ACCESS_KEY, AWS_SECRET, AWS_ROLE_ARN } from './testkeys';
import lib, { ApiRegion } from '../src/index';

describe('Testing', () => {
    it('Tests!', () => {
        const x = new lib({
            appRoleArn: AWS_ROLE_ARN,
            awsAccessKey: AWS_ACCESS_KEY,
            awsSecret: AWS_SECRET,
            clientId:LWA_CLIENT_ID,
            clientSecret: LWA_CLIENT_SECRET,
            refreshToken:TEST_REFRESH_TOKEN,
            region:ApiRegion.NorthAmericaSandbox,
        });
        return true;
    });
});

export default {};
