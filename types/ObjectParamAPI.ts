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
import { BalanceRequest } from '../models/BalanceRequest';
import { BalanceResponse } from '../models/BalanceResponse';
import { CreateTestCandyMachineRequest } from '../models/CreateTestCandyMachineRequest';
import { CreateTestCandyMachineResponse } from '../models/CreateTestCandyMachineResponse';
import { GetAllNFTsResponse } from '../models/GetAllNFTsResponse';
import { GetAllNFTsResponseMintedNfts } from '../models/GetAllNFTsResponseMintedNfts';
import { GetAllNFTsResponseUnmintedNfts } from '../models/GetAllNFTsResponseUnmintedNfts';
import { GetCandyDetailsErrorResponse } from '../models/GetCandyDetailsErrorResponse';
import { GetCandyDetailsRequest } from '../models/GetCandyDetailsRequest';
import { GetCandyDetailsResponse } from '../models/GetCandyDetailsResponse';
import { GetCandyMachineIDRequest } from '../models/GetCandyMachineIDRequest';
import { GetCandyMachineIDResponse } from '../models/GetCandyMachineIDResponse';
import { GetConfigInfoRequest } from '../models/GetConfigInfoRequest';
import { GetConfigInfoResponse } from '../models/GetConfigInfoResponse';
import { GetConfigInfoResponseCreators } from '../models/GetConfigInfoResponseCreators';
import { GetFileResponse } from '../models/GetFileResponse';
import { GetMintedNFTsRequest } from '../models/GetMintedNFTsRequest';
import { GetMintedNFTsResponse } from '../models/GetMintedNFTsResponse';
import { GetPublicKeyRequest } from '../models/GetPublicKeyRequest';
import { ListNFTsResponse } from '../models/ListNFTsResponse';
import { MintNFTErrorResponse } from '../models/MintNFTErrorResponse';
import { MintNFTRequest } from '../models/MintNFTRequest';
import { MintNFTResponse } from '../models/MintNFTResponse';
import { NFT } from '../models/NFT';
import { NFTData } from '../models/NFTData';
import { NFTMintErrorResponse } from '../models/NFTMintErrorResponse';
import { NFTMintFee } from '../models/NFTMintFee';
import { NFTMintRequest } from '../models/NFTMintRequest';
import { NFTOwnerResponse } from '../models/NFTOwnerResponse';
import { PublicKey } from '../models/PublicKey';
import { SecretPhrase } from '../models/SecretPhrase';
import { Task } from '../models/Task';
import { Transaction } from '../models/Transaction';
import { TransferRequest } from '../models/TransferRequest';
import { TransferResponse } from '../models/TransferResponse';
import { UploadFileRequest } from '../models/UploadFileRequest';

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
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [COMING SOON]</a>.      Determine whether or not a public key address corresponds to a candy machine ID or candy machine configuration.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get if account is candy machine
     * @param param the request object
     */
    public solanaGetAccountIsCandyMachine(param: SolanaAccountApiSolanaGetAccountIsCandyMachineRequest, options?: Configuration): Promise<AccountIsCandyMachine> {
        return this.api.solanaGetAccountIsCandyMachine(param.network, param.publicKey,  options).toPromise();
    }

    /**
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [COMING SOON]</a>.      Determine whether or not a public key is an NFT `mint address`  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
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
     * The network ID (devnet, mainnet-beta)
     * @type string
     * @memberof SolanaCandyMachineApisolanaGetAllNFTsFromCandyMachine
     */
    network: string
    /**
     * The ID of the candy machine
     * @type string
     * @memberof SolanaCandyMachineApisolanaGetAllNFTsFromCandyMachine
     */
    candyMachineId: string
}

export interface SolanaCandyMachineApiSolanaGetCandyMachineConfigurationDetailsRequest {
    /**
     * 
     * @type GetConfigInfoRequest
     * @memberof SolanaCandyMachineApisolanaGetCandyMachineConfigurationDetails
     */
    getConfigInfoRequest?: GetConfigInfoRequest
}

export interface SolanaCandyMachineApiSolanaGetCandyMachineDetailsRequest {
    /**
     * 
     * @type GetCandyDetailsRequest
     * @memberof SolanaCandyMachineApisolanaGetCandyMachineDetails
     */
    getCandyDetailsRequest?: GetCandyDetailsRequest
}

export interface SolanaCandyMachineApiSolanaGetNFTsMintedFromCandyMachineRequest {
    /**
     * 
     * @type GetMintedNFTsRequest
     * @memberof SolanaCandyMachineApisolanaGetNFTsMintedFromCandyMachine
     */
    getMintedNFTsRequest?: GetMintedNFTsRequest
}

