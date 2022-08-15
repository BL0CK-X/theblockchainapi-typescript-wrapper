// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { GetCandyMachineIDRequest } from '../models/GetCandyMachineIDRequest';
import { GetCandyMachineIDResponse } from '../models/GetCandyMachineIDResponse';
import { NFT } from '../models/NFT';
import { NFTMintErrorResponse } from '../models/NFTMintErrorResponse';
import { NFTMintFee } from '../models/NFTMintFee';
import { NFTMintRequest } from '../models/NFTMintRequest';
import { NFTOwnerAdvancedResponse } from '../models/NFTOwnerAdvancedResponse';
import { NFTOwnerResponse } from '../models/NFTOwnerResponse';
import { NFTSearchRequest } from '../models/NFTSearchRequest';
import { NFTSearchResponse } from '../models/NFTSearchResponse';

/**
 * no description
 */
export class SolanaNFTApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/create-an-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Create a Metaplex NFT on Solana.   Read more on this <a href=\"https://blog.blockchainapi.com/2021/11/16/a-note-on-nfts.html\" target=\"_blank\">here</a>.  Note: Please see <a href=\"https://blog.blockchainapi.com/2022/01/18/how-to-format-off-chain-nft-metadata.html\" target=\"_blank\">this article</a> to learn more about what `nft_upload_method` means and how storing the metadata of an NFT works.  If you're using `nft_upload_method = \"LINK\"`, then to add attributes to the NFT or an image, add them to a JSON file and upload that to Arweave/IPFS/Filecoin. See the JSON format <a href=\"https://blog.blockchainapi.com/2022/01/18/how-to-format-off-chain-nft-metadata.html\">here</a>.  Then supply the link to the JSON file in `nft_url`.   NOTE: Don't use `nft_metadata`. Values provided here do not do anything at the moment. We are fixing this soon.  `Cost: 5 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Create an NFT on Solana
     * @param nFTMintRequest 
     */
    public async solanaCreateNFT(nFTMintRequest?: NFTMintRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/solana/nft';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(nFTMintRequest, "NFTMintRequest", ""),
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
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-metadata\" target=\"_blank\">See examples (Python, JavaScript)</a>.       Get the metadata of an NFT.  If you're looking for metadata such as attributes and others, you can retrieve them from the link in the URI field of the NFT metadata returned. See the example on the right. The URI is an Arweave URL. That contains the attributes and other information about the NFT. That URL is stored on the Solana blockchain.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get an NFT's metadata
     * @param network The network ID
     * @param mintAddress The mint address of the NFT
     */
    public async solanaGetNFT(network: 'devnet' | 'mainnet-beta', mintAddress: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'network' is not null or undefined
        if (network === null || network === undefined) {
            throw new RequiredError("SolanaNFTApi", "solanaGetNFT", "network");
        }


        // verify required parameter 'mintAddress' is not null or undefined
        if (mintAddress === null || mintAddress === undefined) {
            throw new RequiredError("SolanaNFTApi", "solanaGetNFT", "mintAddress");
        }


        // Path Params
        const localVarPath = '/solana/nft/{network}/{mint_address}'
            .replace('{' + 'network' + '}', encodeURIComponent(String(network)))
            .replace('{' + 'mint_address' + '}', encodeURIComponent(String(mintAddress)));

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
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-mint-fee\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the estimated fee for minting an NFT on the Solana blockchain using the Metaplex protocol.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the NFT mint fee
     */
    public async solanaGetNFTMintFee(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/solana/nft/mint/fee';

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
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-owner\" target=\"_blank\">See examples (Python, JavaScript)</a>.       Get the owner of an NFT. This returns the public key of the wallet that owns the associated token account that owns the NFT.  If you want to get the associated token account that literally owns the NFT, derive the associated token account address from the public key returned and the NFT mint address using <a href=\"#operation/solanaDeriveAssociatedTokenAccountAddress\">this endpoint</a>.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get owner of an NFT
     * @param network The network ID
     * @param mintAddress The mint address of the NFT
     */
    public async solanaGetNFTOwner(network: 'devnet' | 'mainnet-beta', mintAddress: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'network' is not null or undefined
        if (network === null || network === undefined) {
            throw new RequiredError("SolanaNFTApi", "solanaGetNFTOwner", "network");
        }


        // verify required parameter 'mintAddress' is not null or undefined
        if (mintAddress === null || mintAddress === undefined) {
            throw new RequiredError("SolanaNFTApi", "solanaGetNFTOwner", "mintAddress");
        }


        // Path Params
        const localVarPath = '/solana/nft/{network}/{mint_address}/owner'
            .replace('{' + 'network' + '}', encodeURIComponent(String(network)))
            .replace('{' + 'mint_address' + '}', encodeURIComponent(String(mintAddress)));

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
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-owner\" target=\"_blank\">See examples (Python, JavaScript)</a>.       Get the owner, state, listed price, and listed marketplace (if any) of an NFT.   Here's are a couple of example responses: ``` {     'contract': {         'contract_blockchain_identifier': 'M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K',          'contract_id': 'magic-eden-v2',          'contract_name': 'Magic Eden v2',          'contract_type': 'marketplace'     },      'owner': '25UJMR3FiMM6noQtPEaCJ6eDU2YQ7myDhikVQXmMuSRW',      'price': 50000000,      'state': 'listing' } ```  ``` {     'contract': null,      'owner': 'C37PJiJU8WTgoUoFqmB1Maw8hkuENDZoGDQA1pm54Fdd',      'price': null,      'state': 'holding' } ```  This function will return whether the NFT is `listed`, `loaned` (Yawww NFT loans), `otc`, `staked`, `burned`, or `held`.  If listed, it will return the contract, the readable name of the contract (e.g., Magic Eden, OpenSea), the contract ID (if any; e.g., open-sea), the owner, and the listed price. From this, you can get the floor of a collection. We currently support Magic Eden (v1, v2), Exchange.Art (auction, singles), CoralCube, Solanart (v1, v2), Yawww Loans, Yawww OTC, OpenSea, Fractal, SolSea, and AlphaArt.   If loaned, it will return the loan requester as the owner, the loan amount, and the loan contract. We only support the Yawww loaning contract.  If listed on an OTC marketplace, it will return the same information as `listed`. OTC is used to distinguish between marketplaces that respect royalties (OTC) and those that don't (normal ones). The only `OTC` contract we track is Yawwww, at the moment. We do not yet track Solanart v3.  If staked, it will return the owner and the staking contract public key.  If burned, it will return the `burner` as the `owner`.  If held, it will simply return the owner.  If you want to get the literal owner, which may or may not be the same as the owner returned here, call the simplified [get NFT owner function](/#tag/Solana-NFT/operation/solanaGetNFTOwner). For example, Bob might own the NFT, but if it is listed on Magic Eden, then the NFT is held in escrow and \"owned\" by Magic Eden. The simplified function will return Magic Eden as the owner (the literal owner). This advanced function will tell you the implied owner, which would be Bob.  `Cost: 1.0 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get owner of an NFT (advanced)
     * @param network The network ID
     * @param mintAddress The mint address of the NFT
     */
    public async solanaGetNFTOwnerAdvanced(network: 'devnet' | 'mainnet-beta', mintAddress: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'network' is not null or undefined
        if (network === null || network === undefined) {
            throw new RequiredError("SolanaNFTApi", "solanaGetNFTOwnerAdvanced", "network");
        }


        // verify required parameter 'mintAddress' is not null or undefined
        if (mintAddress === null || mintAddress === undefined) {
            throw new RequiredError("SolanaNFTApi", "solanaGetNFTOwnerAdvanced", "mintAddress");
        }


        // Path Params
        const localVarPath = '/solana/nft/{network}/{mint_address}/owner_advanced'
            .replace('{' + 'network' + '}', encodeURIComponent(String(network)))
            .replace('{' + 'mint_address' + '}', encodeURIComponent(String(mintAddress)));

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
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-candy-machine-id\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get the candy machine ID from where the NFT came, if any. NFTs can also be minted without a candy machine.  It's also possible that we return \"Not Found\" when the NFT actually did come from a version of a candy machine. We check for the most popular versions of candy machine, but it is possible that someone creates their own candy machine version and mints NFTs from it.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the ID of the candy machine of an NFT 
     * @param getCandyMachineIDRequest 
     */
    public async solanaGetNFTsCandyMachineId(getCandyMachineIDRequest?: GetCandyMachineIDRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/solana/nft/candy_machine_id';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(getCandyMachineIDRequest, "GetCandyMachineIDRequest", ""),
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
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/search-nfts\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can search for NFTs by their symbol, name of NFTs, uuid, configuration address, and update authority.  The output is a list of NFTs that match your query.  You can also provide multiple search clauses, such as the update authority (`update_authority=\"G17UmNGnMJ851x3M1JXocgpft1afcYedjPuFpo1ohhCk\"`) and symbol begins with \"Sol\" (`symbol=\"Sol\", symbol_search_method='begins_with'`).  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Search NFTs on Solana
     * @param nFTSearchRequest 
     */
    public async solanaSearchNFTs(nFTSearchRequest?: NFTSearchRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/solana/nft/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(nFTSearchRequest, "NFTSearchRequest", ""),
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

export class SolanaNFTApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to solanaCreateNFT
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async solanaCreateNFT(response: ResponseContext): Promise<NFT > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NFT = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NFT", ""
            ) as NFT;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: NFTMintErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NFTMintErrorResponse", ""
            ) as NFTMintErrorResponse;
            throw new ApiException<NFTMintErrorResponse>(400, "Bad request (check response message)", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid API key pair in headers", undefined, response.headers);
        }
        if (isCodeInRange("402", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;.", undefined, response.headers);
        }
        if (isCodeInRange("414", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "URI too long (the data you provided was too large [e.g., the metadata provided was 500kb])", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NFT = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NFT", ""
            ) as NFT;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to solanaGetNFT
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async solanaGetNFT(response: ResponseContext): Promise<NFT > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NFT = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NFT", ""
            ) as NFT;
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
            throw new ApiException<undefined>(response.httpStatusCode, "The doesn&#39;t exist", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NFT = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NFT", ""
            ) as NFT;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to solanaGetNFTMintFee
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async solanaGetNFTMintFee(response: ResponseContext): Promise<NFTMintFee > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NFTMintFee = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NFTMintFee", ""
            ) as NFTMintFee;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid API key pair in headers", undefined, response.headers);
        }
        if (isCodeInRange("402", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NFTMintFee = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NFTMintFee", ""
            ) as NFTMintFee;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to solanaGetNFTOwner
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async solanaGetNFTOwner(response: ResponseContext): Promise<NFTOwnerResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NFTOwnerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NFTOwnerResponse", ""
            ) as NFTOwnerResponse;
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
            throw new ApiException<undefined>(response.httpStatusCode, "The doesn&#39;t exist", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NFTOwnerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NFTOwnerResponse", ""
            ) as NFTOwnerResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to solanaGetNFTOwnerAdvanced
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async solanaGetNFTOwnerAdvanced(response: ResponseContext): Promise<NFTOwnerAdvancedResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NFTOwnerAdvancedResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NFTOwnerAdvancedResponse", ""
            ) as NFTOwnerAdvancedResponse;
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
            throw new ApiException<undefined>(response.httpStatusCode, "The doesn&#39;t exist", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NFTOwnerAdvancedResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NFTOwnerAdvancedResponse", ""
            ) as NFTOwnerAdvancedResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to solanaGetNFTsCandyMachineId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async solanaGetNFTsCandyMachineId(response: ResponseContext): Promise<GetCandyMachineIDResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetCandyMachineIDResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCandyMachineIDResponse", ""
            ) as GetCandyMachineIDResponse;
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
            const body: GetCandyMachineIDResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetCandyMachineIDResponse", ""
            ) as GetCandyMachineIDResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to solanaSearchNFTs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async solanaSearchNFTs(response: ResponseContext): Promise<Array<NFTSearchResponse> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<NFTSearchResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<NFTSearchResponse>", ""
            ) as Array<NFTSearchResponse>;
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
            const body: Array<NFTSearchResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<NFTSearchResponse>", ""
            ) as Array<NFTSearchResponse>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
