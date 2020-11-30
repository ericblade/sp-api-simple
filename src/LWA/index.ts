import SwaggerClient from 'swagger-client';

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

export default LWA;
