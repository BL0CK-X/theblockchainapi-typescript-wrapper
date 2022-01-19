// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { BuyRequest } from '../models/BuyRequest';
import { BuyResponse } from '../models/BuyResponse';
import { DelistRequest } from '../models/DelistRequest';
import { DelistResponse } from '../models/DelistResponse';
import { GetNFTListingResponse } from '../models/GetNFTListingResponse';
import { ListRequest } from '../models/ListRequest';
import { ListResponse } from '../models/ListResponse';

/**
 * no description
 */
export class SolanaNFTMarketplacesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/buy-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Buy an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  **We are not responsible for any SOL or NFT lost.**  `Cost: 25 Credits`, `Cost: 3 Credits on Devnet`  Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)  (You are able to try on the `Free` plan as well, until you run out of credits.)
     * Buy
     * @param network The network ID
     * @param exchange The NFT exchange to interact with
     * @param mintAddress The mint address of the NFT you want to buy
     * @param buyRequest 
     */
    public async solanaBuyNFT(network: 'devnet' | 'mainnet-beta', exchange: 'solsea' | 'magic-eden', mintAddress: string, buyRequest?: BuyRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'network' is not null or undefined
        if (network === null || network === undefined) {
            throw new RequiredError("SolanaNFTMarketplacesApi", "solanaBuyNFT", "network");
        }


        // verify required parameter 'exchange' is not null or undefined
        if (exchange === null || exchange === undefined) {
            throw new RequiredError("SolanaNFTMarketplacesApi", "solanaBuyNFT", "exchange");
        }


        // verify required parameter 'mintAddress' is not null or undefined
        if (mintAddress === null || mintAddress === undefined) {
            throw new RequiredError("SolanaNFTMarketplacesApi", "solanaBuyNFT", "mintAddress");
        }



        // Path Params
        const localVarPath = '/solana/nft/marketplaces/{exchange}/buy/{network}/{mint_address}'
            .replace('{' + 'network' + '}', encodeURIComponent(String(network)))
            .replace('{' + 'exchange' + '}', encodeURIComponent(String(exchange)))
            .replace('{' + 'mint_address' + '}', encodeURIComponent(String(mintAddress)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(buyRequest, "BuyRequest", ""),
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
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/delist-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Delist an NFT from a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  **We are not responsible for any SOL or NFT lost.**  `Cost: 8 Credits`, `Cost: 3 Credits on Devnet`  Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)  (You are able to try on the `Free` plan as well, until you run out of credits.)
     * Delist
     * @param network The network ID
     * @param exchange The NFT exchange to interact with
     * @param mintAddress The mint address of the NFT you want to buy
     * @param delistRequest 
     */
    public async solanaDelistNFT(network: 'devnet' | 'mainnet-beta', exchange: 'solsea' | 'magic-eden', mintAddress: string, delistRequest?: DelistRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'network' is not null or undefined
        if (network === null || network === undefined) {
            throw new RequiredError("SolanaNFTMarketplacesApi", "solanaDelistNFT", "network");
        }


        // verify required parameter 'exchange' is not null or undefined
        if (exchange === null || exchange === undefined) {
            throw new RequiredError("SolanaNFTMarketplacesApi", "solanaDelistNFT", "exchange");
        }


        // verify required parameter 'mintAddress' is not null or undefined
        if (mintAddress === null || mintAddress === undefined) {
            throw new RequiredError("SolanaNFTMarketplacesApi", "solanaDelistNFT", "mintAddress");
        }



        // Path Params
        const localVarPath = '/solana/nft/marketplaces/{exchange}/delist/{network}/{mint_address}'
            .replace('{' + 'network' + '}', encodeURIComponent(String(network)))
            .replace('{' + 'exchange' + '}', encodeURIComponent(String(exchange)))
            .replace('{' + 'mint_address' + '}', encodeURIComponent(String(mintAddress)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(delistRequest, "DelistRequest", ""),
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
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/get-nft-listing\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get the Marketplace listing of a Solana NFT.  Currently checks for the following Solana NFT martketplaces: SolSea, Magic Eden  `Cost: 1 Credits`, (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get NFT Listing
     * @param network The network ID
     * @param mintAddress The mint address of the NFT you want to buy
     */
    public async solanaGetNFTListing(network: 'devnet' | 'mainnet-beta', mintAddress: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'network' is not null or undefined
        if (network === null || network === undefined) {
            throw new RequiredError("SolanaNFTMarketplacesApi", "solanaGetNFTListing", "network");
        }


        // verify required parameter 'mintAddress' is not null or undefined
        if (mintAddress === null || mintAddress === undefined) {
            throw new RequiredError("SolanaNFTMarketplacesApi", "solanaGetNFTListing", "mintAddress");
        }


        // Path Params
        const localVarPath = '/solana/nft/marketplaces/listing/{network}/{mint_address}'
            .replace('{' + 'network' + '}', encodeURIComponent(String(network)))
            .replace('{' + 'mint_address' + '}', encodeURIComponent(String(mintAddress)));

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
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/list-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  List an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  **We are not responsible for any SOL or NFT lost.**  `Cost: 12 Credits`, `Cost: 3 Credits on Devnet`  Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)  (You are able to try on the `Free` plan as well, until you run out of credits.)
     * List
     * @param network The network ID
     * @param exchange The NFT exchange to interact with
     * @param mintAddress The mint address of the NFT you want to buy
     * @param listRequest 
     */
    public async solanaListNFT(network: 'devnet' | 'mainnet-beta', exchange: 'solsea' | 'magic-eden', mintAddress: string, listRequest?: ListRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'network' is not null or undefined
        if (network === null || network === undefined) {
            throw new RequiredError("SolanaNFTMarketplacesApi", "solanaListNFT", "network");
        }


        // verify required parameter 'exchange' is not null or undefined
        if (exchange === null || exchange === undefined) {
            throw new RequiredError("SolanaNFTMarketplacesApi", "solanaListNFT", "exchange");
        }


        // verify required parameter 'mintAddress' is not null or undefined
        if (mintAddress === null || mintAddress === undefined) {
            throw new RequiredError("SolanaNFTMarketplacesApi", "solanaListNFT", "mintAddress");
        }



        // Path Params
        const localVarPath = '/solana/nft/marketplaces/{exchange}/list/{network}/{mint_address}'
            .replace('{' + 'network' + '}', encodeURIComponent(String(network)))
            .replace('{' + 'exchange' + '}', encodeURIComponent(String(exchange)))
            .replace('{' + 'mint_address' + '}', encodeURIComponent(String(mintAddress)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(listRequest, "ListRequest", ""),
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

export class SolanaNFTMarketplacesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to solanaBuyNFT
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async solanaBuyNFT(response: ResponseContext): Promise<BuyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BuyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BuyResponse", ""
            ) as BuyResponse;
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
            const body: BuyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BuyResponse", ""
            ) as BuyResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to solanaDelistNFT
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async solanaDelistNFT(response: ResponseContext): Promise<DelistResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DelistResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DelistResponse", ""
            ) as DelistResponse;
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
            const body: DelistResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DelistResponse", ""
            ) as DelistResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to solanaGetNFTListing
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async solanaGetNFTListing(response: ResponseContext): Promise<GetNFTListingResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetNFTListingResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetNFTListingResponse", ""
            ) as GetNFTListingResponse;
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
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Our API will throw a 403 if you are providing a body in the GET request.  Such requests are insecure and rejected. The solution is not to provide any sort of body in any GET request. ", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "No marketplace listing found for this NFT.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetNFTListingResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetNFTListingResponse", ""
            ) as GetNFTListingResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to solanaListNFT
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async solanaListNFT(response: ResponseContext): Promise<ListResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListResponse", ""
            ) as ListResponse;
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
            const body: ListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListResponse", ""
            ) as ListResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
