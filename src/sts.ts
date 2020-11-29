import crypto from 'crypto-js';
import qs from 'querystring';
import https from 'https';
import xmlParser from 'fast-xml-parser';
import { IncomingHttpHeaders } from 'http';

function _sortQuery(query: any): any {
    if (query && Object.keys(query).length) {
        // Sort query params by key, because it needs to be sorted for correct signature creation
        return Object.keys(query).sort().reduce((r: any, k: any) => (r[k] = query[k], r), {});
    }
    return;
}

type StsQueryParams = {
    Action: 'AssumeRole',
    DurationSeconds: '3600',
    RoleArn: string,
    RoleSessionName: 'SPAPISession',
    Version: '2011-06-15',
};

function _constructEncodedQueryString(query: StsQueryParams){
    if (query) {
        /* @ts-ignore */ // qs types are not good.
        const queryString = qs.stringify(query, /*{ arrayFormat: 'comma' }*/);
        let encoded_query_obj = {};
        let query_params = queryString.split('&');
        query_params.map((query_param: any) => {
            let param_key_value = query_param.split('=');
            /* @ts-ignore */
            encoded_query_obj[param_key_value[0]] = param_key_value[1];
        });
        encoded_query_obj = _sortQuery(encoded_query_obj);
        let encoded_query_arr = [];
        for (let key in encoded_query_obj) {
            /* @ts-ignore */
            encoded_query_arr.push(key + '=' + encoded_query_obj[key]);
        }
        if (encoded_query_arr.length) {
            return encoded_query_arr.join('&');
        }
    }
    return '';
}

function _constructCanonicalRequestForRoleCredentials(encoded_query_string: string, iso_date: { short: string, full: string }){
    let canonical = [];
    canonical.push('POST');
    canonical.push('/');
    canonical.push('');
    canonical.push('host:sts.amazonaws.com');
    canonical.push('x-amz-content-sha256:' + crypto.SHA256(encoded_query_string));
    canonical.push('x-amz-date:' + iso_date.full);
    canonical.push('');
    canonical.push('host;x-amz-content-sha256;x-amz-date');
    canonical.push(crypto.SHA256(encoded_query_string));
    return canonical.join('\n');
}

function _createUTCISODate(){
    const iso_date = new Date().toISOString().replace(/[:\-]|\.\d{3}/g, '');
    return {
        short: iso_date.substr(0, 8),
        full: iso_date
    };
}

function _constructStringToSign(region: string, action_type: string, canonical_request: string, iso_date: { full: string, short: string }){
    let string_to_sign = [];
    string_to_sign.push('AWS4-HMAC-SHA256')
    string_to_sign.push(iso_date.full);
    string_to_sign.push(iso_date.short + '/' + region + '/' + action_type + '/aws4_request');
    string_to_sign.push(crypto.SHA256(canonical_request));
    return string_to_sign.join('\n');
}

function _constructSignature(region: string, action_type: string, string_to_sign: string, secret: string, iso_date: { full: string, short: string }){
    let signature = crypto.HmacSHA256(iso_date.short, 'AWS4' + secret);
    signature = crypto.HmacSHA256(region, signature);
    signature = crypto.HmacSHA256(action_type, signature);
    signature = crypto.HmacSHA256('aws4_request', signature);
    return crypto.HmacSHA256(string_to_sign, signature).toString(crypto.enc.Hex);
}
// https://github.com/amz-tools/amazon-sp-api/blob/ef67c2f6550ab3feec6a2710c664075f71f25e88/lib/Signer.js#L134
function signRoleCredentialsRequest(aws_user: { role: string, secret: string, id: string }){
    let query = {
        Action: 'AssumeRole' as const,
        DurationSeconds: '3600' as const,
        RoleArn: aws_user.role,
        RoleSessionName: 'SPAPISession' as const,
        Version: '2011-06-15' as const,
    };

    const isoDate = _createUTCISODate();

    let encoded_query_string = _constructEncodedQueryString(query);
    let canonical_request = _constructCanonicalRequestForRoleCredentials(encoded_query_string, isoDate);
    // TODO: Find out why role credentials request only works with us-east-1 AWS region
    let string_to_sign = _constructStringToSign('us-east-1', 'sts', canonical_request, isoDate);
    let signature = _constructSignature('us-east-1', 'sts', string_to_sign, aws_user.secret, isoDate);

    return {
        method: 'POST',
        url: 'https://sts.amazonaws.com',
        body: encoded_query_string,
        headers: {
            Authorization: 'AWS4-HMAC-SHA256 Credential=' + aws_user.id + '/' + isoDate.short + '/us-east-1/sts/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=' + signature,
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            Host: 'sts.amazonaws.com',
            'X-Amz-Content-Sha256': crypto.SHA256(encoded_query_string).toString(crypto.enc.Hex),
            'X-Amz-Date': isoDate.full
        }
    };
}