export interface SolanaCandyMachineApiSolanaMintFromCandyMachineRequest {
    /**
     * 
     * @type MintNFTRequest
     * @memberof SolanaCandyMachineApisolanaMintFromCandyMachine
     */
    mintNFTRequest?: MintNFTRequest
}

export class ObjectSolanaCandyMachineApi {
    private api: ObservableSolanaCandyMachineApi

    public constructor(configuration: Configuration, requestFactory?: SolanaCandyMachineApiRequestFactory, responseProcessor?: SolanaCandyMachineApiResponseProcessor) {
        this.api = new ObservableSolanaCandyMachineApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/create-test-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.   Use this endpoint to create a test candy machine so that you can test your minting bot.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Create a test candy machine 
     * @param param the request object
     */
    public solanaCreateTestCandyMachine(param: SolanaCandyMachineApiSolanaCreateTestCandyMachineRequest, options?: Configuration): Promise<CreateTestCandyMachineResponse> {
        return this.api.solanaCreateTestCandyMachine(param.createTestCandyMachineRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-all-nfts\" target=\"_blank\"> See examples (Python, JavaScript)</a>.  Use this endpoint to get the list of all NFTs (minted and unminted) from a Solana Candy Machine.  `Cost: 3 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the list of all NFTs (minted and unminted) from a Solana Candy Machine 
     * @param param the request object
     */
    public solanaGetAllNFTsFromCandyMachine(param: SolanaCandyMachineApiSolanaGetAllNFTsFromCandyMachineRequest, options?: Configuration): Promise<GetAllNFTsResponse> {
        return this.api.solanaGetAllNFTsFromCandyMachine(param.network, param.candyMachineId,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-config-info\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get the details of a Solana Candy Machine configuration.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the details of a Solana Candy Machine configuration 
     * @param param the request object
     */
    public solanaGetCandyMachineConfigurationDetails(param: SolanaCandyMachineApiSolanaGetCandyMachineConfigurationDetailsRequest, options?: Configuration): Promise<GetConfigInfoResponse> {
        return this.api.solanaGetCandyMachineConfigurationDetails(param.getConfigInfoRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-info\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get the following details about a Metaplex candy machine: uuid, go live date, items in the collection, and the cost to mint.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get a Metaplex candy machine's details 
     * @param param the request object
     */
    public solanaGetCandyMachineDetails(param: SolanaCandyMachineApiSolanaGetCandyMachineDetailsRequest, options?: Configuration): Promise<GetCandyDetailsResponse> {
        return this.api.solanaGetCandyMachineDetails(param.getCandyDetailsRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-minted-nfts\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get the list of NFTs minted from a Solana Candy Machine.  See example for how to get the list of NFT hashes <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-hash-table\" target=\"_blank\">here</a>.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the list of NFTs minted from a Solana Candy Machine 
     * @param param the request object
     */
    public solanaGetNFTsMintedFromCandyMachine(param: SolanaCandyMachineApiSolanaGetNFTsMintedFromCandyMachineRequest, options?: Configuration): Promise<Array<GetMintedNFTsResponse>> {
        return this.api.solanaGetNFTsMintedFromCandyMachine(param.getMintedNFTsRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/mint-from-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to mint an NFT from a metaplex candy machine as soon as it drops.  `Cost: 10 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Mint an NFT from a Metaplex candy machine
     * @param param the request object
     */
    public solanaMintFromCandyMachine(param: SolanaCandyMachineApiSolanaMintFromCandyMachineRequest, options?: Configuration): Promise<MintNFTResponse> {
        return this.api.solanaMintFromCandyMachine(param.mintNFTRequest,  options).toPromise();
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
     * The network ID (devnet, mainnet-beta)
     * @type string
     * @memberof SolanaNFTApisolanaGetNFT
     */
    network: string
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
     * The network ID (devnet, mainnet-beta)
     * @type string
     * @memberof SolanaNFTApisolanaGetNFTOwner
     */
    network: string
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

export class ObjectSolanaNFTApi {
    private api: ObservableSolanaNFTApi

    public constructor(configuration: Configuration, requestFactory?: SolanaNFTApiRequestFactory, responseProcessor?: SolanaNFTApiResponseProcessor) {
        this.api = new ObservableSolanaNFTApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/create-an-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Create a Metaplex NFT on Solana. Read more on this <a href=\"https://blog.theblockchainapi.com/2021/11/16/a-note-on-nfts.html\" target=\"_blank\">here</a>.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Create an NFT on Solana
     * @param param the request object
     */
    public solanaCreateNFT(param: SolanaNFTApiSolanaCreateNFTRequest, options?: Configuration): Promise<NFT> {
        return this.api.solanaCreateNFT(param.nFTMintRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-metadata\" target=\"_blank\">See examples (Python, JavaScript)</a>.       Get the metadata of an NFT.  `Cost: 1 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
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
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-candy-machine-id\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get the candy machine ID from where the NFT came, if any. NFTs can also be minted without a candy machine.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the ID of the candy machine of an NFT 
     * @param param the request object
     */
    public solanaGetNFTsCandyMachineId(param: SolanaNFTApiSolanaGetNFTsCandyMachineIdRequest, options?: Configuration): Promise<GetCandyMachineIDResponse> {
        return this.api.solanaGetNFTsCandyMachineId(param.getCandyMachineIDRequest,  options).toPromise();
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

export interface SolanaWalletApiSolanaDerivePublicKeyRequest {
    /**
     * 
     * @type GetPublicKeyRequest
     * @memberof SolanaWalletApisolanaDerivePublicKey
     */
    getPublicKeyRequest: GetPublicKeyRequest
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
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/derive-public-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Returns a public key given a secret recovery phrase and optionally a passphrase and a derivation path.  A wallet is defined by a public key. A public key is derived from a combination of seed phrase, derivation path, and passphrase. Changing any *one* of these three will change the public key output.  *You can generate a unique public key with each combination of secret recovery phrase, passphrase, and derivation path. Thus, with a single secret recovery phrase, you can generate many public keys. If you are just starting, just supply the secret recovery phrase you generated with the Solana Wallet Secret Recovery Phrase endpoint.*  *If you are trying to get a public key that already exists (e.g., created in the Phantom wallet), make sure you use the correct derivation path and passphrase. To read more about that, see the descriptions of those parameters below.*  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Derive public key
     * @param param the request object
     */
    public solanaDerivePublicKey(param: SolanaWalletApiSolanaDerivePublicKeyRequest, options?: Configuration): Promise<PublicKey> {
        return this.api.solanaDerivePublicKey(param.getPublicKeyRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/generate-secret-phrase\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a secret recovery phrase for a Solana wallet. Complete the wallet creation by using the endpoint below.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
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
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-wallet-balance\" target=\"_blank\">See examples (Python, JavaScript) [More examples coming soon]</a>.      See the balance of a wallet in SOL or any SPL token.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
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
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      See the token holdings of a given public key address  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get address's tokens and respective balances
     * @param param the request object
     */
    public solanaGetTokensBelongingToWallet(param: SolanaWalletApiSolanaGetTokensBelongingToWalletRequest, options?: Configuration): Promise<Array<any>> {
        return this.api.solanaGetTokensBelongingToWallet(param.network, param.publicKey,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/transfer-sol\" target=\"_blank\">See transfer SOL example (Python, JavaScript)</a>.  <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/transfer-nft\" target=\"_blank\">See transfer NFT example (can also be used for SPL token) (Python, JavaScript)</a>.  Transfer SOL, a token or an NFT to another address. If you're transferring an NFT, supply the `mint` (the address of the mint) for the `token_address`.  If you're transfering a token, supply the token address found on the explorer (e.g., see `SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt` for <a href=\"https://explorer.solana.com/address/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt\" target=\"_blank\">Serum Token</a>) for the `token_address`. If you're transferring SOL, do not supply a value for `token_address`.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Transfer SOL, a token, or an NFT to another address
     * @param param the request object
     */
    public solanaTransfer(param: SolanaWalletApiSolanaTransferRequest, options?: Configuration): Promise<TransferResponse> {
        return this.api.solanaTransfer(param.transferRequest,  options).toPromise();
    }

}

import { ObservableTaskApi } from "./ObservableAPI";
import { TaskApiRequestFactory, TaskApiResponseProcessor} from "../apis/TaskApi";

export interface TaskApiGetTaskRequest {
    /**
     * The ID of the task
     * @type string
     * @memberof TaskApigetTask
     */
    taskId: string
}

export class ObjectTaskApi {
    private api: ObservableTaskApi

    public constructor(configuration: Configuration, requestFactory?: TaskApiRequestFactory, responseProcessor?: TaskApiResponseProcessor) {
        this.api = new ObservableTaskApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/mint-from-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the result of a task. Replace `task_id` with the ID of your task.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the result of a task
     * @param param the request object
     */
    public getTask(param: TaskApiGetTaskRequest, options?: Configuration): Promise<Task> {
        return this.api.getTask(param.taskId,  options).toPromise();
    }

}
