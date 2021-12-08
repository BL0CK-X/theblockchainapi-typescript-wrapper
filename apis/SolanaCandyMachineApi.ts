// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { CreateTestCandyMachineRequest } from '../models/CreateTestCandyMachineRequest';
import { CreateTestCandyMachineResponse } from '../models/CreateTestCandyMachineResponse';
import { GetAllNFTsResponse } from '../models/GetAllNFTsResponse';
import { GetCandyDetailsErrorResponse } from '../models/GetCandyDetailsErrorResponse';
import { GetCandyDetailsRequest } from '../models/GetCandyDetailsRequest';
import { GetCandyDetailsResponse } from '../models/GetCandyDetailsResponse';
import { GetConfigInfoRequest } from '../models/GetConfigInfoRequest';
import { GetConfigInfoResponse } from '../models/GetConfigInfoResponse';
import { GetMintedNFTsRequest } from '../models/GetMintedNFTsRequest';
import { GetMintedNFTsResponse } from '../models/GetMintedNFTsResponse';
import { MintNFTErrorResponse } from '../models/MintNFTErrorResponse';
import { MintNFTRequest } from '../models/MintNFTRequest';
import { MintNFTResponse } from '../models/MintNFTResponse';

/**
 * no description
 */
export class SolanaCandyMachineApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/create-test-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.   Use this endpoint to create a test candy machine so that you can test your minting bot.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Create a test candy machine 
     * @param createTestCandyMachineRequest 
     */
    public async solanaCreateTestCandyMachine(createTestCandyMachineRequest?: CreateTestCandyMachineRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/solana/nft/candy_machine';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createTestCandyMachineRequest, "CreateTestCandyMachineRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyID"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["APISecretKey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-all-nfts\" target=\"_blank\"> See examples (Python, JavaScript)</a>.  Use this endpoint to get the list of all NFTs (minted and unminted) from a Solana Candy Machine.  `Cost: 3 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the list of all NFTs (minted and unminted) from a Solana Candy Machine 
     * @param network The network ID (devnet, mainnet-beta)
     * @param candyMachineId The ID of the candy machine
     */
    public async solanaGetAllNFTsFromCandyMachine(network: string, candyMachineId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'network' is not null or undefined
        if (network === null || network === undefined) {
            throw new RequiredError("SolanaCandyMachineApi", "solanaGetAllNFTsFromCandyMachine", "network");
        }


        // verify required parameter 'candyMachineId' is not null or undefined
        if (candyMachineId === null || candyMachineId === undefined) {
            throw new RequiredError("SolanaCandyMachineApi", "solanaGetAllNFTsFromCandyMachine", "candyMachineId");
        }


        // Path Params
        const localVarPath = '/solana/nft/candy_machine/{network}/{candy_machine_id}/nfts'
            .replace('{' + 'network' + '}', encodeURIComponent(String(network)))
            .replace('{' + 'candy_machine_id' + '}', encodeURIComponent(String(candyMachineId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyID"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["APISecretKey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-config-info\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get the details of a Solana Candy Machine configuration.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the details of a Solana Candy Machine configuration 
     * @param getConfigInfoRequest 
     */
    public async solanaGetCandyMachineConfigurationDetails(getConfigInfoRequest?: GetConfigInfoRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/solana/nft/candy_machine/config/info';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(getConfigInfoRequest, "GetConfigInfoRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyID"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["APISecretKey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-info\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get the following details about a Metaplex candy machine: uuid, go live date, items in the collection, and the cost to mint.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get a Metaplex candy machine's details 
     * @param getCandyDetailsRequest 
     */
    public async solanaGetCandyMachineDetails(getCandyDetailsRequest?: GetCandyDetailsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/solana/nft/candy_machine/info';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(getCandyDetailsRequest, "GetCandyDetailsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyID"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["APISecretKey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-minted-nfts\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get the list of NFTs minted from a Solana Candy Machine.  See example for how to get the list of NFT hashes <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-hash-table\" target=\"_blank\">here</a>.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the list of NFTs minted from a Solana Candy Machine 
     * @param getMintedNFTsRequest 
     */
    public async solanaGetNFTsMintedFromCandyMachine(getMintedNFTsRequest?: GetMintedNFTsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/solana/nft/candy_machine/nfts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(getMintedNFTsRequest, "GetMintedNFTsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyID"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["APISecretKey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/mint-from-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to mint an NFT from a metaplex candy machine as soon as it drops.  `Cost: 10 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Mint an NFT from a Metaplex candy machine
     * @param mintNFTRequest 
     */
    public async solanaMintFromCandyMachine(mintNFTRequest?: MintNFTRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/solana/nft/candy_machine/mint';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(mintNFTRequest, "MintNFTRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyID"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["APISecretKey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class SolanaCandyMachineApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to solanaCreateTestCandyMachine
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async solanaCreateTestCandyMachine(response: ResponseContext): Promise<CreateTestCandyMachineResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateTestCandyMachineResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateTestCandyMachineResponse", ""
            ) as CreateTestCandyMachineResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request (check response message)", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid API key pair in headers", undefined, response.headers);
        }
        if (isCodeInRange("402", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateTestCandyMachineResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateTestCandyMachineResponse", ""
            ) as CreateTestCandyMachineResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to solanaGetAllNFTsFromCandyMachine
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async solanaGetAllNFTsFromCandyMachine(response: ResponseContext): Promise<GetAllNFTsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetAllNFTsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAllNFTsResponse", ""
            ) as GetAllNFTsResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request (check response message)", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid API key pair in headers", undefined, response.headers);
        }
        if (isCodeInRange("402", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetAllNFTsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetAllNFTsResponse", ""
            ) as GetAllNFTsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to solanaGetCandyMachineConfigurationDetails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async solanaGetCandyMachineConfigurationDetails(response: ResponseContext): Promise<GetConfigInfoResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetConfigInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetConfigInfoResponse", ""
            ) as GetConfigInfoResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request (check response message)", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid API key pair in headers", undefined, response.headers);
        }
        if (isCodeInRange("402", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetConfigInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetConfigInfoResponse", ""
            ) as GetConfigInfoResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to solanaGetCandyMachineDetails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async solanaGetCandyMachineDetails(response: ResponseContext): Promise<GetCandyDetailsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCandyDetailsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCandyDetailsResponse", ""
            ) as GetCandyDetailsResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: GetCandyDetailsErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCandyDetailsErrorResponse", ""
            ) as GetCandyDetailsErrorResponse;
            throw new ApiException<GetCandyDetailsErrorResponse>(400, "Bad request (check response message)", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid API key pair in headers", undefined, response.headers);
        }
        if (isCodeInRange("402", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetCandyDetailsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCandyDetailsResponse", ""
            ) as GetCandyDetailsResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to solanaGetNFTsMintedFromCandyMachine
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async solanaGetNFTsMintedFromCandyMachine(response: ResponseContext): Promise<Array<GetMintedNFTsResponse> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<GetMintedNFTsResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<GetMintedNFTsResponse>", ""
            ) as Array<GetMintedNFTsResponse>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request (check response message)", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid API key pair in headers", undefined, response.headers);
        }
        if (isCodeInRange("402", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<GetMintedNFTsResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<GetMintedNFTsResponse>", ""
            ) as Array<GetMintedNFTsResponse>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to solanaMintFromCandyMachine
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async solanaMintFromCandyMachine(response: ResponseContext): Promise<MintNFTResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MintNFTResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MintNFTResponse", ""
            ) as MintNFTResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MintNFTErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MintNFTErrorResponse", ""
            ) as MintNFTErrorResponse;
            throw new ApiException<MintNFTErrorResponse>(400, "Bad request (check response message)", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid API key pair in headers", undefined, response.headers);
        }
        if (isCodeInRange("402", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MintNFTResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MintNFTResponse", ""
            ) as MintNFTResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