const agent = new https.Agent({
    rejectUnauthorized: false,
});


// https://github.com/amz-tools/amazon-sp-api/blob/main/lib/request.js
function request(req_options: any): Promise<{
    body: string,
    chunks: Array<any>,
    statusCode?: number,
    headers: IncomingHttpHeaders,
}> {
    return new Promise((resolve, reject) => {
        let url = new URL(req_options.url);
        let options = {
            method: req_options.method,
            port: 443,
            hostname: url.hostname,
            path: url.pathname + url.search,
            headers: req_options.headers || {}
        };
        let post_params;
        if (req_options.body) {
            post_params = req_options.body;
            options.headers['Content-Length'] = Buffer.byteLength(post_params);
        }
        let req = https.request(options, (res) => {
            let chunks: Array<any> = [];
            let body = '';
            res.on('data', (chunk) => {
                body += chunk;
                chunks.push(chunk);
            });
            res.on('end', () => {
                resolve({
                    body: body,
                    chunks: chunks,
                    statusCode: res.statusCode,
                    headers: res.headers
                });
            });
        });

        req.on('error', (e) => {
            reject(e);
        });
        if (post_params) {
            req.write(post_params, 'utf8');
        }
        req.end();
    });
};

type STSTokens = {
    id: string,
    secret: string,
    securityToken: string,
    expiresAt: number,
};

async function stsAssumeRole(role: string, secret: string, accessKey: string): Promise<STSTokens> {
    const roleReq = signRoleCredentialsRequest({
        role,
        secret,
        id: accessKey,
    });
    const res = await request(roleReq);
    const json = xmlParser.parse(res.body);
    const credentials = json?.AssumeRoleResponse?.AssumeRoleResult?.Credentials;
    if (credentials) {
        return {
            id: credentials.AccessKeyId,
            secret: credentials.SecretAccessKey,
            securityToken: credentials.SessionToken,
            expiresAt: (new Date(credentials.Expiration)).valueOf(),
        }
    }
    throw new Error(`failed to receive role credentials ${res.body}`);
}

type ConstructorParams = {
    role: string,
    secret: string,
    accessKey: string,
};

export class STS {
    roleTokens: STSTokens = { id: '', secret: '', securityToken: '', expiresAt: 0 };
    private roleToAssume: string;
    private secretAccessKey: string;
    private accessKey: string;

    constructor({ role, secret, accessKey }: ConstructorParams) {
        this.roleToAssume = role;
        this.secretAccessKey = secret;
        this.accessKey = accessKey;
    }

    async refreshTokens() {
        this.roleTokens = await stsAssumeRole(this.roleToAssume, this.secretAccessKey, this.accessKey);
        console.warn('* STS received tokens', this.roleTokens);
    }

    ready() {
        let readyInterval: any; // Timeout
        return new Promise(async (resolve, reject) => {
            if (Date.now() - (100 * 60 * 2) < this.roleTokens.expiresAt) {
                resolve(true);
            }
            await this.refreshTokens();
            resolve(true);
        });
    }
}
