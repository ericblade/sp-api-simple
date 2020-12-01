import { Object as TSO } from 'ts-toolbelt';
import SwaggerClient from 'swagger-client';

const OAUTH_URL = 'https://api.amazon.com/auth/o2/token';

export type LWATokens = {
    access_token: string,
    refresh_token: string,
    expires_at: number,
};

interface TokenExchangeParam {
    clientId: string,
    clientSecret: string,
    refreshToken?: string,
    oauthCode?: string,
};
type TokenExchangeParams = TSO.Either<TokenExchangeParam, "refreshToken" | "oauthCode">;

export default async function exchangeTokens({ clientId, clientSecret, refreshToken, oauthCode }: TokenExchangeParams) {
    const grant_type = oauthCode ? 'authorization_code' : 'refresh_token';
    const params = {
        grant_type,
        [oauthCode ? 'code' : 'refresh_token']: oauthCode || refreshToken,
        client_id: clientId,
        client_secret: clientSecret,
    };
    const request = {
        url: OAUTH_URL,
        method: 'POST',
        // TODO: I haven't the foggiest idea how to eliminate the 'any' usage in the 'body' section. Help?
        // keyof typeof params does not work.
        body: Object.keys(params).map((key: any) => {
            return `${encodeURIComponent(key)}=${encodeURIComponent((params as any)[key])}`;
        }).join('&'),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    const res = await SwaggerClient.http(request);
    const { access_token, refresh_token, expires_in } = res.body;
    const t: LWATokens = {
        access_token,
        refresh_token,
        expires_at: Date.now() + expires_in - 600,
    }
    return t;
}
