// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { TokenMetadataResponse } from '../models/TokenMetadataResponse';

/**
 * no description
 */
export class TokenApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      Get the metadata of a token.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get a token's metadata
     * @param blockchain The blockchain you want to use 
     * @param network The network of the blockchain you selected  - Solana: &#x60;devnet&#x60;, &#x60;mainnet-beta&#x60; - Ethereum: &#x60;ropsten&#x60;, &#x60;mainnet&#x60;  Defaults when not provided (not applicable to path parameters): - Solana: &#x60;devnet&#x60; - Ethereum: &#x60;ropsten&#x60;
     * @param tokenBlockchainIdentifier The identifier of the token (e.g., &#x60;mint_address&#x60; on &#x60;Solana&#x60; or &#x60;token_address&#x60; on &#x60;Ethereum&#x60;) 
     */
    public async getTokenMetadata(blockchain: 'ethereum' | 'solana', network: string, tokenBlockchainIdentifier: 'ethereum' | 'solana', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'blockchain' is not null or undefined
        if (blockchain === null || blockchain === undefined) {
            throw new RequiredError("TokenApi", "getTokenMetadata", "blockchain");
        }


        // verify required parameter 'network' is not null or undefined
        if (network === null || network === undefined) {
            throw new RequiredError("TokenApi", "getTokenMetadata", "network");
        }


        // verify required parameter 'tokenBlockchainIdentifier' is not null or undefined
        if (tokenBlockchainIdentifier === null || tokenBlockchainIdentifier === undefined) {
            throw new RequiredError("TokenApi", "getTokenMetadata", "tokenBlockchainIdentifier");
        }


        // Path Params
        const localVarPath = '/{blockchain}/{network}/token/{token_blockchain_identifier}'
            .replace('{' + 'blockchain' + '}', encodeURIComponent(String(blockchain)))
            .replace('{' + 'network' + '}', encodeURIComponent(String(network)))
            .replace('{' + 'token_blockchain_identifier' + '}', encodeURIComponent(String(tokenBlockchainIdentifier)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyID"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["APISecretKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      List all tokens.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * List all tokens
     * @param blockchain The blockchain you want to use 
     * @param network The network of the blockchain you selected  - Solana: &#x60;devnet&#x60;, &#x60;mainnet-beta&#x60; - Ethereum: &#x60;ropsten&#x60;, &#x60;mainnet&#x60;  Defaults when not provided (not applicable to path parameters): - Solana: &#x60;devnet&#x60; - Ethereum: &#x60;ropsten&#x60;
     */
    public async listAllTokens(blockchain: 'solana', network: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'blockchain' is not null or undefined
        if (blockchain === null || blockchain === undefined) {
            throw new RequiredError("TokenApi", "listAllTokens", "blockchain");
        }


        // verify required parameter 'network' is not null or undefined
        if (network === null || network === undefined) {
            throw new RequiredError("TokenApi", "listAllTokens", "network");
        }


        // Path Params
        const localVarPath = '/{blockchain}/{network}/all_tokens'
            .replace('{' + 'blockchain' + '}', encodeURIComponent(String(blockchain)))
            .replace('{' + 'network' + '}', encodeURIComponent(String(network)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyID"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["APISecretKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class TokenApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTokenMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTokenMetadata(response: ResponseContext): Promise<TokenMetadataResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TokenMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TokenMetadataResponse", ""
            ) as TokenMetadataResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid input or issue retrieving transaction. See response for details", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid API key pair in headers", undefined, response.headers);
        }
        if (isCodeInRange("402", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Task not found.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TokenMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TokenMetadataResponse", ""
            ) as TokenMetadataResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAllTokens
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listAllTokens(response: ResponseContext): Promise<Array<TokenMetadataResponse> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<TokenMetadataResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TokenMetadataResponse>", ""
            ) as Array<TokenMetadataResponse>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid input or issue retrieving transaction. See response for details", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid API key pair in headers", undefined, response.headers);
        }
        if (isCodeInRange("402", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Task not found.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<TokenMetadataResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<TokenMetadataResponse>", ""
            ) as Array<TokenMetadataResponse>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
