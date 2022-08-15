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
import { AvalancheCChainPublicAddress } from '../models/AvalancheCChainPublicAddress';
import { AvalancheXPChainPublicAddress } from '../models/AvalancheXPChainPublicAddress';
import { B58PrivateKey } from '../models/B58PrivateKey';
import { BSCPublicAddress } from '../models/BSCPublicAddress';
import { BalanceRequest } from '../models/BalanceRequest';
import { BalanceResponse } from '../models/BalanceResponse';
import { CCPayment } from '../models/CCPayment';
import { CCPaymentBlockchainPaymentDetails } from '../models/CCPaymentBlockchainPaymentDetails';
import { CCProject } from '../models/CCProject';
import { CCProjectCreateRequest } from '../models/CCProjectCreateRequest';
import { CCProjectCreateRequestCustomerIdToCollect } from '../models/CCProjectCreateRequestCustomerIdToCollect';
import { CCProjectCreateRequestPayoutMethod } from '../models/CCProjectCreateRequestPayoutMethod';
import { CCWebhook } from '../models/CCWebhook';
import { CCWebhookValidateRequest } from '../models/CCWebhookValidateRequest';
import { CandyMachineSearchRequest } from '../models/CandyMachineSearchRequest';
import { DoubleTransferResponse } from '../models/DoubleTransferResponse';
import { EthereumPublicAddress } from '../models/EthereumPublicAddress';
import { EthereumTransaction } from '../models/EthereumTransaction';
import { EthereumTransactionCompiledResponse } from '../models/EthereumTransactionCompiledResponse';
import { EthereumTransactionMadeResponse } from '../models/EthereumTransactionMadeResponse';
import { FeePayerWallet } from '../models/FeePayerWallet';
import { GeneralAirdropRequest } from '../models/GeneralAirdropRequest';
import { GeneralB58PrivateKey } from '../models/GeneralB58PrivateKey';
import { GeneralBalanceRequest } from '../models/GeneralBalanceRequest';
import { GeneralBalanceResponse } from '../models/GeneralBalanceResponse';
import { GeneralFeePayerWallet } from '../models/GeneralFeePayerWallet';
import { GeneralGeneratePrivateKeyResponse } from '../models/GeneralGeneratePrivateKeyResponse';
import { GeneralPrivateKey } from '../models/GeneralPrivateKey';
import { GeneralSecretPhrase } from '../models/GeneralSecretPhrase';
import { GeneralSecretRecoveryPhrase } from '../models/GeneralSecretRecoveryPhrase';
import { GeneralTransaction } from '../models/GeneralTransaction';
import { GeneralTransactionMadeResponse } from '../models/GeneralTransactionMadeResponse';
import { GeneralTransactionResponse } from '../models/GeneralTransactionResponse';
import { GeneralTransferRequest } from '../models/GeneralTransferRequest';
import { GeneralWallet } from '../models/GeneralWallet';
import { GeneratePrivateKey } from '../models/GeneratePrivateKey';
import { GenerateSeedPhraseRequest } from '../models/GenerateSeedPhraseRequest';
import { GetAllNFTsResponse } from '../models/GetAllNFTsResponse';
import { GetAllNFTsResponseMintedNfts } from '../models/GetAllNFTsResponseMintedNfts';
import { GetAllNFTsResponseUnmintedNfts } from '../models/GetAllNFTsResponseUnmintedNfts';
import { GetCandyMachineIDRequest } from '../models/GetCandyMachineIDRequest';
import { GetCandyMachineIDResponse } from '../models/GetCandyMachineIDResponse';
import { GetCandyMetadataErrorResponse } from '../models/GetCandyMetadataErrorResponse';
import { GetCandyMetadataRequest } from '../models/GetCandyMetadataRequest';
import { GetCandyMetadataResponse } from '../models/GetCandyMetadataResponse';
import { GetCandyMetadataResponseCreators } from '../models/GetCandyMetadataResponseCreators';
import { GetPublicKeyRequest } from '../models/GetPublicKeyRequest';
import { GetSPLTokenResponse } from '../models/GetSPLTokenResponse';
import { HexPrivateKey } from '../models/HexPrivateKey';
import { InputBlockchainIdentifier } from '../models/InputBlockchainIdentifier';
import { InputName } from '../models/InputName';
import { ListNFTsResponse } from '../models/ListNFTsResponse';
import { NFT } from '../models/NFT';
import { NFTCollection } from '../models/NFTCollection';
import { NFTData } from '../models/NFTData';
import { NFTMintErrorResponse } from '../models/NFTMintErrorResponse';
import { NFTMintFee } from '../models/NFTMintFee';
import { NFTMintRequest } from '../models/NFTMintRequest';
import { NFTOwnerAdvancedResponse } from '../models/NFTOwnerAdvancedResponse';
import { NFTOwnerAdvancedResponseContract } from '../models/NFTOwnerAdvancedResponseContract';
import { NFTOwnerResponse } from '../models/NFTOwnerResponse';
import { NFTSearchRequest } from '../models/NFTSearchRequest';
import { NFTSearchResponse } from '../models/NFTSearchResponse';
import { NearPublicKey } from '../models/NearPublicKey';
import { PrivateKey } from '../models/PrivateKey';
import { PublicKey } from '../models/PublicKey';
import { SecretPhrase } from '../models/SecretPhrase';
import { SecretRecoveryPhrase } from '../models/SecretRecoveryPhrase';
import { SolanaPublicKey } from '../models/SolanaPublicKey';
import { SolanaTransaction } from '../models/SolanaTransaction';
import { SolanaTransactionCompiledResponse } from '../models/SolanaTransactionCompiledResponse';
import { SolanaTransactionMadeResponse } from '../models/SolanaTransactionMadeResponse';
import { SupplyWalletRequest } from '../models/SupplyWalletRequest';
import { TokenMetadataResponse } from '../models/TokenMetadataResponse';
import { Transaction } from '../models/Transaction';
import { TransactionResult } from '../models/TransactionResult';
import { TransferRequest } from '../models/TransferRequest';
import { TransferResponse } from '../models/TransferResponse';
import { TransferResponseCompiled } from '../models/TransferResponseCompiled';
import { Wallet } from '../models/Wallet';
import { WalletIdentifiers } from '../models/WalletIdentifiers';
import { ObservableCCPaymentApi } from './ObservableAPI';

