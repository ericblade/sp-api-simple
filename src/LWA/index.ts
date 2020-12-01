import type { LWATokens } from './exchangeTokens';
import exchangeTokens from './exchangeTokens';

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
        if (!code) {
            throw new Error('must supply code');
        }
        if (!clientId) {
            throw new Error('must supply clientId');
        }
        if (!clientSecret) {
            throw new Error('must supply clientSecret');
        }
        const t = await exchangeTokens({
            clientId,
            clientSecret,
            oauthCode: code,
        });
        return new LWA(t, clientId, clientSecret);
    }

    static async fromRefreshToken(refreshToken: string, clientId: string, clientSecret: string) {
        if (!refreshToken) {
            throw new Error('must supply refreshToken');
        }
        if (!clientId) {
            throw new Error('must supply clientId');
        }
        if (!clientSecret) {
            throw new Error('must supply clientSecret');
        }
        const t = await exchangeTokens({
            clientId,
            clientSecret,
            refreshToken,
        });
        return new LWA(t, clientId, clientSecret);
    }

    private async refreshAccessToken() {
        const newTokens = await exchangeTokens({
            clientId: this.clientId,
            clientSecret: this.clientSecret,
            refreshToken: this.refresh_token,
        });
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

export default LWA;
