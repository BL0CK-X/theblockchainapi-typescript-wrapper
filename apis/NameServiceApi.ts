// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { InputBlockchainIdentifier } from '../models/InputBlockchainIdentifier';
import { InputName } from '../models/InputName';

/**
 * no description
 */
export class NameServiceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      Get the blockchain identifier from a name.  e.g., Input `vitalik.eth` and output `0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045`  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the identifier
     * @param blockchain The blockchain you want to use 
     * @param network The network of the blockchain you selected  - Solana: &#x60;devnet&#x60;, &#x60;mainnet-beta&#x60; - Ethereum: &#x60;ropsten&#x60;, &#x60;mainnet&#x60;  Defaults when not provided (not applicable to path parameters): - Solana: &#x60;devnet&#x60; - Ethereum: &#x60;ropsten&#x60;
     * @param inputName 
     */
    public async getBlockchainIdentifierFromName(blockchain: 'ethereum' | 'solana', network: string, inputName?: InputName, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'blockchain' is not null or undefined
        if (blockchain === null || blockchain === undefined) {
            throw new RequiredError("NameServiceApi", "getBlockchainIdentifierFromName", "blockchain");
        }


        // verify required parameter 'network' is not null or undefined
        if (network === null || network === undefined) {
            throw new RequiredError("NameServiceApi", "getBlockchainIdentifierFromName", "network");
        }



        // Path Params
        const localVarPath = '/{blockchain}/{network}/name_service/name_to_blockchain_identifier'
            .replace('{' + 'blockchain' + '}', encodeURIComponent(String(blockchain)))
            .replace('{' + 'network' + '}', encodeURIComponent(String(network)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(inputName, "InputName", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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
     * <a href=\"https://github.com/BL0CK-X/blockchain-api\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      Get the name from a blockchain identifier.  e.g., Input `0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045` and output `vitalik.eth`  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the name
     * @param blockchain The blockchain you want to use 
     * @param network The network of the blockchain you selected  - Solana: &#x60;devnet&#x60;, &#x60;mainnet-beta&#x60; - Ethereum: &#x60;ropsten&#x60;, &#x60;mainnet&#x60;  Defaults when not provided (not applicable to path parameters): - Solana: &#x60;devnet&#x60; - Ethereum: &#x60;ropsten&#x60;
     * @param inputBlockchainIdentifier 
     */
    public async getNameForBlockchainIdentifier(blockchain: 'ethereum' | 'solana', network: string, inputBlockchainIdentifier?: InputBlockchainIdentifier, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'blockchain' is not null or undefined
        if (blockchain === null || blockchain === undefined) {
            throw new RequiredError("NameServiceApi", "getNameForBlockchainIdentifier", "blockchain");
        }


        // verify required parameter 'network' is not null or undefined
        if (network === null || network === undefined) {
            throw new RequiredError("NameServiceApi", "getNameForBlockchainIdentifier", "network");
        }



        // Path Params
        const localVarPath = '/{blockchain}/{network}/name_service/blockchain_identifier_to_name'
            .replace('{' + 'blockchain' + '}', encodeURIComponent(String(blockchain)))
            .replace('{' + 'network' + '}', encodeURIComponent(String(network)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(inputBlockchainIdentifier, "InputBlockchainIdentifier", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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

export class NameServiceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBlockchainIdentifierFromName
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBlockchainIdentifierFromName(response: ResponseContext): Promise<InputBlockchainIdentifier > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InputBlockchainIdentifier = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InputBlockchainIdentifier", ""
            ) as InputBlockchainIdentifier;
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
            const body: InputBlockchainIdentifier = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InputBlockchainIdentifier", ""
            ) as InputBlockchainIdentifier;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getNameForBlockchainIdentifier
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getNameForBlockchainIdentifier(response: ResponseContext): Promise<InputName > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InputName = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InputName", ""
            ) as InputName;
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
            const body: InputName = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InputName", ""
            ) as InputName;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