import { CCPaymentApiRequestFactory, CCPaymentApiResponseProcessor} from "../apis/CCPaymentApi";
export class PromiseCCPaymentApi {
    private api: ObservableCCPaymentApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CCPaymentApiRequestFactory,
        responseProcessor?: CCPaymentApiResponseProcessor
    ) {
        this.api = new ObservableCCPaymentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a specific payment, either by its `payment_id` or `payment_validation_code`.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get a payment 
     * @param projectId The ID of the project. Created and returned when a project is created.
     * @param paymentIdentifier You can supply either &#x60;payment_id&#x60; or &#x60;payment_validation_code&#x60;.  The &#x60;payment_id&#x60; is only visible by you and uniquely identifies a payment.  The &#x60;payment_validation_code&#x60; is shown exclusively to the customer and the owner of the project. It can be used to redeem a payment. You can verify a payment by pulling the payment with the &#x60;payment_validation_code&#x60;.
     */
    public getCCPayment(projectId: string, paymentIdentifier: string, _options?: Configuration): Promise<CCPayment> {
        const result = this.api.getCCPayment(projectId, paymentIdentifier, _options);
        return result.toPromise();
    }

    /**
     * List all payments associated with your account (across all projects).  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * List all payments  
     */
    public listAllCCPayments(_options?: Configuration): Promise<Array<CCPayment>> {
        const result = this.api.listAllCCPayments(_options);
        return result.toPromise();
    }

    /**
     * List all payments associated with a project.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * List a project's payments 
     * @param projectId The ID of the project. Created and returned when a project is created.
     * @param UNKNOWN_PARAMETER_NAME Filter payments by a user&#39;s wallet identifier (i.e., Solana public key) 
     */
    public listCCProjectPayments(projectId: string, UNKNOWN_PARAMETER_NAME?: , _options?: Configuration): Promise<Array<CCPayment>> {
        const result = this.api.listCCProjectPayments(projectId, UNKNOWN_PARAMETER_NAME, _options);
        return result.toPromise();
    }


}



import { ObservableCCProjectApi } from './ObservableAPI';

