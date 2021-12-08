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
import { ObservableFileApi } from './ObservableAPI';

import { FileApiRequestFactory, FileApiResponseProcessor} from "../apis/FileApi";
export class PromiseFileApi {
    private api: ObservableFileApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FileApiRequestFactory,
        responseProcessor?: FileApiResponseProcessor
    ) {
        this.api = new ObservableFileApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Easily upload a file to any of IPFS, Arweave, and Filecoin. Not publicly available. Please sign up for <a href=\"https://forms.gle/N4KSqcptpSrHQ1427\" target=\"_blank\">the waitlist</a>.
     * Upload a file
     */
    public uploadFile(_options?: Configuration): Promise<GetFileResponse> {
        const result = this.api.uploadFile(_options);
        return result.toPromise();
    }


}



import { ObservableSolanaAccountApi } from './ObservableAPI';

import { SolanaAccountApiRequestFactory, SolanaAccountApiResponseProcessor} from "../apis/SolanaAccountApi";
export class PromiseSolanaAccountApi {
    private api: ObservableSolanaAccountApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SolanaAccountApiRequestFactory,
        responseProcessor?: SolanaAccountApiResponseProcessor
    ) {
        this.api = new ObservableSolanaAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-account/get-account\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the details of an account on Solana. Learn more about accounts <a href=\"https://docs.solana.com/developing/programming-model/accounts\" target=\"_blank\">here</a>.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the details of an account on Solana
     * @param network The network ID (devnet, mainnet-beta)
     * @param publicKey The public key of the account
     */
    public solanaGetAccount(network: string, publicKey: string, _options?: Configuration): Promise<Account> {
        const result = this.api.solanaGetAccount(network, publicKey, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [COMING SOON]</a>.      Determine whether or not a public key address corresponds to a candy machine ID or candy machine configuration.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get if account is candy machine
     * @param network The network ID (devnet, mainnet-beta)
     * @param publicKey The public key of the account
     */
    public solanaGetAccountIsCandyMachine(network: string, publicKey: string, _options?: Configuration): Promise<AccountIsCandyMachine> {
        const result = this.api.solanaGetAccountIsCandyMachine(network, publicKey, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [COMING SOON]</a>.      Determine whether or not a public key is an NFT `mint address`  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get if account is NFT
     * @param network The network ID (devnet, mainnet-beta)
     * @param publicKey The public key of the account
     */
    public solanaGetAccountIsNFT(network: string, publicKey: string, _options?: Configuration): Promise<AccountIsNFT> {
        const result = this.api.solanaGetAccountIsNFT(network, publicKey, _options);
        return result.toPromise();
    }


}



import { ObservableSolanaCandyMachineApi } from './ObservableAPI';

import { SolanaCandyMachineApiRequestFactory, SolanaCandyMachineApiResponseProcessor} from "../apis/SolanaCandyMachineApi";
export class PromiseSolanaCandyMachineApi {
    private api: ObservableSolanaCandyMachineApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SolanaCandyMachineApiRequestFactory,
        responseProcessor?: SolanaCandyMachineApiResponseProcessor
    ) {
        this.api = new ObservableSolanaCandyMachineApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/create-test-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.   Use this endpoint to create a test candy machine so that you can test your minting bot.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Create a test candy machine 
     * @param createTestCandyMachineRequest 
     */
    public solanaCreateTestCandyMachine(createTestCandyMachineRequest?: CreateTestCandyMachineRequest, _options?: Configuration): Promise<CreateTestCandyMachineResponse> {
        const result = this.api.solanaCreateTestCandyMachine(createTestCandyMachineRequest, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-all-nfts\" target=\"_blank\"> See examples (Python, JavaScript)</a>.  Use this endpoint to get the list of all NFTs (minted and unminted) from a Solana Candy Machine.  `Cost: 3 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the list of all NFTs (minted and unminted) from a Solana Candy Machine 
     * @param network The network ID (devnet, mainnet-beta)
     * @param candyMachineId The ID of the candy machine
     */
    public solanaGetAllNFTsFromCandyMachine(network: string, candyMachineId: string, _options?: Configuration): Promise<GetAllNFTsResponse> {
        const result = this.api.solanaGetAllNFTsFromCandyMachine(network, candyMachineId, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-config-info\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get the details of a Solana Candy Machine configuration.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the details of a Solana Candy Machine configuration 
     * @param getConfigInfoRequest 
     */
    public solanaGetCandyMachineConfigurationDetails(getConfigInfoRequest?: GetConfigInfoRequest, _options?: Configuration): Promise<GetConfigInfoResponse> {
        const result = this.api.solanaGetCandyMachineConfigurationDetails(getConfigInfoRequest, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-info\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get the following details about a Metaplex candy machine: uuid, go live date, items in the collection, and the cost to mint.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get a Metaplex candy machine's details 
     * @param getCandyDetailsRequest 
     */
    public solanaGetCandyMachineDetails(getCandyDetailsRequest?: GetCandyDetailsRequest, _options?: Configuration): Promise<GetCandyDetailsResponse> {
        const result = this.api.solanaGetCandyMachineDetails(getCandyDetailsRequest, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-minted-nfts\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get the list of NFTs minted from a Solana Candy Machine.  See example for how to get the list of NFT hashes <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-hash-table\" target=\"_blank\">here</a>.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the list of NFTs minted from a Solana Candy Machine 
     * @param getMintedNFTsRequest 
     */
    public solanaGetNFTsMintedFromCandyMachine(getMintedNFTsRequest?: GetMintedNFTsRequest, _options?: Configuration): Promise<Array<GetMintedNFTsResponse>> {
        const result = this.api.solanaGetNFTsMintedFromCandyMachine(getMintedNFTsRequest, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/mint-from-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to mint an NFT from a metaplex candy machine as soon as it drops.  `Cost: 10 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Mint an NFT from a Metaplex candy machine
     * @param mintNFTRequest 
     */
    public solanaMintFromCandyMachine(mintNFTRequest?: MintNFTRequest, _options?: Configuration): Promise<MintNFTResponse> {
        const result = this.api.solanaMintFromCandyMachine(mintNFTRequest, _options);
        return result.toPromise();
    }


}



import { ObservableSolanaNFTApi } from './ObservableAPI';

import { SolanaNFTApiRequestFactory, SolanaNFTApiResponseProcessor} from "../apis/SolanaNFTApi";
export class PromiseSolanaNFTApi {
    private api: ObservableSolanaNFTApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SolanaNFTApiRequestFactory,
        responseProcessor?: SolanaNFTApiResponseProcessor
    ) {
        this.api = new ObservableSolanaNFTApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/create-an-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Create a Metaplex NFT on Solana. Read more on this <a href=\"https://blog.theblockchainapi.com/2021/11/16/a-note-on-nfts.html\" target=\"_blank\">here</a>.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Create an NFT on Solana
     * @param nFTMintRequest 
     */
    public solanaCreateNFT(nFTMintRequest?: NFTMintRequest, _options?: Configuration): Promise<NFT> {
        const result = this.api.solanaCreateNFT(nFTMintRequest, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-metadata\" target=\"_blank\">See examples (Python, JavaScript)</a>.       Get the metadata of an NFT.  `Cost: 1 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get an NFT's metadata
     * @param network The network ID (devnet, mainnet-beta)
     * @param mintAddress The mint address of the NFT
     */
    public solanaGetNFT(network: string, mintAddress: string, _options?: Configuration): Promise<NFT> {
        const result = this.api.solanaGetNFT(network, mintAddress, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-mint-fee\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the estimated fee for minting an NFT on the Solana blockchain using the Metaplex protocol.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the NFT mint fee
     */
    public solanaGetNFTMintFee(_options?: Configuration): Promise<NFTMintFee> {
        const result = this.api.solanaGetNFTMintFee(_options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-owner\" target=\"_blank\">See examples (Python, JavaScript)</a>.       Get the owner of an NFT. This returns the public key of the wallet that owns the associated token account that owns the NFT.  If you want to get the associated token account that literally owns the NFT, derive the associated token account address from the public key returned and the NFT mint address using <a href=\"#operation/solanaDeriveAssociatedTokenAccountAddress\">this endpoint</a>.  `Cost: 1 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get owner of an NFT
     * @param network The network ID (devnet, mainnet-beta)
     * @param mintAddress The mint address of the NFT
     */
    public solanaGetNFTOwner(network: string, mintAddress: string, _options?: Configuration): Promise<NFTOwnerResponse> {
        const result = this.api.solanaGetNFTOwner(network, mintAddress, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-candy-machine-id\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get the candy machine ID from where the NFT came, if any. NFTs can also be minted without a candy machine.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the ID of the candy machine of an NFT 
     * @param getCandyMachineIDRequest 
     */
    public solanaGetNFTsCandyMachineId(getCandyMachineIDRequest?: GetCandyMachineIDRequest, _options?: Configuration): Promise<GetCandyMachineIDResponse> {
        const result = this.api.solanaGetNFTsCandyMachineId(getCandyMachineIDRequest, _options);
        return result.toPromise();
    }


}



import { ObservableSolanaTransactionApi } from './ObservableAPI';

import { SolanaTransactionApiRequestFactory, SolanaTransactionApiResponseProcessor} from "../apis/SolanaTransactionApi";
export class PromiseSolanaTransactionApi {
    private api: ObservableSolanaTransactionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SolanaTransactionApiRequestFactory,
        responseProcessor?: SolanaTransactionApiResponseProcessor
    ) {
        this.api = new ObservableSolanaTransactionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-transaction/get-transaction\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the details of a transaction made on Solana.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the details of a transaction made on Solana
     * @param network The network ID (devnet, mainnet-beta)
     * @param txSignature The transaction signature of the transaction
     */
    public solanaGetTransaction(network: string, txSignature: string, _options?: Configuration): Promise<Transaction> {
        const result = this.api.solanaGetTransaction(network, txSignature, _options);
        return result.toPromise();
    }


}



import { ObservableSolanaWalletApi } from './ObservableAPI';

import { SolanaWalletApiRequestFactory, SolanaWalletApiResponseProcessor} from "../apis/SolanaWalletApi";
export class PromiseSolanaWalletApi {
    private api: ObservableSolanaWalletApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SolanaWalletApiRequestFactory,
        responseProcessor?: SolanaWalletApiResponseProcessor
    ) {
        this.api = new ObservableSolanaWalletApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/derive-associated-token-account-address\" target=\"_blank\">See example (Python, JavaScript)</a>.      *Each wallet can own tokens, but in Solana, each token is actually held by an <a href=\"https://spl.solana.com/associated-token-account\" target=\"_blank\">associated token account</a> (ATA), which is an account specific for a token owned by the wallet. When you transfer an SPL token, such as Serum, or transfer an NFT, you're transfering from an ATA you own to another person's ATA for that specific token. With this endpoint, you can derive an associated token address given a wallet and a token address.*  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Derive an associated token account address
     * @param publicKey The public key of the wallet
     * @param mintAddress The mint address of the token (either SPL or NFT)
     */
    public solanaDeriveAssociatedTokenAccountAddress(publicKey: string, mintAddress: string, _options?: Configuration): Promise<ATAResponse> {
        const result = this.api.solanaDeriveAssociatedTokenAccountAddress(publicKey, mintAddress, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/derive-public-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Returns a public key given a secret recovery phrase and optionally a passphrase and a derivation path.  A wallet is defined by a public key. A public key is derived from a combination of seed phrase, derivation path, and passphrase. Changing any *one* of these three will change the public key output.  *You can generate a unique public key with each combination of secret recovery phrase, passphrase, and derivation path. Thus, with a single secret recovery phrase, you can generate many public keys. If you are just starting, just supply the secret recovery phrase you generated with the Solana Wallet Secret Recovery Phrase endpoint.*  *If you are trying to get a public key that already exists (e.g., created in the Phantom wallet), make sure you use the correct derivation path and passphrase. To read more about that, see the descriptions of those parameters below.*  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Derive public key
     * @param getPublicKeyRequest 
     */
    public solanaDerivePublicKey(getPublicKeyRequest: GetPublicKeyRequest, _options?: Configuration): Promise<PublicKey> {
        const result = this.api.solanaDerivePublicKey(getPublicKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/generate-secret-phrase\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a secret recovery phrase for a Solana wallet. Complete the wallet creation by using the endpoint below.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Generate secret phrase
     */
    public solanaGenerateSecretRecoveryPhrase(_options?: Configuration): Promise<SecretPhrase> {
        const result = this.api.solanaGenerateSecretRecoveryPhrase(_options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-airdrop\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Use this endpoint to get an airdrop of SOL on the devnet (not real SOL). Amount of 0.015,  which is the minimum amount of SOL you need to mint a Metaplex NFT and then transfer it to another wallet.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get an airdrop on devnet
     * @param airdropRequest 
     */
    public solanaGetAirdrop(airdropRequest?: AirdropRequest, _options?: Configuration): Promise<TransferResponse> {
        const result = this.api.solanaGetAirdrop(airdropRequest, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-wallet-balance\" target=\"_blank\">See examples (Python, JavaScript) [More examples coming soon]</a>.      See the balance of a wallet in SOL or any SPL token.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get wallet's balance in SOL or any SPL
     * @param balanceRequest 
     */
    public solanaGetBalance(balanceRequest?: BalanceRequest, _options?: Configuration): Promise<BalanceResponse> {
        const result = this.api.solanaGetBalance(balanceRequest, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-wallet-nfts\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the NFTs that belong to a given public key address  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get address's NFTs
     * @param network The network ID (devnet, mainnet-beta)
     * @param publicKey The public key of the account whose list of owned NFTs you want to get
     */
    public solanaGetNFTsBelongingToWallet(network: string, publicKey: string, _options?: Configuration): Promise<ListNFTsResponse> {
        const result = this.api.solanaGetNFTsBelongingToWallet(network, publicKey, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      See the token holdings of a given public key address  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get address's tokens and respective balances
     * @param network The network ID (devnet, mainnet-beta)
     * @param publicKey The public key of the account whose list of owned NFTs you want to get
     */
    public solanaGetTokensBelongingToWallet(network: string, publicKey: string, _options?: Configuration): Promise<Array<any>> {
        const result = this.api.solanaGetTokensBelongingToWallet(network, publicKey, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/transfer-sol\" target=\"_blank\">See transfer SOL example (Python, JavaScript)</a>.  <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/transfer-nft\" target=\"_blank\">See transfer NFT example (can also be used for SPL token) (Python, JavaScript)</a>.  Transfer SOL, a token or an NFT to another address. If you're transferring an NFT, supply the `mint` (the address of the mint) for the `token_address`.  If you're transfering a token, supply the token address found on the explorer (e.g., see `SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt` for <a href=\"https://explorer.solana.com/address/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt\" target=\"_blank\">Serum Token</a>) for the `token_address`. If you're transferring SOL, do not supply a value for `token_address`.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Transfer SOL, a token, or an NFT to another address
     * @param transferRequest 
     */
    public solanaTransfer(transferRequest?: TransferRequest, _options?: Configuration): Promise<TransferResponse> {
        const result = this.api.solanaTransfer(transferRequest, _options);
        return result.toPromise();
    }


}



import { ObservableTaskApi } from './ObservableAPI';

import { TaskApiRequestFactory, TaskApiResponseProcessor} from "../apis/TaskApi";
export class PromiseTaskApi {
    private api: ObservableTaskApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TaskApiRequestFactory,
        responseProcessor?: TaskApiResponseProcessor
    ) {
        this.api = new ObservableTaskApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/mint-from-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the result of a task. Replace `task_id` with the ID of your task.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the result of a task
     * @param taskId The ID of the task
     */
    public getTask(taskId: string, _options?: Configuration): Promise<Task> {
        const result = this.api.getTask(taskId, _options);
        return result.toPromise();
    }


}



