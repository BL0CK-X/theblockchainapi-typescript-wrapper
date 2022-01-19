import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ATAResponse } from '../models/ATAResponse';
import { Account } from '../models/Account';
import { AccountContext } from '../models/AccountContext';
import { AccountIsCandyMachine } from '../models/AccountIsCandyMachine';
import { AccountIsNFT } from '../models/AccountIsNFT';
import { AccountValue } from '../models/AccountValue';
import { AirdropRequest } from '../models/AirdropRequest';
import { B58PrivateKey } from '../models/B58PrivateKey';
import { BalanceRequest } from '../models/BalanceRequest';
import { BalanceResponse } from '../models/BalanceResponse';
import { BuyRequest } from '../models/BuyRequest';
import { BuyResponse } from '../models/BuyResponse';
import { CandyMachineSearchRequest } from '../models/CandyMachineSearchRequest';
import { CreateTestCandyMachineRequest } from '../models/CreateTestCandyMachineRequest';
import { CreateTestCandyMachineResponse } from '../models/CreateTestCandyMachineResponse';
import { DelistRequest } from '../models/DelistRequest';
import { DelistResponse } from '../models/DelistResponse';
import { GeneratePrivateKey } from '../models/GeneratePrivateKey';
import { GetAllNFTsResponse } from '../models/GetAllNFTsResponse';
import { GetAllNFTsResponseMintedNfts } from '../models/GetAllNFTsResponseMintedNfts';
import { GetAllNFTsResponseUnmintedNfts } from '../models/GetAllNFTsResponseUnmintedNfts';
import { GetCandyMachineIDRequest } from '../models/GetCandyMachineIDRequest';
import { GetCandyMachineIDResponse } from '../models/GetCandyMachineIDResponse';
import { GetCandyMetadataErrorResponse } from '../models/GetCandyMetadataErrorResponse';
import { GetCandyMetadataRequest } from '../models/GetCandyMetadataRequest';
import { GetCandyMetadataResponse } from '../models/GetCandyMetadataResponse';
import { GetCandyMetadataResponseCreators } from '../models/GetCandyMetadataResponseCreators';
import { GetFileResponse } from '../models/GetFileResponse';
import { GetNFTListingResponse } from '../models/GetNFTListingResponse';
import { GetPublicKeyRequest } from '../models/GetPublicKeyRequest';
import { GetSPLTokenResponse } from '../models/GetSPLTokenResponse';
import { ListNFTsResponse } from '../models/ListNFTsResponse';
import { ListRequest } from '../models/ListRequest';
import { ListResponse } from '../models/ListResponse';
import { MintNFTErrorResponse } from '../models/MintNFTErrorResponse';
import { MintNFTRequest } from '../models/MintNFTRequest';
import { MintNFTResponse } from '../models/MintNFTResponse';
import { NFT } from '../models/NFT';
import { NFTData } from '../models/NFTData';
import { NFTMintErrorResponse } from '../models/NFTMintErrorResponse';
import { NFTMintFee } from '../models/NFTMintFee';
import { NFTMintRequest } from '../models/NFTMintRequest';
import { NFTOwnerResponse } from '../models/NFTOwnerResponse';
import { NFTSearchRequest } from '../models/NFTSearchRequest';
import { NFTSearchResponse } from '../models/NFTSearchResponse';
import { PrivateKey } from '../models/PrivateKey';
import { PublicKey } from '../models/PublicKey';
import { SecretPhrase } from '../models/SecretPhrase';
import { SecretRecoveryPhrase } from '../models/SecretRecoveryPhrase';
import { Transaction } from '../models/Transaction';
import { TransactionResult } from '../models/TransactionResult';
import { TransferRequest } from '../models/TransferRequest';
import { TransferResponse } from '../models/TransferResponse';
import { UploadFileRequest } from '../models/UploadFileRequest';
import { Wallet } from '../models/Wallet';

import { ObservableFileApi } from "./ObservableAPI";
import { FileApiRequestFactory, FileApiResponseProcessor} from "../apis/FileApi";

export interface FileApiUploadFileRequest {
}

export class ObjectFileApi {
    private api: ObservableFileApi

    public constructor(configuration: Configuration, requestFactory?: FileApiRequestFactory, responseProcessor?: FileApiResponseProcessor) {
        this.api = new ObservableFileApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Easily upload a file to any of IPFS, Arweave, and Filecoin. Not publicly available. Please sign up for <a href=\"https://forms.gle/N4KSqcptpSrHQ1427\" target=\"_blank\">the waitlist</a>.
     * Upload a file
     * @param param the request object
     */
    public uploadFile(param: FileApiUploadFileRequest, options?: Configuration): Promise<GetFileResponse> {
        return this.api.uploadFile( options).toPromise();
    }

}

import { ObservableSolanaAccountApi } from "./ObservableAPI";
import { SolanaAccountApiRequestFactory, SolanaAccountApiResponseProcessor} from "../apis/SolanaAccountApi";

export interface SolanaAccountApiSolanaGetAccountRequest {
    /**
     * The network ID (devnet, mainnet-beta)
     * @type string
     * @memberof SolanaAccountApisolanaGetAccount
     */
    network: string
    /**
     * The public key of the account
     * @type string
     * @memberof SolanaAccountApisolanaGetAccount
     */
    publicKey: string
}

export interface SolanaAccountApiSolanaGetAccountIsCandyMachineRequest {
    /**
     * The network ID (devnet, mainnet-beta)
     * @type string
     * @memberof SolanaAccountApisolanaGetAccountIsCandyMachine
     */
    network: string
    /**
     * The public key of the account
     * @type string
     * @memberof SolanaAccountApisolanaGetAccountIsCandyMachine
     */
    publicKey: string
}

export interface SolanaAccountApiSolanaGetAccountIsNFTRequest {
    /**
     * The network ID (devnet, mainnet-beta)
     * @type string
     * @memberof SolanaAccountApisolanaGetAccountIsNFT
     */
    network: string
    /**
     * The public key of the account
     * @type string
     * @memberof SolanaAccountApisolanaGetAccountIsNFT
     */
    publicKey: string
}

export class ObjectSolanaAccountApi {
    private api: ObservableSolanaAccountApi