import { CCProjectApiRequestFactory, CCProjectApiResponseProcessor} from "../apis/CCProjectApi";
export class PromiseCCProjectApi {
    private api: ObservableCCProjectApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CCProjectApiRequestFactory,
        responseProcessor?: CCProjectApiResponseProcessor
    ) {
        this.api = new ObservableCCProjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * A project represents that project or company that is accepting payments.  A project can have products, which can have multiple plans (prices) each.  To create a project, you just need to supply a name and a Solana public key to receive payments.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Create a project 
     * @param cCProjectCreateRequest 
     */
    public createCCProject(cCProjectCreateRequest?: CCProjectCreateRequest, _options?: Configuration): Promise<CCProject> {
        const result = this.api.createCCProject(cCProjectCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete a project.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Delete a project 
     * @param projectId The ID of the project. Created and returned when a project is created.
     */
    public deleteCCProject(projectId: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCCProject(projectId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a project.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get a project 
     * @param projectId The ID of the project. Created and returned when a project is created.
     */
    public getCCProject(projectId: string, _options?: Configuration): Promise<CCProject> {
        const result = this.api.getCCProject(projectId, _options);
        return result.toPromise();
    }

    /**
     * List all projects associated with an account.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * List projects 
     */
    public listCCProjects(_options?: Configuration): Promise<Array<CCProject>> {
        const result = this.api.listCCProjects(_options);
        return result.toPromise();
    }

    /**
     * Retrieve a project.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Update a project 
     * @param projectId The ID of the project. Created and returned when a project is created.
     * @param cCProject 
     */
    public updateCCProject(projectId: string, cCProject?: CCProject, _options?: Configuration): Promise<CCProject> {
        const result = this.api.updateCCProject(projectId, cCProject, _options);
        return result.toPromise();
    }


}



import { ObservableCCWebhookApi } from './ObservableAPI';

import { CCWebhookApiRequestFactory, CCWebhookApiResponseProcessor} from "../apis/CCWebhookApi";
export class PromiseCCWebhookApi {
    private api: ObservableCCWebhookApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CCWebhookApiRequestFactory,
        responseProcessor?: CCWebhookApiResponseProcessor
    ) {
        this.api = new ObservableCCWebhookApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve the details of a webhook sent to you.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get a webhook 
     * @param projectId The ID of the project. Created and returned when a project is created.
     * @param webhookIdentifier The ID of the webhook. Created and returned when a webhook is sent.
     */
    public getCCWebhook(projectId: string, webhookIdentifier: string, _options?: Configuration): Promise<CCWebhook> {
        const result = this.api.getCCWebhook(projectId, webhookIdentifier, _options);
        return result.toPromise();
    }

    /**
     * List all webhooks sent to you and their respective responses from your server.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * List project's webhooks 
     * @param projectId The ID of the project. Created and returned when a project is created.
     */
    public listCCProjectWebhooks(projectId: string, _options?: Configuration): Promise<Array<CCWebhook>> {
        const result = this.api.listCCProjectWebhooks(projectId, _options);
        return result.toPromise();
    }

    /**
     * Validate whether a webhook you received was actually sent from us.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Validate a webhook 
     * @param projectId The ID of the project. Created and returned when a project is created.
     * @param webhookIdentifier The ID of the webhook. Created and returned when a webhook is sent.
     * @param cCWebhookValidateRequest 
     */
    public validateCCWebhook(projectId: string, webhookIdentifier: string, cCWebhookValidateRequest?: CCWebhookValidateRequest, _options?: Configuration): Promise<void> {
        const result = this.api.validateCCWebhook(projectId, webhookIdentifier, cCWebhookValidateRequest, _options);
        return result.toPromise();
    }


}



import { ObservableNameServiceApi } from './ObservableAPI';

import { NameServiceApiRequestFactory, NameServiceApiResponseProcessor} from "../apis/NameServiceApi";
export class PromiseNameServiceApi {
    private api: ObservableNameServiceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NameServiceApiRequestFactory,
        responseProcessor?: NameServiceApiResponseProcessor
    ) {
        this.api = new ObservableNameServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/name-service/name-to-blockchain-identifier\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      Get the blockchain identifier from a name.  e.g., Input `vitalik.eth` and output `0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045`  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the identifier
     * @param blockchain The blockchain you want to use 
     * @param network The network of the blockchain you selected  - Solana: &#x60;devnet&#x60;, &#x60;mainnet-beta&#x60; - Ethereum: &#x60;ropsten&#x60;, &#x60;mainnet&#x60;  Defaults when not provided (not applicable to path parameters): - Solana: &#x60;devnet&#x60; - Ethereum: &#x60;ropsten&#x60;
     * @param inputName 
     */
    public getBlockchainIdentifierFromName(blockchain: 'ethereum' | 'solana', network: string, inputName?: InputName, _options?: Configuration): Promise<InputBlockchainIdentifier> {
        const result = this.api.getBlockchainIdentifierFromName(blockchain, network, inputName, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/name-service/blockchain-identifier-to-name\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      Get the name from a blockchain identifier.  e.g., Input `0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045` and output `vitalik.eth`  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the name
     * @param blockchain The blockchain you want to use 
     * @param network The network of the blockchain you selected  - Solana: &#x60;devnet&#x60;, &#x60;mainnet-beta&#x60; - Ethereum: &#x60;ropsten&#x60;, &#x60;mainnet&#x60;  Defaults when not provided (not applicable to path parameters): - Solana: &#x60;devnet&#x60; - Ethereum: &#x60;ropsten&#x60;
     * @param inputBlockchainIdentifier 
     */
    public getNameForBlockchainIdentifier(blockchain: 'ethereum' | 'solana', network: string, inputBlockchainIdentifier?: InputBlockchainIdentifier, _options?: Configuration): Promise<InputName> {
        const result = this.api.getNameForBlockchainIdentifier(blockchain, network, inputBlockchainIdentifier, _options);
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
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-account/get-account\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the details of an account on Solana. Learn more about accounts <a href=\"https://docs.solana.com/developing/programming-model/accounts\" target=\"_blank\">here</a>.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the details of an account on Solana
     * @param network The network ID (devnet, mainnet-beta)
     * @param publicKey The public key of the account
     */
    public solanaGetAccount(network: string, publicKey: string, _options?: Configuration): Promise<Account> {
        const result = this.api.solanaGetAccount(network, publicKey, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-account/get-is-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Determine whether or not a public key address corresponds to a candy machine ID or candy machine configuration.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get if account is candy machine
     * @param network The network ID (devnet, mainnet-beta)
     * @param publicKey The public key of the account
     */
    public solanaGetAccountIsCandyMachine(network: string, publicKey: string, _options?: Configuration): Promise<AccountIsCandyMachine> {
        const result = this.api.solanaGetAccountIsCandyMachine(network, publicKey, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-account/get-is-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Determine whether or not a public key is an NFT `mint address`  `Cost: 0.5 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
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
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-all-nfts\" target=\"_blank\"> See examples (Python, JavaScript)</a>.  Use this endpoint to get the list of all NFTs (minted and unminted) from a Solana Candy Machine.  This works for `v1` and `v2` candy machines.   *However*, for `v2` only the value for `all_nfts` is provided. To determine which are minted and unminted follow this example.  You do not need to specify `v1` or `v2` for this endpoint as it will automatically determine it from the candy machine ID.  See example for how to get the list of NFT hashes <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-hash-table\" target=\"_blank\">here</a>.    `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get CM's NFTs  
     * @param network The network ID
     * @param candyMachineId The ID of the candy machine
     */
    public solanaGetAllNFTsFromCandyMachine(network: 'devnet' | 'mainnet-beta', candyMachineId: string, _options?: Configuration): Promise<GetAllNFTsResponse> {
        const result = this.api.solanaGetAllNFTsFromCandyMachine(network, candyMachineId, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-metadata\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get metadata about a Metaplex candy machine. This includes the goLiveDate, itemsAvailable, and itemsRedeemed. To see what is included, expand the green successful response below.  NOTE: Supply exactly one of `candy_machine_id`, `config_address`, or `uuid`. If you provide more than one, you will receive a `400` error.   `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get a CM's metadata 
     * @param getCandyMetadataRequest 
     */
    public solanaGetCandyMachineMetadata(getCandyMetadataRequest?: GetCandyMetadataRequest, _options?: Configuration): Promise<GetCandyMetadataResponse> {
        const result = this.api.solanaGetCandyMachineMetadata(getCandyMetadataRequest, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/list-all-candy-machines\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can list all candy machines published to Solana mainnet.  We update this data every 15 minutes.  The output is a list of config addresses, currently about 17000 in length.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * List all CMs
     */
    public solanaListAllCandyMachines(_options?: Configuration): Promise<any> {
        const result = this.api.solanaListAllCandyMachines(_options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/search-candy-machines\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can search candy machines by their symbol, name of NFTs, uuid, configuration address, and update authority.  The output is a list of config addresses.  You can also provide multiple search clauses, such as the update authority (`update_authority=\"G17UmNGnMJ851x3M1JXocgpft1afcYedjPuFpo1ohhCk\"`) and symbol begins with \"Sol\" (`symbol=\"Sol\", symbol_search_method='begins_with'`).  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Search CMs
     * @param candyMachineSearchRequest 
     */
    public solanaSearchCandyMachines(candyMachineSearchRequest?: CandyMachineSearchRequest, _options?: Configuration): Promise<Array<string>> {
        const result = this.api.solanaSearchCandyMachines(candyMachineSearchRequest, _options);
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
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/create-an-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Create a Metaplex NFT on Solana.   Read more on this <a href=\"https://blog.blockchainapi.com/2021/11/16/a-note-on-nfts.html\" target=\"_blank\">here</a>.  Note: Please see <a href=\"https://blog.blockchainapi.com/2022/01/18/how-to-format-off-chain-nft-metadata.html\" target=\"_blank\">this article</a> to learn more about what `nft_upload_method` means and how storing the metadata of an NFT works.  If you're using `nft_upload_method = \"LINK\"`, then to add attributes to the NFT or an image, add them to a JSON file and upload that to Arweave/IPFS/Filecoin. See the JSON format <a href=\"https://blog.blockchainapi.com/2022/01/18/how-to-format-off-chain-nft-metadata.html\">here</a>.  Then supply the link to the JSON file in `nft_url`.   NOTE: Don't use `nft_metadata`. Values provided here do not do anything at the moment. We are fixing this soon.  `Cost: 5 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Create an NFT on Solana
     * @param nFTMintRequest 
     */
    public solanaCreateNFT(nFTMintRequest?: NFTMintRequest, _options?: Configuration): Promise<NFT> {
        const result = this.api.solanaCreateNFT(nFTMintRequest, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-metadata\" target=\"_blank\">See examples (Python, JavaScript)</a>.       Get the metadata of an NFT.  If you're looking for metadata such as attributes and others, you can retrieve them from the link in the URI field of the NFT metadata returned. See the example on the right. The URI is an Arweave URL. That contains the attributes and other information about the NFT. That URL is stored on the Solana blockchain.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get an NFT's metadata
     * @param network The network ID
     * @param mintAddress The mint address of the NFT
     */
    public solanaGetNFT(network: 'devnet' | 'mainnet-beta', mintAddress: string, _options?: Configuration): Promise<NFT> {
        const result = this.api.solanaGetNFT(network, mintAddress, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-mint-fee\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the estimated fee for minting an NFT on the Solana blockchain using the Metaplex protocol.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the NFT mint fee
     */
    public solanaGetNFTMintFee(_options?: Configuration): Promise<NFTMintFee> {
        const result = this.api.solanaGetNFTMintFee(_options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-owner\" target=\"_blank\">See examples (Python, JavaScript)</a>.       Get the owner of an NFT. This returns the public key of the wallet that owns the associated token account that owns the NFT.  If you want to get the associated token account that literally owns the NFT, derive the associated token account address from the public key returned and the NFT mint address using <a href=\"#operation/solanaDeriveAssociatedTokenAccountAddress\">this endpoint</a>.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get owner of an NFT
     * @param network The network ID
     * @param mintAddress The mint address of the NFT
     */
    public solanaGetNFTOwner(network: 'devnet' | 'mainnet-beta', mintAddress: string, _options?: Configuration): Promise<NFTOwnerResponse> {
        const result = this.api.solanaGetNFTOwner(network, mintAddress, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-owner\" target=\"_blank\">See examples (Python, JavaScript)</a>.       Get the owner, state, listed price, and listed marketplace (if any) of an NFT.   Here's are a couple of example responses: ``` {     'contract': {         'contract_blockchain_identifier': 'M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K',          'contract_id': 'magic-eden-v2',          'contract_name': 'Magic Eden v2',          'contract_type': 'marketplace'     },      'owner': '25UJMR3FiMM6noQtPEaCJ6eDU2YQ7myDhikVQXmMuSRW',      'price': 50000000,      'state': 'listing' } ```  ``` {     'contract': null,      'owner': 'C37PJiJU8WTgoUoFqmB1Maw8hkuENDZoGDQA1pm54Fdd',      'price': null,      'state': 'holding' } ```  This function will return whether the NFT is `listed`, `loaned` (Yawww NFT loans), `otc`, `staked`, `burned`, or `held`.  If listed, it will return the contract, the readable name of the contract (e.g., Magic Eden, OpenSea), the contract ID (if any; e.g., open-sea), the owner, and the listed price. From this, you can get the floor of a collection. We currently support Magic Eden (v1, v2), Exchange.Art (auction, singles), CoralCube, Solanart (v1, v2), Yawww Loans, Yawww OTC, OpenSea, Fractal, SolSea, and AlphaArt.   If loaned, it will return the loan requester as the owner, the loan amount, and the loan contract. We only support the Yawww loaning contract.  If listed on an OTC marketplace, it will return the same information as `listed`. OTC is used to distinguish between marketplaces that respect royalties (OTC) and those that don't (normal ones). The only `OTC` contract we track is Yawwww, at the moment. We do not yet track Solanart v3.  If staked, it will return the owner and the staking contract public key.  If burned, it will return the `burner` as the `owner`.  If held, it will simply return the owner.  If you want to get the literal owner, which may or may not be the same as the owner returned here, call the simplified [get NFT owner function](/#tag/Solana-NFT/operation/solanaGetNFTOwner). For example, Bob might own the NFT, but if it is listed on Magic Eden, then the NFT is held in escrow and \"owned\" by Magic Eden. The simplified function will return Magic Eden as the owner (the literal owner). This advanced function will tell you the implied owner, which would be Bob.  `Cost: 1.0 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get owner of an NFT (advanced)
     * @param network The network ID
     * @param mintAddress The mint address of the NFT
     */
    public solanaGetNFTOwnerAdvanced(network: 'devnet' | 'mainnet-beta', mintAddress: string, _options?: Configuration): Promise<NFTOwnerAdvancedResponse> {
        const result = this.api.solanaGetNFTOwnerAdvanced(network, mintAddress, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-candy-machine-id\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get the candy machine ID from where the NFT came, if any. NFTs can also be minted without a candy machine.  It's also possible that we return \"Not Found\" when the NFT actually did come from a version of a candy machine. We check for the most popular versions of candy machine, but it is possible that someone creates their own candy machine version and mints NFTs from it.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the ID of the candy machine of an NFT 
     * @param getCandyMachineIDRequest 
     */
    public solanaGetNFTsCandyMachineId(getCandyMachineIDRequest?: GetCandyMachineIDRequest, _options?: Configuration): Promise<GetCandyMachineIDResponse> {
        const result = this.api.solanaGetNFTsCandyMachineId(getCandyMachineIDRequest, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/search-nfts\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can search for NFTs by their symbol, name of NFTs, uuid, configuration address, and update authority.  The output is a list of NFTs that match your query.  You can also provide multiple search clauses, such as the update authority (`update_authority=\"G17UmNGnMJ851x3M1JXocgpft1afcYedjPuFpo1ohhCk\"`) and symbol begins with \"Sol\" (`symbol=\"Sol\", symbol_search_method='begins_with'`).  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Search NFTs on Solana
     * @param nFTSearchRequest 
     */
    public solanaSearchNFTs(nFTSearchRequest?: NFTSearchRequest, _options?: Configuration): Promise<Array<NFTSearchResponse>> {
        const result = this.api.solanaSearchNFTs(nFTSearchRequest, _options);
        return result.toPromise();
    }


}



import { ObservableSolanaSPLTokenApi } from './ObservableAPI';

import { SolanaSPLTokenApiRequestFactory, SolanaSPLTokenApiResponseProcessor} from "../apis/SolanaSPLTokenApi";
export class PromiseSolanaSPLTokenApi {
    private api: ObservableSolanaSPLTokenApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SolanaSPLTokenApiRequestFactory,
        responseProcessor?: SolanaSPLTokenApiResponseProcessor
    ) {
        this.api = new ObservableSolanaSPLTokenApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-spl-token/get-spl-token\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Retrieves basic information about an SPL token given its `mint_address`.  You can see the mint addresses of popular SPL tokens <a href=\"https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/solana.tokenlist.json\" target=\"_blank\">here</a>.  Some example mint addresses of SPL tokens: - USDC: EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v - Mango: MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac - Serum: SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt - Raydium: 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R - wSOL: So11111111111111111111111111111111111111112 - ATLAS: ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get SPL token metadata
     * @param publicKey The public key of the token
     * @param network The network ID (devnet, mainnet-beta)
     */
    public solanaGetSPLToken(publicKey: string, network: string, _options?: Configuration): Promise<GetSPLTokenResponse> {
        const result = this.api.solanaGetSPLToken(publicKey, network, _options);
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
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-transaction/get-transaction\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the details of a transaction made on Solana.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
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
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/derive-associated-token-account-address\" target=\"_blank\">See example (Python, JavaScript)</a>.      *Each wallet can own tokens, but in Solana, each token is actually held by an <a href=\"https://spl.solana.com/associated-token-account\" target=\"_blank\">associated token account</a> (ATA), which is an account specific for a token owned by the wallet. When you transfer an SPL token, such as Serum, or transfer an NFT, you're transfering from an ATA you own to another person's ATA for that specific token. With this endpoint, you can derive an associated token address given a wallet and a token address.*  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Derive an associated token account address
     * @param publicKey The public key of the wallet
     * @param mintAddress The mint address of the token (either SPL or NFT)
     */
    public solanaDeriveAssociatedTokenAccountAddress(publicKey: string, mintAddress: string, _options?: Configuration): Promise<ATAResponse> {
        const result = this.api.solanaDeriveAssociatedTokenAccountAddress(publicKey, mintAddress, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/derive-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Returns a private key array and a base58-encoded private key given wallet authentication.  A wallet is defined by a public key. A public key is derived from a combination of seed phrase, derivation path, and passphrase. Changing any *one* of these three will change the public key output.  *You can generate a unique public key with each combination of secret recovery phrase, passphrase, and derivation path. Thus, with a single secret recovery phrase, you can generate many public keys. If you are just starting, just supply the secret recovery phrase you generated with the Solana Wallet Secret Recovery Phrase endpoint.*  *If you are trying to get a public key that already exists (e.g., created in the Phantom wallet), make sure you use the correct derivation path and passphrase. To read more about that, see the descriptions of those parameters below.*  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Derive private key
     * @param getPublicKeyRequest 
     */
    public solanaDerivePrivateKey(getPublicKeyRequest: GetPublicKeyRequest, _options?: Configuration): Promise<GeneratePrivateKey> {
        const result = this.api.solanaDerivePrivateKey(getPublicKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/derive-public-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Returns a public key given wallet authentication.  A wallet is identified by a public key. A public key is derived from a combination of seed phrase, derivation path, and passphrase. Changing any *one* of these three will change the public key output.   It can also be derived from a private key.  *You can generate a unique public key with each combination of secret recovery phrase, passphrase, and derivation path; or from a private key. Thus, with a single secret recovery phrase, you can generate many public keys; however, with a private key, you can only generate one public key. If you are just starting, generate a <a href=\"#operation/solanaGenerateSecretRecoveryPhrase\">secret recovery phrase</a> or <a href=\"#operation/solanaGeneratePrivateKey\">private key</a>.  *If you are trying to get a public key that already exists (e.g., created in the Phantom wallet), make sure you use the correct derivation path and passphrase; or just use the private key. To read more about that, see the descriptions of those parameters below.*  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Derive public key
     * @param getPublicKeyRequest 
     */
    public solanaDerivePublicKey(getPublicKeyRequest: GetPublicKeyRequest, _options?: Configuration): Promise<PublicKey> {
        const result = this.api.solanaDerivePublicKey(getPublicKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/generate-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a private key for a Solana wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Generate private key
     */
    public solanaGeneratePrivateKey(_options?: Configuration): Promise<GeneratePrivateKey> {
        const result = this.api.solanaGeneratePrivateKey(_options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/generate-secret-phrase\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a secret recovery phrase for a Solana wallet.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Generate secret phrase
     */
    public solanaGenerateSecretRecoveryPhrase(_options?: Configuration): Promise<SecretPhrase> {
        const result = this.api.solanaGenerateSecretRecoveryPhrase(_options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-airdrop\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Use this endpoint to get an airdrop of SOL on the devnet (not real SOL). Amount of 0.015,  which is the minimum amount of SOL you need to mint a Metaplex NFT and then transfer it to another wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get an airdrop on devnet
     * @param airdropRequest 
     */
    public solanaGetAirdrop(airdropRequest?: AirdropRequest, _options?: Configuration): Promise<TransferResponse> {
        const result = this.api.solanaGetAirdrop(airdropRequest, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-wallet-balance\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the balance of a wallet in SOL or any SPL token.  To get the balance of an SPL token, supply the `mint_address` of the SPL token. The list of SPL tokens can be viewed <a href=\"https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/solana.tokenlist.json\" target=\"_blank\">here</a>.  You can also use this endpoint to see whether or not a person owns an NFT. Just supply the `mint_address` of the NFT. A balance of \"1\" means the person owns the NFT, and a balance of \"0\" means the person does not own the NFT. This works in most cases, but we are aware of one edge case where a balance of \"0\" will show up for a person who is actually the owner of the NFT. We just recommend using the <a href=\"#operation/solanaGetNFTOwner\">getNFTOwner</a> endpoint and comparing that output to the expected address.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get wallet's balance in SOL or any SPL
     * @param balanceRequest 
     */
    public solanaGetBalance(balanceRequest?: BalanceRequest, _options?: Configuration): Promise<BalanceResponse> {
        const result = this.api.solanaGetBalance(balanceRequest, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-wallet-nfts\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the NFTs that belong to a given public key address  `Cost: 3 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get address's NFTs
     * @param network The network ID (devnet, mainnet-beta)
     * @param publicKey The public key of the account whose list of owned NFTs you want to get
     */
    public solanaGetNFTsBelongingToWallet(network: string, publicKey: string, _options?: Configuration): Promise<ListNFTsResponse> {
        const result = this.api.solanaGetNFTsBelongingToWallet(network, publicKey, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-wallet-token-holdings\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the token holdings of a given public key address  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get address's tokens and respective balances
     * @param network The network ID (devnet, mainnet-beta)
     * @param publicKey The public key of the account whose list of owned NFTs you want to get
     * @param includeNfts Whether or not to include NFTs in the response
     * @param includeZeroBalanceHoldings Whether or not to include holdings that have zero balance. This indicates that the wallet held this token or NFT in the past, but no longer holds it.
     */
    public solanaGetTokensBelongingToWallet(network: string, publicKey: string, includeNfts?: boolean, includeZeroBalanceHoldings?: boolean, _options?: Configuration): Promise<Array<any>> {
        const result = this.api.solanaGetTokensBelongingToWallet(network, publicKey, includeNfts, includeZeroBalanceHoldings, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-wallet/get-wallet-transactions\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the transaction signatures of a given public key address  `Cost: 1 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get address's associated transaction signatures
     * @param network The network ID (devnet, mainnet-beta)
     * @param publicKey The public key of the account whose list of signatures you want to get
     */
    public solanaGetWalletTransactions(network: string, publicKey: string, _options?: Configuration): Promise<Array<string>> {
        const result = this.api.solanaGetWalletTransactions(network, publicKey, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/transfer-sol\" target=\"_blank\">See transfer SOL example (Python, JavaScript)</a>.  <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/transfer-nft\" target=\"_blank\">See transfer NFT example (can also be used for SPL token) (Python, JavaScript)</a>.  This is a powerful function. It might be slightly confusing because there are several optional parameters, so take some time to review it. This function can send SOL, send an SPL token, or send an NFT. You can set the fee payer of the transaction; you can sign and submit the transaction for confirmation; and you can select to simply return the compiled transaction so that you can submit it to the user for signing (e.g., via Phantom; no private keys required in this case).  Transfer SOL, a token or an NFT to another address. If you're transferring an NFT, supply the `mint` (the address of the mint) for the `token_address`.  SENDER: Note that the wallet information is used to authorize the sending of the tokens and identifies the source of the tokens. If `return_compiled_transaction = false`, we sign and submit the transaction (`wallet` is required in this case; do not provide a value for `sender_public_key`). If `return_compiled_transaction = true`, we compile the transaction (one of `wallet` or `sender_public_key` is required in this case; do not provide both).  RECIPIENT: `recipient_address` identifies the receiver. This is entirely separate from the information used for the SENDER above. So, in this API call, there are two wallets involved, but only one (namely, the SENDER) is needed to authorize the transaction.  FEE_PAYER: The fee payer of the transaction defaults to `wallet` (or `sender_public_key`). To set a different fee payer, provide a value for `fee_payer_wallet`.  If you're transfering a token, supply the token address found on the explorer (e.g., see `SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt` for <a href=\"https://explorer.solana.com/address/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt\" target=\"_blank\">Serum Token</a>) for the `token_address`. If you're transferring SOL, do not supply a value for `token_address`.  `Cost: 2 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Transfer SOL, a token, or an NFT to another address
     * @param transferRequest 
     */
    public solanaTransfer(transferRequest?: TransferRequest, _options?: Configuration): Promise<DoubleTransferResponse> {
        const result = this.api.solanaTransfer(transferRequest, _options);
        return result.toPromise();
    }


}



import { ObservableTokenApi } from './ObservableAPI';

import { TokenApiRequestFactory, TokenApiResponseProcessor} from "../apis/TokenApi";
export class PromiseTokenApi {
    private api: ObservableTokenApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TokenApiRequestFactory,
        responseProcessor?: TokenApiResponseProcessor
    ) {
        this.api = new ObservableTokenApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/tokens/get-token-metadata\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      Get the metadata of a token.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get a token's metadata
     * @param blockchain The blockchain you want to use 
     * @param network The network of the blockchain you selected  - Solana: &#x60;devnet&#x60;, &#x60;mainnet-beta&#x60; - Ethereum: &#x60;ropsten&#x60;, &#x60;mainnet&#x60;  Defaults when not provided (not applicable to path parameters): - Solana: &#x60;devnet&#x60; - Ethereum: &#x60;ropsten&#x60;
     * @param tokenBlockchainIdentifier The identifier of the token (e.g., &#x60;mint_address&#x60; on &#x60;Solana&#x60; or &#x60;token_address&#x60; on &#x60;Ethereum&#x60;) 
     */
    public getTokenMetadata(blockchain: 'ethereum' | 'solana', network: string, tokenBlockchainIdentifier: 'ethereum' | 'solana', _options?: Configuration): Promise<TokenMetadataResponse> {
        const result = this.api.getTokenMetadata(blockchain, network, tokenBlockchainIdentifier, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/tokens/get-all-tokens\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      List all tokens.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * List all tokens
     * @param blockchain The blockchain you want to use 
     * @param network The network of the blockchain you selected  - Solana: &#x60;devnet&#x60;, &#x60;mainnet-beta&#x60; - Ethereum: &#x60;ropsten&#x60;, &#x60;mainnet&#x60;  Defaults when not provided (not applicable to path parameters): - Solana: &#x60;devnet&#x60; - Ethereum: &#x60;ropsten&#x60;
     */
    public listAllTokens(blockchain: 'solana', network: string, _options?: Configuration): Promise<Array<TokenMetadataResponse>> {
        const result = this.api.listAllTokens(blockchain, network, _options);
        return result.toPromise();
    }


}



import { ObservableTransactionApi } from './ObservableAPI';

import { TransactionApiRequestFactory, TransactionApiResponseProcessor} from "../apis/TransactionApi";
export class PromiseTransactionApi {
    private api: ObservableTransactionApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionApiRequestFactory,
        responseProcessor?: TransactionApiResponseProcessor
    ) {
        this.api = new ObservableTransactionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/transaction/get-transaction\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the details of a transaction made on the specified blockchain.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the details of a transaction made on a blockchain
     * @param blockchain The blockchain you want to use 
     * @param network The network of the blockchain you selected  - Solana: &#x60;devnet&#x60;, &#x60;mainnet-beta&#x60; - Ethereum: &#x60;ropsten&#x60;, &#x60;mainnet&#x60;  Defaults when not provided (not applicable to path parameters): - Solana: &#x60;devnet&#x60; - Ethereum: &#x60;ropsten&#x60;
     * @param transactionBlockchainIdentifier The transaction signature of the transaction.  Examples: - Solana: &#x60;5wHu1qwD7q5ifaN5nwdcDqNFo53GJqa7nLp2BeeEpcHCusb4GzARz4GjgzsEHMkBMgCJMGa6GSQ1VG96Exv8kt2W&#x60; - Ethereum: &#x60;0x5f36b787daa57bfe8568d69e24eae54ccb00720c6edfc826bd4a7b19c525eef4&#x60;
     */
    public getTransaction(blockchain: 'ethereum' | 'solana', network: string, transactionBlockchainIdentifier: string, _options?: Configuration): Promise<GeneralTransaction> {
        const result = this.api.getTransaction(blockchain, network, transactionBlockchainIdentifier, _options);
        return result.toPromise();
    }


}



import { ObservableWalletApi } from './ObservableAPI';

import { WalletApiRequestFactory, WalletApiResponseProcessor} from "../apis/WalletApi";
export class PromiseWalletApi {
    private api: ObservableWalletApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WalletApiRequestFactory,
        responseProcessor?: WalletApiResponseProcessor
    ) {
        this.api = new ObservableWalletApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/derive-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely derive a private key for a wallet.   For example, if you have a seed phrase and want to derive the corresponding private key, use this endpoint.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Derive private key
     * @param blockchain The blockchain you want to use 
     * @param supplyWalletRequest 
     */
    public derivePrivateKey(blockchain: 'avalanche' | 'binance_smart_chain' | 'ethereum' | 'near' | 'solana', supplyWalletRequest: SupplyWalletRequest, _options?: Configuration): Promise<GeneralGeneratePrivateKeyResponse> {
        const result = this.api.derivePrivateKey(blockchain, supplyWalletRequest, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/derive-wallet-identifier\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Derive the identifier for a wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Derive wallet identifier
     * @param blockchain The blockchain you want to use 
     * @param supplyWalletRequest 
     */
    public deriveWalletIdentifier(blockchain: 'avalanche' | 'binance_smart_chain' | 'ethereum' | 'near' | 'solana', supplyWalletRequest: SupplyWalletRequest, _options?: Configuration): Promise<WalletIdentifiers> {
        const result = this.api.deriveWalletIdentifier(blockchain, supplyWalletRequest, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/generate-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a private key for a wallet.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Generate private key
     * @param blockchain The blockchain you want to use 
     */
    public generatePrivateKey(blockchain: 'avalanche' | 'binance_smart_chain' | 'ethereum' | 'near' | 'solana', _options?: Configuration): Promise<GeneralGeneratePrivateKeyResponse> {
        const result = this.api.generatePrivateKey(blockchain, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/generate-secret-phrase\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a seed phrase for a wallet.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Generate seed phrase
     * @param blockchain The blockchain you want to use 
     * @param generateSeedPhraseRequest 
     */
    public generateSeedPhrase(blockchain: 'avalanche' | 'binance_smart_chain' | 'ethereum' | 'near' | 'solana', generateSeedPhraseRequest?: GenerateSeedPhraseRequest, _options?: Configuration): Promise<GeneralSecretPhrase> {
        const result = this.api.generateSeedPhrase(blockchain, generateSeedPhraseRequest, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/get-airdrop\" target=\"_blank\">See examples (Python, JavaScript)</a>.      - Ethereum: Receive an airdrop of 0.001 ETH on Ropsten (not real ETH).  - Solana: Use this endpoint to get an airdrop of SOL on the devnet (not real SOL). Amount of 0.015, which is the minimum amount of SOL you need to mint an NFT and then transfer it to another wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get an airdrop
     * @param blockchain The blockchain you want to use 
     * @param generalAirdropRequest 
     */
    public getAirdrop(blockchain: 'ethereum' | 'solana', generalAirdropRequest?: GeneralAirdropRequest, _options?: Configuration): Promise<GeneralTransactionMadeResponse> {
        const result = this.api.getAirdrop(blockchain, generalAirdropRequest, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/get-wallet-balance\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the balance of a wallet in the native blockchain currency (e.g., ETH, SOL) or any token (e.g., ERC-20, NFTs, SPL, etc.).  To get the balance of a specific token, supply the `token_blockchain_identifier` of the token.   You can also use this endpoint to see whether or not a person owns an NFT. Just supply the `token_blockchain_identifier` of the NFT. A balance of \"1\" means the person owns the NFT, and a balance of \"0\" means the person does not own the NFT.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get wallet's balance of X
     * @param blockchain The blockchain you want to use 
     * @param generalBalanceRequest 
     */
    public getBalance(blockchain: 'ethereum' | 'solana', generalBalanceRequest?: GeneralBalanceRequest, _options?: Configuration): Promise<GeneralBalanceResponse> {
        const result = this.api.getBalance(blockchain, generalBalanceRequest, _options);
        return result.toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/transfer-crypto-token-or-nft\" target=\"_blank\">See transfer ETH/SOL/crypto example (Python, JavaScript)</a>.  <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/transfer-crypto-token-or-nft\" target=\"_blank\">See transfer NFT/token example (Python, JavaScript)</a>.  This is a powerful function. It might be slightly confusing because there are several optional parameters, so take some time to review it.   This function can send - The native currency of the selected blockchain (e.g., SOL, ETH, BNB, etc.) - A token (e.g., an SPL token, ERC-20 token, etc.) - An NFT  You can sign and submit the transaction for confirmation; and you can select to simply return the compiled transaction so that you can submit it to the user for signing (e.g., via Phantom or Metamask; no private keys required in this case).  If you're transferring an NFT or a token, supply its respective `token_blockchain_identifier`.  SENDER: Note that the wallet information is used to authorize the sending of the tokens and identifies the source of the tokens. If `return_compiled_transaction = false`, we sign and submit the transaction (`wallet` is required in this case; do not provide a value for `sender_blockchain_identifier`). If `return_compiled_transaction = true`, we compile the transaction (`sender_blockchain_identifier` is required in this case; do not provide `wallet`).  RECIPIENT: `recipient_blockchain_identifier` identifies the receiver. This is entirely separate from the information used for the SENDER above. So, in this API call, there are two wallets involved, but only one (namely, the SENDER) is needed to authorize the transaction (if you want us to sign and submitting it).  FEE_PAYER (Solana only): The fee payer of the transaction defaults to `wallet` (or `sender_blockchain_identifier`). To set a different fee payer, provide a value for `fee_payer_wallet`.  `Cost: 2 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Transfer crypto, a token, or an NFT to another wallet
     * @param blockchain The blockchain you want to use 
     * @param generalTransferRequest 
     */
    public transfer(blockchain: 'ethereum' | 'solana', generalTransferRequest?: GeneralTransferRequest, _options?: Configuration): Promise<GeneralTransactionResponse> {
        const result = this.api.transfer(blockchain, generalTransferRequest, _options);
        return result.toPromise();
    }


}