    public constructor(configuration: Configuration, requestFactory?: SolanaAccountApiRequestFactory, responseProcessor?: SolanaAccountApiResponseProcessor) {
        this.api = new ObservableSolanaAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-account/get-account\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the details of an account on Solana. Learn more about accounts <a href=\"https://docs.solana.com/developing/programming-model/accounts\" target=\"_blank\">here</a>.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the details of an account on Solana
     * @param param the request object
     */
    public solanaGetAccount(param: SolanaAccountApiSolanaGetAccountRequest, options?: Configuration): Promise<Account> {
        return this.api.solanaGetAccount(param.network, param.publicKey,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-account/get-is-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Determine whether or not a public key address corresponds to a candy machine ID or candy machine configuration.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get if account is candy machine
     * @param param the request object
     */
    public solanaGetAccountIsCandyMachine(param: SolanaAccountApiSolanaGetAccountIsCandyMachineRequest, options?: Configuration): Promise<AccountIsCandyMachine> {
        return this.api.solanaGetAccountIsCandyMachine(param.network, param.publicKey,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-account/get-is-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Determine whether or not a public key is an NFT `mint address`  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get if account is NFT
     * @param param the request object
     */
    public solanaGetAccountIsNFT(param: SolanaAccountApiSolanaGetAccountIsNFTRequest, options?: Configuration): Promise<AccountIsNFT> {
        return this.api.solanaGetAccountIsNFT(param.network, param.publicKey,  options).toPromise();
    }

}

import { ObservableSolanaCandyMachineApi } from "./ObservableAPI";
import { SolanaCandyMachineApiRequestFactory, SolanaCandyMachineApiResponseProcessor} from "../apis/SolanaCandyMachineApi";

export interface SolanaCandyMachineApiSolanaCreateTestCandyMachineRequest {
    /**
     * 
     * @type CreateTestCandyMachineRequest
     * @memberof SolanaCandyMachineApisolanaCreateTestCandyMachine
     */
    createTestCandyMachineRequest?: CreateTestCandyMachineRequest
}

export interface SolanaCandyMachineApiSolanaGetAllNFTsFromCandyMachineRequest {
    /**
     * The network ID
     * @type &#39;devnet&#39; | &#39;mainnet-beta&#39;
     * @memberof SolanaCandyMachineApisolanaGetAllNFTsFromCandyMachine
     */
    network: 'devnet' | 'mainnet-beta'
    /**
     * The ID of the candy machine
     * @type string
     * @memberof SolanaCandyMachineApisolanaGetAllNFTsFromCandyMachine
     */
    candyMachineId: string
}

export interface SolanaCandyMachineApiSolanaGetCandyMachineMetadataRequest {
    /**
     * 
     * @type GetCandyMetadataRequest
     * @memberof SolanaCandyMachineApisolanaGetCandyMachineMetadata
     */
    getCandyMetadataRequest?: GetCandyMetadataRequest
}

export interface SolanaCandyMachineApiSolanaListAllCandyMachinesRequest {
}

export interface SolanaCandyMachineApiSolanaMintFromCandyMachineRequest {
    /**
     * 
     * @type MintNFTRequest
     * @memberof SolanaCandyMachineApisolanaMintFromCandyMachine
     */
    mintNFTRequest?: MintNFTRequest
}

export interface SolanaCandyMachineApiSolanaSearchCandyMachinesRequest {
    /**
     * 
     * @type CandyMachineSearchRequest
     * @memberof SolanaCandyMachineApisolanaSearchCandyMachines
     */
    candyMachineSearchRequest?: CandyMachineSearchRequest
}

export class ObjectSolanaCandyMachineApi {
    private api: ObservableSolanaCandyMachineApi

    public constructor(configuration: Configuration, requestFactory?: SolanaCandyMachineApiRequestFactory, responseProcessor?: SolanaCandyMachineApiResponseProcessor) {
        this.api = new ObservableSolanaCandyMachineApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/create-test-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.   Use this endpoint to create a test candy machine so that you can test your minting bot.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Create a test CM
     * @param param the request object
     */
    public solanaCreateTestCandyMachine(param: SolanaCandyMachineApiSolanaCreateTestCandyMachineRequest, options?: Configuration): Promise<CreateTestCandyMachineResponse> {
        return this.api.solanaCreateTestCandyMachine(param.createTestCandyMachineRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-all-nfts\" target=\"_blank\"> See examples (Python, JavaScript)</a>.  Use this endpoint to get the list of all NFTs (minted and unminted) from a Solana Candy Machine.  This works for `v1` and `v2` candy machines.   *However*, for `v2` only the value for `all_nfts` is provided. To determine which are minted and unminted follow this example.  You do not need to specify `v1` or `v2` for this endpoint as it will automatically determine it from the candy machine ID.  See example for how to get the list of NFT hashes <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-hash-table\" target=\"_blank\">here</a>.    `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get CM's NFTs  
     * @param param the request object
     */
    public solanaGetAllNFTsFromCandyMachine(param: SolanaCandyMachineApiSolanaGetAllNFTsFromCandyMachineRequest, options?: Configuration): Promise<GetAllNFTsResponse> {
        return this.api.solanaGetAllNFTsFromCandyMachine(param.network, param.candyMachineId,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-metadata\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get metadata about a Metaplex candy machine. This includes the goLiveDate, itemsAvailable, and itemsRedeemed. To see what is included, expand the green successful response below.  NOTE: Supply exactly one of `candy_machine_id`, `config_address`, or `uuid`. If you provide more than one, you will receive a `400` error.   `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get a CM's metadata 
     * @param param the request object
     */
    public solanaGetCandyMachineMetadata(param: SolanaCandyMachineApiSolanaGetCandyMachineMetadataRequest, options?: Configuration): Promise<GetCandyMetadataResponse> {
        return this.api.solanaGetCandyMachineMetadata(param.getCandyMetadataRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/list-all-candy-machines\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can list all candy machines published to Solana mainnet.  We update this data every 15 minutes.  The output is a list of config addresses, currently about 17000 in length.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * List all CMs
     * @param param the request object
     */
    public solanaListAllCandyMachines(param: SolanaCandyMachineApiSolanaListAllCandyMachinesRequest, options?: Configuration): Promise<any> {
        return this.api.solanaListAllCandyMachines( options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/mint-from-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to mint an NFT from a metaplex candy machine as soon as it drops.  This only works for `v1` and `v2` candy machines, and does not work for candy machines of any other type such as Magic Eden candy machines.  In order to achieve speed, this endpoint sends the transaction without checking whether or not it confirmed. It could still fail, for example, because the candy machine ran out of available mints. You should check the status of the transaction using our <a href=\"#operation/solanaGetTransaction\">getTransaction</a> endpoint. <a href=\"https://gist.github.com/joshwolff1/298e8251e43ff9b4815028683b1ca17d\" target=\"_blank\">Here's an example</a> of how to do this.  Mint transactions for candy machines that have capatcha/Civic enabled will fail. There is a gatekeeper functionality where you must manually verify through Civic and captcha in order to mint from a candy machine. In this functionality, Civic signs the transaction. Therefore, if the gatekeeper functionality is enabled, our “Mint from candy machine” endpoint will fail because it is missing a signer. If it is not enabled, then our “Mint from candy machine” endpoint will succeed. One caveat is the attribute “expireOnUse”. If this is True, then you have to solve a captcha each time. In this case, the “Mint from candy machine” endpoint will fail. If this is False, then your first verification is sufficient for further mints. In which case, after verifying manually the first time, you can use our endpoint thereafter.   You can check if the gatekeeper functionality is enabled with this <a href=\"#operation/solanaGetCandyMachineMetadata\">endpoint</a>.   `Cost: 8 Credits`  Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)  (You are able to try on the `Free` plan as well, until you run out of credits.)
     * Mint from a CM
     * @param param the request object
     */
    public solanaMintFromCandyMachine(param: SolanaCandyMachineApiSolanaMintFromCandyMachineRequest, options?: Configuration): Promise<MintNFTResponse> {
        return this.api.solanaMintFromCandyMachine(param.mintNFTRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/search-candy-machines\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can search candy machines by their symbol, name of NFTs, uuid, configuration address, and update authority.  The output is a list of config addresses.  You can also provide multiple search clauses, such as the update authority (`update_authority=\"G17UmNGnMJ851x3M1JXocgpft1afcYedjPuFpo1ohhCk\"`) and symbol begins with \"Sol\" (`symbol=\"Sol\", symbol_search_method='begins_with'`).  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Search CMs
     * @param param the request object
     */
    public solanaSearchCandyMachines(param: SolanaCandyMachineApiSolanaSearchCandyMachinesRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.solanaSearchCandyMachines(param.candyMachineSearchRequest,  options).toPromise();
    }

}

import { ObservableSolanaNFTApi } from "./ObservableAPI";
import { SolanaNFTApiRequestFactory, SolanaNFTApiResponseProcessor} from "../apis/SolanaNFTApi";

export interface SolanaNFTApiSolanaCreateNFTRequest {
    /**
     * 
     * @type NFTMintRequest
     * @memberof SolanaNFTApisolanaCreateNFT
     */
    nFTMintRequest?: NFTMintRequest
}

export interface SolanaNFTApiSolanaGetNFTRequest {
    /**
     * The network ID
     * @type &#39;devnet&#39; | &#39;mainnet-beta&#39;
     * @memberof SolanaNFTApisolanaGetNFT
     */
    network: 'devnet' | 'mainnet-beta'
    /**
     * The mint address of the NFT
     * @type string
     * @memberof SolanaNFTApisolanaGetNFT
     */
    mintAddress: string
}

export interface SolanaNFTApiSolanaGetNFTMintFeeRequest {
}

export interface SolanaNFTApiSolanaGetNFTOwnerRequest {
    /**
     * The network ID
     * @type &#39;devnet&#39; | &#39;mainnet-beta&#39;
     * @memberof SolanaNFTApisolanaGetNFTOwner
     */
    network: 'devnet' | 'mainnet-beta'
    /**
     * The mint address of the NFT
     * @type string
     * @memberof SolanaNFTApisolanaGetNFTOwner
     */
    mintAddress: string
}

export interface SolanaNFTApiSolanaGetNFTsCandyMachineIdRequest {
    /**
     * 
     * @type GetCandyMachineIDRequest
     * @memberof SolanaNFTApisolanaGetNFTsCandyMachineId
     */
    getCandyMachineIDRequest?: GetCandyMachineIDRequest
}

export interface SolanaNFTApiSolanaSearchNFTsRequest {
    /**
     * 
     * @type NFTSearchRequest
     * @memberof SolanaNFTApisolanaSearchNFTs
     */
    nFTSearchRequest?: NFTSearchRequest
}

export class ObjectSolanaNFTApi {
    private api: ObservableSolanaNFTApi

    public constructor(configuration: Configuration, requestFactory?: SolanaNFTApiRequestFactory, responseProcessor?: SolanaNFTApiResponseProcessor) {
        this.api = new ObservableSolanaNFTApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/create-an-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Create a Metaplex NFT on Solana.   Read more on this <a href=\"https://blog.blockchainapi.com/2021/11/16/a-note-on-nfts.html\" target=\"_blank\">here</a>.  Note: Please see <a href=\"https://blog.blockchainapi.com/2022/01/18/how-to-format-off-chain-nft-metadata.html\" target=\"_blank\">this article</a> to learn more about what `nft_upload_method` means and how storing the metadata of an NFT works.  If you're using `nft_upload_method = \"LINK\"`, then to add attributes to the NFT or an image, add them to a JSON file and upload that to Arweave/IPFS/Filecoin. See the JSON format <a href=\"https://blog.blockchainapi.com/2022/01/18/how-to-format-off-chain-nft-metadata.html\">here</a>.  Then supply the link to the JSON file in `nft_url`.   NOTE: Don't use `nft_metadata`. Values provided here do not do anything at the moment. We are fixing this soon.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Create an NFT on Solana
     * @param param the request object
     */
    public solanaCreateNFT(param: SolanaNFTApiSolanaCreateNFTRequest, options?: Configuration): Promise<NFT> {
        return this.api.solanaCreateNFT(param.nFTMintRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-metadata\" target=\"_blank\">See examples (Python, JavaScript)</a>.       Get the metadata of an NFT.  If you're looking for metadata such as attributes and others, you can retrieve them from the link in the URI field of the NFT metadata returned. See the example on the right. The URI is an Arweave URL. That contains the attributes and other information about the NFT. That URL is stored on the Solana blockchain.  `Cost: 1 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get an NFT's metadata
     * @param param the request object
     */
    public solanaGetNFT(param: SolanaNFTApiSolanaGetNFTRequest, options?: Configuration): Promise<NFT> {
        return this.api.solanaGetNFT(param.network, param.mintAddress,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-mint-fee\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the estimated fee for minting an NFT on the Solana blockchain using the Metaplex protocol.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the NFT mint fee
     * @param param the request object
     */
    public solanaGetNFTMintFee(param: SolanaNFTApiSolanaGetNFTMintFeeRequest, options?: Configuration): Promise<NFTMintFee> {
        return this.api.solanaGetNFTMintFee( options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-owner\" target=\"_blank\">See examples (Python, JavaScript)</a>.       Get the owner of an NFT. This returns the public key of the wallet that owns the associated token account that owns the NFT.  If you want to get the associated token account that literally owns the NFT, derive the associated token account address from the public key returned and the NFT mint address using <a href=\"#operation/solanaDeriveAssociatedTokenAccountAddress\">this endpoint</a>.  `Cost: 1 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get owner of an NFT
     * @param param the request object
     */
    public solanaGetNFTOwner(param: SolanaNFTApiSolanaGetNFTOwnerRequest, options?: Configuration): Promise<NFTOwnerResponse> {
        return this.api.solanaGetNFTOwner(param.network, param.mintAddress,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-candy-machine-id\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get the candy machine ID from where the NFT came, if any. NFTs can also be minted without a candy machine.  It's also possible that we return \"Not Found\" when the NFT actually did come from a version of a candy machine. We check for the most popular versions of candy machine, but it is possible that someone creates their own candy machine version and mints NFTs from it.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the ID of the candy machine of an NFT 
     * @param param the request object
     */
    public solanaGetNFTsCandyMachineId(param: SolanaNFTApiSolanaGetNFTsCandyMachineIdRequest, options?: Configuration): Promise<GetCandyMachineIDResponse> {
        return this.api.solanaGetNFTsCandyMachineId(param.getCandyMachineIDRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/search-nfts\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can search for NFTs by their symbol, name of NFTs, uuid, configuration address, and update authority.  The output is a list of NFTs that match your query.  You can also provide multiple search clauses, such as the update authority (`update_authority=\"G17UmNGnMJ851x3M1JXocgpft1afcYedjPuFpo1ohhCk\"`) and symbol begins with \"Sol\" (`symbol=\"Sol\", symbol_search_method='begins_with'`).  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Search NFTs on Solana
     * @param param the request object
     */
    public solanaSearchNFTs(param: SolanaNFTApiSolanaSearchNFTsRequest, options?: Configuration): Promise<Array<NFTSearchResponse>> {
        return this.api.solanaSearchNFTs(param.nFTSearchRequest,  options).toPromise();
    }

}

import { ObservableSolanaNFTMarketplacesApi } from "./ObservableAPI";
import { SolanaNFTMarketplacesApiRequestFactory, SolanaNFTMarketplacesApiResponseProcessor} from "../apis/SolanaNFTMarketplacesApi";

export interface SolanaNFTMarketplacesApiSolanaBuyNFTRequest {
    /**
     * The network ID
     * @type &#39;devnet&#39; | &#39;mainnet-beta&#39;
     * @memberof SolanaNFTMarketplacesApisolanaBuyNFT
     */
    network: 'devnet' | 'mainnet-beta'
    /**
     * The NFT exchange to interact with
     * @type &#39;solsea&#39; | &#39;magic-eden&#39;
     * @memberof SolanaNFTMarketplacesApisolanaBuyNFT
     */
    exchange: 'solsea' | 'magic-eden'
    /**
     * The mint address of the NFT you want to buy
     * @type string
     * @memberof SolanaNFTMarketplacesApisolanaBuyNFT
     */
    mintAddress: string
    /**
     * 
     * @type BuyRequest
     * @memberof SolanaNFTMarketplacesApisolanaBuyNFT
     */
    buyRequest?: BuyRequest
}

export interface SolanaNFTMarketplacesApiSolanaDelistNFTRequest {
    /**
     * The network ID
     * @type &#39;devnet&#39; | &#39;mainnet-beta&#39;
     * @memberof SolanaNFTMarketplacesApisolanaDelistNFT
     */
    network: 'devnet' | 'mainnet-beta'
    /**
     * The NFT exchange to interact with
     * @type &#39;solsea&#39; | &#39;magic-eden&#39;
     * @memberof SolanaNFTMarketplacesApisolanaDelistNFT
     */
    exchange: 'solsea' | 'magic-eden'
    /**
     * The mint address of the NFT you want to buy
     * @type string
     * @memberof SolanaNFTMarketplacesApisolanaDelistNFT
     */
    mintAddress: string
    /**
     * 
     * @type DelistRequest
     * @memberof SolanaNFTMarketplacesApisolanaDelistNFT
     */
    delistRequest?: DelistRequest
}

export interface SolanaNFTMarketplacesApiSolanaGetNFTListingRequest {
    /**
     * The network ID
     * @type &#39;devnet&#39; | &#39;mainnet-beta&#39;
     * @memberof SolanaNFTMarketplacesApisolanaGetNFTListing
     */
    network: 'devnet' | 'mainnet-beta'
    /**
     * The mint address of the NFT you want to buy
     * @type string
     * @memberof SolanaNFTMarketplacesApisolanaGetNFTListing
     */
    mintAddress: string
}

export interface SolanaNFTMarketplacesApiSolanaListNFTRequest {
    /**
     * The network ID
     * @type &#39;devnet&#39; | &#39;mainnet-beta&#39;
     * @memberof SolanaNFTMarketplacesApisolanaListNFT
     */
    network: 'devnet' | 'mainnet-beta'
    /**
     * The NFT exchange to interact with
     * @type &#39;solsea&#39; | &#39;magic-eden&#39;
     * @memberof SolanaNFTMarketplacesApisolanaListNFT
     */
    exchange: 'solsea' | 'magic-eden'
    /**
     * The mint address of the NFT you want to buy
     * @type string
     * @memberof SolanaNFTMarketplacesApisolanaListNFT
     */
    mintAddress: string
    /**
     * 
     * @type ListRequest
     * @memberof SolanaNFTMarketplacesApisolanaListNFT
     */
    listRequest?: ListRequest
}

export class ObjectSolanaNFTMarketplacesApi {
    private api: ObservableSolanaNFTMarketplacesApi

    public constructor(configuration: Configuration, requestFactory?: SolanaNFTMarketplacesApiRequestFactory, responseProcessor?: SolanaNFTMarketplacesApiResponseProcessor) {
        this.api = new ObservableSolanaNFTMarketplacesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/buy-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Buy an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  **We are not responsible for any SOL or NFT lost.**  `Cost: 25 Credits`, `Cost: 3 Credits on Devnet`  Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)  (You are able to try on the `Free` plan as well, until you run out of credits.)
     * Buy
     * @param param the request object
     */
    public solanaBuyNFT(param: SolanaNFTMarketplacesApiSolanaBuyNFTRequest, options?: Configuration): Promise<BuyResponse> {
        return this.api.solanaBuyNFT(param.network, param.exchange, param.mintAddress, param.buyRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/delist-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Delist an NFT from a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  **We are not responsible for any SOL or NFT lost.**  `Cost: 8 Credits`, `Cost: 3 Credits on Devnet`  Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)  (You are able to try on the `Free` plan as well, until you run out of credits.)
     * Delist
     * @param param the request object
     */
    public solanaDelistNFT(param: SolanaNFTMarketplacesApiSolanaDelistNFTRequest, options?: Configuration): Promise<DelistResponse> {
        return this.api.solanaDelistNFT(param.network, param.exchange, param.mintAddress, param.delistRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/get-nft-listing\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get the Marketplace listing of a Solana NFT.  Currently checks for the following Solana NFT martketplaces: SolSea, Magic Eden  `Cost: 1 Credits`, (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get NFT Listing
     * @param param the request object
     */
    public solanaGetNFTListing(param: SolanaNFTMarketplacesApiSolanaGetNFTListingRequest, options?: Configuration): Promise<GetNFTListingResponse> {
        return this.api.solanaGetNFTListing(param.network, param.mintAddress,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/list-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  List an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  **We are not responsible for any SOL or NFT lost.**  `Cost: 12 Credits`, `Cost: 3 Credits on Devnet`  Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)  (You are able to try on the `Free` plan as well, until you run out of credits.)
     * List
     * @param param the request object
     */
    public solanaListNFT(param: SolanaNFTMarketplacesApiSolanaListNFTRequest, options?: Configuration): Promise<ListResponse> {
        return this.api.solanaListNFT(param.network, param.exchange, param.mintAddress, param.listRequest,  options).toPromise();
    }

}

import { ObservableSolanaSPLTokenApi } from "./ObservableAPI";
import { SolanaSPLTokenApiRequestFactory, SolanaSPLTokenApiResponseProcessor} from "../apis/SolanaSPLTokenApi";

export interface SolanaSPLTokenApiSolanaGetSPLTokenRequest {
    /**
     * The public key of the token
     * @type string
     * @memberof SolanaSPLTokenApisolanaGetSPLToken
     */
    publicKey: string
    /**
     * The network ID (devnet, mainnet-beta)
     * @type string
     * @memberof SolanaSPLTokenApisolanaGetSPLToken
     */
    network: string
}

export class ObjectSolanaSPLTokenApi {
    private api: ObservableSolanaSPLTokenApi

    public constructor(configuration: Configuration, requestFactory?: SolanaSPLTokenApiRequestFactory, responseProcessor?: SolanaSPLTokenApiResponseProcessor) {
        this.api = new ObservableSolanaSPLTokenApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-spl-token/get-spl-token\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Retrieves basic information about an SPL token given its `mint_address`.  You can see the mint addresses of popular SPL tokens <a href=\"https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/solana.tokenlist.json\" target=\"_blank\">here</a>.  Some example mint addresses of SPL tokens: - USDC: EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v - Mango: MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac - Serum: SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt - Raydium: 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R - wSOL: So11111111111111111111111111111111111111112 - ATLAS: ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get SPL token metadata
     * @param param the request object
     */
    public solanaGetSPLToken(param: SolanaSPLTokenApiSolanaGetSPLTokenRequest, options?: Configuration): Promise<GetSPLTokenResponse> {
        return this.api.solanaGetSPLToken(param.publicKey, param.network,  options).toPromise();
    }

}

import { ObservableSolanaTransactionApi } from "./ObservableAPI";
import { SolanaTransactionApiRequestFactory, SolanaTransactionApiResponseProcessor} from "../apis/SolanaTransactionApi";

export interface SolanaTransactionApiSolanaGetTransactionRequest {
    /**
     * The network ID (devnet, mainnet-beta)
     * @type string
     * @memberof SolanaTransactionApisolanaGetTransaction
     */
    network: string
    /**
     * The transaction signature of the transaction
     * @type string
     * @memberof SolanaTransactionApisolanaGetTransaction
     */
    txSignature: string
}

export class ObjectSolanaTransactionApi {
    private api: ObservableSolanaTransactionApi

    public constructor(configuration: Configuration, requestFactory?: SolanaTransactionApiRequestFactory, responseProcessor?: SolanaTransactionApiResponseProcessor) {
        this.api = new ObservableSolanaTransactionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-transaction/get-transaction\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the details of a transaction made on Solana.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the details of a transaction made on Solana
     * @param param the request object
     */
    public solanaGetTransaction(param: SolanaTransactionApiSolanaGetTransactionRequest, options?: Configuration): Promise<Transaction> {
        return this.api.solanaGetTransaction(param.network, param.txSignature,  options).toPromise();
    }

}

import { ObservableSolanaWalletApi } from "./ObservableAPI";
import { SolanaWalletApiRequestFactory, SolanaWalletApiResponseProcessor} from "../apis/SolanaWalletApi";

export interface SolanaWalletApiSolanaDeriveAssociatedTokenAccountAddressRequest {
    /**
     * The public key of the wallet
     * @type string
     * @memberof SolanaWalletApisolanaDeriveAssociatedTokenAccountAddress
     */
    publicKey: string
    /**
     * The mint address of the token (either SPL or NFT)
     * @type string
     * @memberof SolanaWalletApisolanaDeriveAssociatedTokenAccountAddress
     */
    mintAddress: string
}

export interface SolanaWalletApiSolanaDerivePrivateKeyRequest {
    /**
     * 
     * @type GetPublicKeyRequest
     * @memberof SolanaWalletApisolanaDerivePrivateKey
     */
    getPublicKeyRequest: GetPublicKeyRequest
}

export interface SolanaWalletApiSolanaDerivePublicKeyRequest {
    /**
     * 
     * @type GetPublicKeyRequest
     * @memberof SolanaWalletApisolanaDerivePublicKey
     */
    getPublicKeyRequest: GetPublicKeyRequest
}

export interface SolanaWalletApiSolanaGeneratePrivateKeyRequest {
}

export interface SolanaWalletApiSolanaGenerateSecretRecoveryPhraseRequest {
}

export interface SolanaWalletApiSolanaGetAirdropRequest {
    /**
     * 
     * @type AirdropRequest
     * @memberof SolanaWalletApisolanaGetAirdrop
     */
    airdropRequest?: AirdropRequest
}

export interface SolanaWalletApiSolanaGetBalanceRequest {
    /**
     * 
     * @type BalanceRequest
     * @memberof SolanaWalletApisolanaGetBalance
     */
    balanceRequest?: BalanceRequest
}

export interface SolanaWalletApiSolanaGetNFTsBelongingToWalletRequest {
    /**
     * The network ID (devnet, mainnet-beta)
     * @type string
     * @memberof SolanaWalletApisolanaGetNFTsBelongingToWallet
     */
    network: string
    /**
     * The public key of the account whose list of owned NFTs you want to get
     * @type string
     * @memberof SolanaWalletApisolanaGetNFTsBelongingToWallet
     */
    publicKey: string
}

export interface SolanaWalletApiSolanaGetTokensBelongingToWalletRequest {
    /**
     * The network ID (devnet, mainnet-beta)
     * @type string
     * @memberof SolanaWalletApisolanaGetTokensBelongingToWallet
     */
    network: string
    /**
     * The public key of the account whose list of owned NFTs you want to get
     * @type string
     * @memberof SolanaWalletApisolanaGetTokensBelongingToWallet
     */
    publicKey: string
    /**
     * Whether or not to include NFTs in the response
     * @type boolean
     * @memberof SolanaWalletApisolanaGetTokensBelongingToWallet
     */
    includeNfts?: boolean
    /**
     * Whether or not to include holdings that have zero balance. This indicates that the wallet held this token or NFT in the past, but no longer holds it.
     * @type boolean
     * @memberof SolanaWalletApisolanaGetTokensBelongingToWallet
     */
    includeZeroBalanceHoldings?: boolean
}

export interface SolanaWalletApiSolanaTransferRequest {
    /**
     * 
     * @type TransferRequest
     * @memberof SolanaWalletApisolanaTransfer
     */
    transferRequest?: TransferRequest
}

export class ObjectSolanaWalletApi {
    private api: ObservableSolanaWalletApi

    public constructor(configuration: Configuration, requestFactory?: SolanaWalletApiRequestFactory, responseProcessor?: SolanaWalletApiResponseProcessor) {
        this.api = new ObservableSolanaWalletApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/derive-associated-token-account-address\" target=\"_blank\">See example (Python, JavaScript)</a>.      *Each wallet can own tokens, but in Solana, each token is actually held by an <a href=\"https://spl.solana.com/associated-token-account\" target=\"_blank\">associated token account</a> (ATA), which is an account specific for a token owned by the wallet. When you transfer an SPL token, such as Serum, or transfer an NFT, you're transfering from an ATA you own to another person's ATA for that specific token. With this endpoint, you can derive an associated token address given a wallet and a token address.*  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Derive an associated token account address
     * @param param the request object
     */
    public solanaDeriveAssociatedTokenAccountAddress(param: SolanaWalletApiSolanaDeriveAssociatedTokenAccountAddressRequest, options?: Configuration): Promise<ATAResponse> {
        return this.api.solanaDeriveAssociatedTokenAccountAddress(param.publicKey, param.mintAddress,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/derive-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Returns a private key array and a base58-encoded private key given wallet authentication.  A wallet is defined by a public key. A public key is derived from a combination of seed phrase, derivation path, and passphrase. Changing any *one* of these three will change the public key output.  *You can generate a unique public key with each combination of secret recovery phrase, passphrase, and derivation path. Thus, with a single secret recovery phrase, you can generate many public keys. If you are just starting, just supply the secret recovery phrase you generated with the Solana Wallet Secret Recovery Phrase endpoint.*  *If you are trying to get a public key that already exists (e.g., created in the Phantom wallet), make sure you use the correct derivation path and passphrase. To read more about that, see the descriptions of those parameters below.*  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Derive private key
     * @param param the request object
     */
    public solanaDerivePrivateKey(param: SolanaWalletApiSolanaDerivePrivateKeyRequest, options?: Configuration): Promise<GeneratePrivateKey> {
        return this.api.solanaDerivePrivateKey(param.getPublicKeyRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/derive-public-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Returns a public key given wallet authentication.  A wallet is identified by a public key. A public key is derived from a combination of seed phrase, derivation path, and passphrase. Changing any *one* of these three will change the public key output.   It can also be derived from a private key.  *You can generate a unique public key with each combination of secret recovery phrase, passphrase, and derivation path; or from a private key. Thus, with a single secret recovery phrase, you can generate many public keys; however, with a private key, you can only generate one public key. If you are just starting, generate a <a href=\"#operation/solanaGenerateSecretRecoveryPhrase\">secret recovery phrase</a> or <a href=\"#operation/solanaGeneratePrivateKey\">private key</a>.  *If you are trying to get a public key that already exists (e.g., created in the Phantom wallet), make sure you use the correct derivation path and passphrase; or just use the private key. To read more about that, see the descriptions of those parameters below.*  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Derive public key
     * @param param the request object
     */
    public solanaDerivePublicKey(param: SolanaWalletApiSolanaDerivePublicKeyRequest, options?: Configuration): Promise<PublicKey> {
        return this.api.solanaDerivePublicKey(param.getPublicKeyRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/generate-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a private key for a Solana wallet.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Generate private key
     * @param param the request object
     */
    public solanaGeneratePrivateKey(param: SolanaWalletApiSolanaGeneratePrivateKeyRequest, options?: Configuration): Promise<GeneratePrivateKey> {
        return this.api.solanaGeneratePrivateKey( options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/generate-secret-phrase\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a secret recovery phrase for a Solana wallet.   `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Generate secret phrase
     * @param param the request object
     */
    public solanaGenerateSecretRecoveryPhrase(param: SolanaWalletApiSolanaGenerateSecretRecoveryPhraseRequest, options?: Configuration): Promise<SecretPhrase> {
        return this.api.solanaGenerateSecretRecoveryPhrase( options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-airdrop\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Use this endpoint to get an airdrop of SOL on the devnet (not real SOL). Amount of 0.015,  which is the minimum amount of SOL you need to mint a Metaplex NFT and then transfer it to another wallet.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get an airdrop on devnet
     * @param param the request object
     */
    public solanaGetAirdrop(param: SolanaWalletApiSolanaGetAirdropRequest, options?: Configuration): Promise<TransferResponse> {
        return this.api.solanaGetAirdrop(param.airdropRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-wallet-balance\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the balance of a wallet in SOL or any SPL token.  To get the balance of an SPL token, supply the `mint_address` of the SPL token. The list of SPL tokens can be viewed <a href=\"https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/solana.tokenlist.json\" target=\"_blank\">here</a>.  You can also use this endpoint to see whether or not a person owns an NFT. Just supply the `mint_address` of the NFT. A balance of \"1\" means the person owns the NFT, and a balance of \"0\" means the person does not own the NFT. This works in most cases, but we are aware of one edge case where a balance of \"0\" will show up for a person who is actually the owner of the NFT. We just recommend using the <a href=\"#operation/solanaGetNFTOwner\">getNFTOwner</a> endpoint and comparing that output to the expected address.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get wallet's balance in SOL or any SPL
     * @param param the request object
     */
    public solanaGetBalance(param: SolanaWalletApiSolanaGetBalanceRequest, options?: Configuration): Promise<BalanceResponse> {
        return this.api.solanaGetBalance(param.balanceRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-wallet-nfts\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the NFTs that belong to a given public key address  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get address's NFTs
     * @param param the request object
     */
    public solanaGetNFTsBelongingToWallet(param: SolanaWalletApiSolanaGetNFTsBelongingToWalletRequest, options?: Configuration): Promise<ListNFTsResponse> {
        return this.api.solanaGetNFTsBelongingToWallet(param.network, param.publicKey,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-wallet-token-holdings\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the token holdings of a given public key address  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get address's tokens and respective balances
     * @param param the request object
     */
    public solanaGetTokensBelongingToWallet(param: SolanaWalletApiSolanaGetTokensBelongingToWalletRequest, options?: Configuration): Promise<Array<any>> {
        return this.api.solanaGetTokensBelongingToWallet(param.network, param.publicKey, param.includeNfts, param.includeZeroBalanceHoldings,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/transfer-sol\" target=\"_blank\">See transfer SOL example (Python, JavaScript)</a>.  <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/transfer-nft\" target=\"_blank\">See transfer NFT example (can also be used for SPL token) (Python, JavaScript)</a>.  Transfer SOL, a token or an NFT to another address. If you're transferring an NFT, supply the `mint` (the address of the mint) for the `token_address`.  SENDER: Note that the wallet information (`secret_recovery_phrase`, `passphrase`, `derivation_path`) is used to authorize the sending of the tokens and identifies the source of the tokens.   RECEIVER: `recipient_address` identifies the receiver. This is entirely separate from the information used for the SENDER above. So, in this API call, there are two wallets involved, but only one (namely, the SENDER) is needed to authorize the transaction.  If you're transfering a token, supply the token address found on the explorer (e.g., see `SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt` for <a href=\"https://explorer.solana.com/address/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt\" target=\"_blank\">Serum Token</a>) for the `token_address`. If you're transferring SOL, do not supply a value for `token_address`.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Transfer SOL, a token, or an NFT to another address
     * @param param the request object
     */
    public solanaTransfer(param: SolanaWalletApiSolanaTransferRequest, options?: Configuration): Promise<TransferResponse> {
        return this.api.solanaTransfer(param.transferRequest,  options).toPromise();
    }

}
