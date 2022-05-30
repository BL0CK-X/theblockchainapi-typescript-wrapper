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
import { BuyRequest } from '../models/BuyRequest';
import { BuyResponse } from '../models/BuyResponse';
import { CandyMachineSearchRequest } from '../models/CandyMachineSearchRequest';
import { CreateTestCandyMachineRequest } from '../models/CreateTestCandyMachineRequest';
import { CreateTestCandyMachineResponse } from '../models/CreateTestCandyMachineResponse';
import { DelistRequest } from '../models/DelistRequest';
import { DelistResponse } from '../models/DelistResponse';
import { DoubleTransferResponse } from '../models/DoubleTransferResponse';
import { Endpoint } from '../models/Endpoint';
import { EndpointReference } from '../models/EndpointReference';
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
import { GetNFTListingResponse } from '../models/GetNFTListingResponse';
import { GetPublicKeyRequest } from '../models/GetPublicKeyRequest';
import { GetSPLTokenResponse } from '../models/GetSPLTokenResponse';
import { Group } from '../models/Group';
import { HexPrivateKey } from '../models/HexPrivateKey';
import { InlineObject } from '../models/InlineObject';
import { InputBlockchainIdentifier } from '../models/InputBlockchainIdentifier';
import { InputName } from '../models/InputName';
import { ListNFTsResponse } from '../models/ListNFTsResponse';
import { ListRequest } from '../models/ListRequest';
import { ListResponse } from '../models/ListResponse';
import { MintNFTErrorResponse } from '../models/MintNFTErrorResponse';
import { MintNFTRequest } from '../models/MintNFTRequest';
import { MintNFTResponse } from '../models/MintNFTResponse';
import { NFT } from '../models/NFT';
import { NFTCollection } from '../models/NFTCollection';
import { NFTData } from '../models/NFTData';
import { NFTMintErrorResponse } from '../models/NFTMintErrorResponse';
import { NFTMintFee } from '../models/NFTMintFee';
import { NFTMintRequest } from '../models/NFTMintRequest';
import { NFTOwnerResponse } from '../models/NFTOwnerResponse';
import { NFTSearchRequest } from '../models/NFTSearchRequest';
import { NFTSearchResponse } from '../models/NFTSearchResponse';
import { NearPublicKey } from '../models/NearPublicKey';
import { ParameterSpecification } from '../models/ParameterSpecification';
import { PrivateKey } from '../models/PrivateKey';
import { Project } from '../models/Project';
import { ProjectCreateRequest } from '../models/ProjectCreateRequest';
import { ProjectDeploymentURL } from '../models/ProjectDeploymentURL';
import { PublicKey } from '../models/PublicKey';
import { SecretPhrase } from '../models/SecretPhrase';
import { SecretRecoveryPhrase } from '../models/SecretRecoveryPhrase';
import { SolanaPublicKey } from '../models/SolanaPublicKey';
import { SolanaTransaction } from '../models/SolanaTransaction';
import { SolanaTransactionCompiledResponse } from '../models/SolanaTransactionCompiledResponse';
import { SolanaTransactionMadeResponse } from '../models/SolanaTransactionMadeResponse';
import { StatItem } from '../models/StatItem';
import { SupplyWalletRequest } from '../models/SupplyWalletRequest';
import { TokenMetadataResponse } from '../models/TokenMetadataResponse';
import { Transaction } from '../models/Transaction';
import { TransactionResult } from '../models/TransactionResult';
import { TransferRequest } from '../models/TransferRequest';
import { TransferResponse } from '../models/TransferResponse';
import { TransferResponseCompiled } from '../models/TransferResponseCompiled';
import { Wallet } from '../models/Wallet';
import { WalletIdentifiers } from '../models/WalletIdentifiers';

import { ObservableEndpointApi } from "./ObservableAPI";
import { EndpointApiRequestFactory, EndpointApiResponseProcessor} from "../apis/EndpointApi";

export interface EndpointApiDeleteEndpointRequest {
    /**
     * 
     * @type EndpointReference
     * @memberof EndpointApideleteEndpoint
     */
    endpointReference?: EndpointReference
}

export interface EndpointApiGetEndpointRequest {
    /**
     * 
     * @type EndpointReference
     * @memberof EndpointApigetEndpoint
     */
    endpointReference?: EndpointReference
}

export interface EndpointApiListEndpointsRequest {
}

export interface EndpointApiSetEndpointRequest {
    /**
     * 
     * @type Endpoint
     * @memberof EndpointApisetEndpoint
     */
    endpoint?: Endpoint
}

export class ObjectEndpointApi {
    private api: ObservableEndpointApi

    public constructor(configuration: Configuration, requestFactory?: EndpointApiRequestFactory, responseProcessor?: EndpointApiResponseProcessor) {
        this.api = new ObservableEndpointApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Deletes an endpoint from a project. This endpoint removes the endpoint from the project's documentation. However, this does un-deploy the endpoint. To do so, you must <a href=\"#operation/deployProject\">deploy the project</a>.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Delete an endpoint 
     * @param param the request object
     */
    public deleteEndpoint(param: EndpointApiDeleteEndpointRequest = {}, options?: Configuration): Promise<void> {
        return this.api.deleteEndpoint(param.endpointReference,  options).toPromise();
    }

    /**
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Get an endpoint's metadata from a project.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get an endpoint's metadata 
     * @param param the request object
     */
    public getEndpoint(param: EndpointApiGetEndpointRequest = {}, options?: Configuration): Promise<Endpoint> {
        return this.api.getEndpoint(param.endpointReference,  options).toPromise();
    }

    /**
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  List all endpoints that you have added under your account.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * List all endpoints 
     * @param param the request object
     */
    public listEndpoints(param: EndpointApiListEndpointsRequest = {}, options?: Configuration): Promise<Array<Endpoint>> {
        return this.api.listEndpoints( options).toPromise();
    }

    /**
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Create or update an `endpoint` for a `project`.   An `endpoint` is a function that is a part of a mini-API `project`.  This endpoint adds the `endpoint` to the `project`'s documentation. However, this does not deploy the `endpoint`. To do so, you must <a href=\"#operation/deployProject\">deploy the project</a>.  All attributes except `group_name` are required if **creating** an `endpoint`.  Only `path`, `project_id`, and `version` are required if **updating** an `endpoint`.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Create / update an endpoint 
     * @param param the request object
     */
    public setEndpoint(param: EndpointApiSetEndpointRequest = {}, options?: Configuration): Promise<Endpoint> {
        return this.api.setEndpoint(param.endpoint,  options).toPromise();
    }

}

import { ObservableNameServiceApi } from "./ObservableAPI";
import { NameServiceApiRequestFactory, NameServiceApiResponseProcessor} from "../apis/NameServiceApi";

export interface NameServiceApiGetBlockchainIdentifierFromNameRequest {
    /**
     * The blockchain you want to use 
     * @type &#39;ethereum&#39; | &#39;solana&#39;
     * @memberof NameServiceApigetBlockchainIdentifierFromName
     */
    blockchain: 'ethereum' | 'solana'
    /**
     * The network of the blockchain you selected  - Solana: &#x60;devnet&#x60;, &#x60;mainnet-beta&#x60; - Ethereum: &#x60;ropsten&#x60;, &#x60;mainnet&#x60;  Defaults when not provided (not applicable to path parameters): - Solana: &#x60;devnet&#x60; - Ethereum: &#x60;ropsten&#x60;
     * @type string
     * @memberof NameServiceApigetBlockchainIdentifierFromName
     */
    network: string
    /**
     * 
     * @type InputName
     * @memberof NameServiceApigetBlockchainIdentifierFromName
     */
    inputName?: InputName
}

export interface NameServiceApiGetNameForBlockchainIdentifierRequest {
    /**
     * The blockchain you want to use 
     * @type &#39;ethereum&#39; | &#39;solana&#39;
     * @memberof NameServiceApigetNameForBlockchainIdentifier
     */
    blockchain: 'ethereum' | 'solana'
    /**
     * The network of the blockchain you selected  - Solana: &#x60;devnet&#x60;, &#x60;mainnet-beta&#x60; - Ethereum: &#x60;ropsten&#x60;, &#x60;mainnet&#x60;  Defaults when not provided (not applicable to path parameters): - Solana: &#x60;devnet&#x60; - Ethereum: &#x60;ropsten&#x60;
     * @type string
     * @memberof NameServiceApigetNameForBlockchainIdentifier
     */
    network: string
    /**
     * The identifier of the token (e.g., &#x60;mint_address&#x60; on &#x60;Solana&#x60; or &#x60;token_address&#x60; on &#x60;Ethereum&#x60;) 
     * @type &#39;ethereum&#39; | &#39;solana&#39;
     * @memberof NameServiceApigetNameForBlockchainIdentifier
     */
    blockchainIdentifier: 'ethereum' | 'solana'
    /**
     * 
     * @type InputBlockchainIdentifier
     * @memberof NameServiceApigetNameForBlockchainIdentifier
     */
    inputBlockchainIdentifier?: InputBlockchainIdentifier
}

export class ObjectNameServiceApi {
    private api: ObservableNameServiceApi

    public constructor(configuration: Configuration, requestFactory?: NameServiceApiRequestFactory, responseProcessor?: NameServiceApiResponseProcessor) {
        this.api = new ObservableNameServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      Get the blockchain identifier from a name.  e.g., Input `vitalik.eth` and output `0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045`  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the identifier
     * @param param the request object
     */
    public getBlockchainIdentifierFromName(param: NameServiceApiGetBlockchainIdentifierFromNameRequest, options?: Configuration): Promise<InputBlockchainIdentifier> {
        return this.api.getBlockchainIdentifierFromName(param.blockchain, param.network, param.inputName,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      Get the name from a blockchain identifier.  e.g., Input `0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045` and output `vitalik.eth`  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the name
     * @param param the request object
     */
    public getNameForBlockchainIdentifier(param: NameServiceApiGetNameForBlockchainIdentifierRequest, options?: Configuration): Promise<InputName> {
        return this.api.getNameForBlockchainIdentifier(param.blockchain, param.network, param.blockchainIdentifier, param.inputBlockchainIdentifier,  options).toPromise();
    }

}

import { ObservableProjectApi } from "./ObservableAPI";
import { ProjectApiRequestFactory, ProjectApiResponseProcessor} from "../apis/ProjectApi";

export interface ProjectApiCreateProjectRequest {
    /**
     * 
     * @type ProjectCreateRequest
     * @memberof ProjectApicreateProject
     */
    projectCreateRequest?: ProjectCreateRequest
}

export interface ProjectApiCreateProjectVersionRequest {
    /**
     * The ID of the project. Created and returned when a project is created.
     * @type string
     * @memberof ProjectApicreateProjectVersion
     */
    projectId: string
    /**
     * The version of the project.
     * @type string
     * @memberof ProjectApicreateProjectVersion
     */
    version: string
}

export interface ProjectApiDeleteProjectRequest {
    /**
     * The ID of the project. Created and returned when a project is created.
     * @type string
     * @memberof ProjectApideleteProject
     */
    projectId: string
}

export interface ProjectApiDeleteProjectVersionRequest {
    /**
     * The ID of the project. Created and returned when a project is created.
     * @type string
     * @memberof ProjectApideleteProjectVersion
     */
    projectId: string
    /**
     * The version of the project.
     * @type string
     * @memberof ProjectApideleteProjectVersion
     */
    version: string
}

export interface ProjectApiGetProjectRequest {
    /**
     * The ID of the project. Created and returned when a project is created.
     * @type string
     * @memberof ProjectApigetProject
     */
    projectId: string
}

export interface ProjectApiGetProjectDeploymentStatusRequest {
    /**
     * The ID of the project. Created and returned when a project is created.
     * @type string
     * @memberof ProjectApigetProjectDeploymentStatus
     */
    projectId: string
}

export interface ProjectApiGetProjectDeploymentURLRequest {
    /**
     * The ID of the project. Created and returned when a project is created.
     * @type string
     * @memberof ProjectApigetProjectDeploymentURL
     */
    projectId: string
    /**
     * 
     * @type InlineObject
     * @memberof ProjectApigetProjectDeploymentURL
     */
    inlineObject?: InlineObject
}

export interface ProjectApiGetProjectStatsRequest {
    /**
     * The ID of the project. Created and returned when a project is created.
     * @type string
     * @memberof ProjectApigetProjectStats
     */
    projectId: string
}

export interface ProjectApiListProjectsRequest {
}

export interface ProjectApiUpdateProjectRequest {
    /**
     * The ID of the project. Created and returned when a project is created.
     * @type string
     * @memberof ProjectApiupdateProject
     */
    projectId: string
    /**
     * 
     * @type ProjectCreateRequest
     * @memberof ProjectApiupdateProject
     */
    projectCreateRequest?: ProjectCreateRequest
}

export interface ProjectApiUpdateProjectDocumentationRequest {
    /**
     * The ID of the project. Created and returned when a project is created.
     * @type string
     * @memberof ProjectApiupdateProjectDocumentation
     */
    projectId: string
    /**
     * The version of the project.
     * @type string
     * @memberof ProjectApiupdateProjectDocumentation
     */
    version: string
}

export class ObjectProjectApi {
    private api: ObservableProjectApi

    public constructor(configuration: Configuration, requestFactory?: ProjectApiRequestFactory, responseProcessor?: ProjectApiResponseProcessor) {
        this.api = new ObservableProjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  A project is an entire mini-API.  When you create a project, this initializes the project in our database and the API documentation for the project.  After initialization, you can <a href=\"#operation/createEndpoint\">add endpoints</a> to the documentation and deploy the project's mini-API to our servers. Learn more <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Create a project 
     * @param param the request object
     */
    public createProject(param: ProjectApiCreateProjectRequest = {}, options?: Configuration): Promise<Project> {
        return this.api.createProject(param.projectCreateRequest,  options).toPromise();
    }

    /**
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Create a new version for the project. The version must be higher than all existing versions. This will duplicate the existing project's latest version and auto-deploy it. To update these endpoints, simply redeploy on this project's versions.  When a project is first created, it uses the default \"0.0.1\" version.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Create a new project version 
     * @param param the request object
     */
    public createProjectVersion(param: ProjectApiCreateProjectVersionRequest, options?: Configuration): Promise<Project> {
        return this.api.createProjectVersion(param.projectId, param.version,  options).toPromise();
    }

    /**
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Deletes a project. This will remove the mini-API entirely from our system.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Delete a project 
     * @param param the request object
     */
    public deleteProject(param: ProjectApiDeleteProjectRequest, options?: Configuration): Promise<void> {
        return this.api.deleteProject(param.projectId,  options).toPromise();
    }

    /**
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Delete a version for the project. There must always be at least one version deployed, so you cannot delete the last remaining version of the project. This will auto-deploy the project and update its documentation, if necessary.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Delete a project version 
     * @param param the request object
     */
    public deleteProjectVersion(param: ProjectApiDeleteProjectVersionRequest, options?: Configuration): Promise<Project> {
        return this.api.deleteProjectVersion(param.projectId, param.version,  options).toPromise();
    }

    /**
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Update your project's metadata. None of these parameters are required. Just provide the parameters that you would like to update.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get a project's metadata 
     * @param param the request object
     */
    public getProject(param: ProjectApiGetProjectRequest, options?: Configuration): Promise<Project> {
        return this.api.getProject(param.projectId,  options).toPromise();
    }

    /**
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Get the deployment status for the project after uploading the binary. Will be: `DEPLOYED` or NOT `DEPLOYED`.  After it is `DEPLOYED`, you can then make requests to your API.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get deployment status 
     * @param param the request object
     */
    public getProjectDeploymentStatus(param: ProjectApiGetProjectDeploymentStatusRequest, options?: Configuration): Promise<any> {
        return this.api.getProjectDeploymentStatus(param.projectId,  options).toPromise();
    }

    /**
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Get the deployment URL for the project.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the deployment URL 
     * @param param the request object
     */
    public getProjectDeploymentURL(param: ProjectApiGetProjectDeploymentURLRequest, options?: Configuration): Promise<ProjectDeploymentURL> {
        return this.api.getProjectDeploymentURL(param.projectId, param.inlineObject,  options).toPromise();
    }

    /**
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Get the usage stats for your mini-API.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get a project's stats 
     * @param param the request object
     */
    public getProjectStats(param: ProjectApiGetProjectStatsRequest, options?: Configuration): Promise<Array<StatItem>> {
        return this.api.getProjectStats(param.projectId,  options).toPromise();
    }

    /**
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  List all projects associated with your account.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * List projects 
     * @param param the request object
     */
    public listProjects(param: ProjectApiListProjectsRequest = {}, options?: Configuration): Promise<Array<Project>> {
        return this.api.listProjects( options).toPromise();
    }

    /**
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Update your project's metadata. None of these parameters are required. Just provide the parameters that you would like to update.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Update a project 
     * @param param the request object
     */
    public updateProject(param: ProjectApiUpdateProjectRequest, options?: Configuration): Promise<Project> {
        return this.api.updateProject(param.projectId, param.projectCreateRequest,  options).toPromise();
    }

    /**
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Update your project's documentation.   Your project's documentation can only represent *one* version of your API.  Thus, when you call this, the `current_documentation_version` attribute of your project is set to the version supplied in the call.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Update the project's documentation 
     * @param param the request object
     */
    public updateProjectDocumentation(param: ProjectApiUpdateProjectDocumentationRequest, options?: Configuration): Promise<Project> {
        return this.api.updateProjectDocumentation(param.projectId, param.version,  options).toPromise();
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
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-account/get-account\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the details of an account on Solana. Learn more about accounts <a href=\"https://docs.solana.com/developing/programming-model/accounts\" target=\"_blank\">here</a>.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
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
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-account/get-is-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Determine whether or not a public key is an NFT `mint address`  `Cost: 0.5 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
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
    public solanaCreateTestCandyMachine(param: SolanaCandyMachineApiSolanaCreateTestCandyMachineRequest = {}, options?: Configuration): Promise<CreateTestCandyMachineResponse> {
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
    public solanaGetCandyMachineMetadata(param: SolanaCandyMachineApiSolanaGetCandyMachineMetadataRequest = {}, options?: Configuration): Promise<GetCandyMetadataResponse> {
        return this.api.solanaGetCandyMachineMetadata(param.getCandyMetadataRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/list-all-candy-machines\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can list all candy machines published to Solana mainnet.  We update this data every 15 minutes.  The output is a list of config addresses, currently about 17000 in length.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * List all CMs
     * @param param the request object
     */
    public solanaListAllCandyMachines(param: SolanaCandyMachineApiSolanaListAllCandyMachinesRequest = {}, options?: Configuration): Promise<any> {
        return this.api.solanaListAllCandyMachines( options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/mint-from-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to mint an NFT from a metaplex candy machine as soon as it drops.  This only works for `v1` and `v2` candy machines, and does not work for candy machines of any other type such as Magic Eden candy machines.  In order to achieve speed, this endpoint sends the transaction without checking whether or not it confirmed. It could still fail, for example, because the candy machine ran out of available mints. You should check the status of the transaction using our <a href=\"#operation/solanaGetTransaction\">getTransaction</a> endpoint. <a href=\"https://gist.github.com/joshwolff1/298e8251e43ff9b4815028683b1ca17d\" target=\"_blank\">Here's an example</a> of how to do this.  Mint transactions for candy machines that have capatcha/Civic enabled will fail. There is a gatekeeper functionality where you must manually verify through Civic and captcha in order to mint from a candy machine. In this functionality, Civic signs the transaction. Therefore, if the gatekeeper functionality is enabled, our “Mint from candy machine” endpoint will fail because it is missing a signer. If it is not enabled, then our “Mint from candy machine” endpoint will succeed. One caveat is the attribute “expireOnUse”. If this is True, then you have to solve a captcha each time. In this case, the “Mint from candy machine” endpoint will fail. If this is False, then your first verification is sufficient for further mints. In which case, after verifying manually the first time, you can use our endpoint thereafter.   You can check if the gatekeeper functionality is enabled with this <a href=\"#operation/solanaGetCandyMachineMetadata\">endpoint</a>.   `Cost: 8 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Mint from a CM
     * @param param the request object
     */
    public solanaMintFromCandyMachine(param: SolanaCandyMachineApiSolanaMintFromCandyMachineRequest = {}, options?: Configuration): Promise<MintNFTResponse> {
        return this.api.solanaMintFromCandyMachine(param.mintNFTRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/search-candy-machines\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can search candy machines by their symbol, name of NFTs, uuid, configuration address, and update authority.  The output is a list of config addresses.  You can also provide multiple search clauses, such as the update authority (`update_authority=\"G17UmNGnMJ851x3M1JXocgpft1afcYedjPuFpo1ohhCk\"`) and symbol begins with \"Sol\" (`symbol=\"Sol\", symbol_search_method='begins_with'`).  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Search CMs
     * @param param the request object
     */
    public solanaSearchCandyMachines(param: SolanaCandyMachineApiSolanaSearchCandyMachinesRequest = {}, options?: Configuration): Promise<Array<string>> {
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
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/create-an-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Create a Metaplex NFT on Solana.   Read more on this <a href=\"https://blog.blockchainapi.com/2021/11/16/a-note-on-nfts.html\" target=\"_blank\">here</a>.  Note: Please see <a href=\"https://blog.blockchainapi.com/2022/01/18/how-to-format-off-chain-nft-metadata.html\" target=\"_blank\">this article</a> to learn more about what `nft_upload_method` means and how storing the metadata of an NFT works.  If you're using `nft_upload_method = \"LINK\"`, then to add attributes to the NFT or an image, add them to a JSON file and upload that to Arweave/IPFS/Filecoin. See the JSON format <a href=\"https://blog.blockchainapi.com/2022/01/18/how-to-format-off-chain-nft-metadata.html\">here</a>.  Then supply the link to the JSON file in `nft_url`.   NOTE: Don't use `nft_metadata`. Values provided here do not do anything at the moment. We are fixing this soon.  `Cost: 5 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Create an NFT on Solana
     * @param param the request object
     */
    public solanaCreateNFT(param: SolanaNFTApiSolanaCreateNFTRequest = {}, options?: Configuration): Promise<NFT> {
        return this.api.solanaCreateNFT(param.nFTMintRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-metadata\" target=\"_blank\">See examples (Python, JavaScript)</a>.       Get the metadata of an NFT.  If you're looking for metadata such as attributes and others, you can retrieve them from the link in the URI field of the NFT metadata returned. See the example on the right. The URI is an Arweave URL. That contains the attributes and other information about the NFT. That URL is stored on the Solana blockchain.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get an NFT's metadata
     * @param param the request object
     */
    public solanaGetNFT(param: SolanaNFTApiSolanaGetNFTRequest, options?: Configuration): Promise<NFT> {
        return this.api.solanaGetNFT(param.network, param.mintAddress,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-mint-fee\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the estimated fee for minting an NFT on the Solana blockchain using the Metaplex protocol.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the NFT mint fee
     * @param param the request object
     */
    public solanaGetNFTMintFee(param: SolanaNFTApiSolanaGetNFTMintFeeRequest = {}, options?: Configuration): Promise<NFTMintFee> {
        return this.api.solanaGetNFTMintFee( options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-owner\" target=\"_blank\">See examples (Python, JavaScript)</a>.       Get the owner of an NFT. This returns the public key of the wallet that owns the associated token account that owns the NFT.  If you want to get the associated token account that literally owns the NFT, derive the associated token account address from the public key returned and the NFT mint address using <a href=\"#operation/solanaDeriveAssociatedTokenAccountAddress\">this endpoint</a>.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
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
    public solanaGetNFTsCandyMachineId(param: SolanaNFTApiSolanaGetNFTsCandyMachineIdRequest = {}, options?: Configuration): Promise<GetCandyMachineIDResponse> {
        return this.api.solanaGetNFTsCandyMachineId(param.getCandyMachineIDRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/search-nfts\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can search for NFTs by their symbol, name of NFTs, uuid, configuration address, and update authority.  The output is a list of NFTs that match your query.  You can also provide multiple search clauses, such as the update authority (`update_authority=\"G17UmNGnMJ851x3M1JXocgpft1afcYedjPuFpo1ohhCk\"`) and symbol begins with \"Sol\" (`symbol=\"Sol\", symbol_search_method='begins_with'`).  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Search NFTs on Solana
     * @param param the request object
     */
    public solanaSearchNFTs(param: SolanaNFTApiSolanaSearchNFTsRequest = {}, options?: Configuration): Promise<Array<NFTSearchResponse>> {
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
     * @type &#39;magic-eden&#39;
     * @memberof SolanaNFTMarketplacesApisolanaBuyNFT
     */
    exchange: 'magic-eden'
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
     * @type &#39;magic-eden&#39;
     * @memberof SolanaNFTMarketplacesApisolanaDelistNFT
     */
    exchange: 'magic-eden'
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
     * @type &#39;magic-eden&#39;
     * @memberof SolanaNFTMarketplacesApisolanaListNFT
     */
    exchange: 'magic-eden'
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
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/buy-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Buy an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  `Cost: 25 Credits`, `Cost: 3 Credits on Devnet` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Buy
     * @param param the request object
     */
    public solanaBuyNFT(param: SolanaNFTMarketplacesApiSolanaBuyNFTRequest, options?: Configuration): Promise<BuyResponse> {
        return this.api.solanaBuyNFT(param.network, param.exchange, param.mintAddress, param.buyRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/delist-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Delist an NFT from a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  `Cost: 8 Credits`, `Cost: 3 Credits on Devnet` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Delist
     * @param param the request object
     */
    public solanaDelistNFT(param: SolanaNFTMarketplacesApiSolanaDelistNFTRequest, options?: Configuration): Promise<DelistResponse> {
        return this.api.solanaDelistNFT(param.network, param.exchange, param.mintAddress, param.delistRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/get-nft-listing\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get the Marketplace listing of a Solana NFT.  Currently checks the following Solana NFT martketplaces: SolSea, Magic Eden, Solanart, Alpha Art, Digital Eyes, Exchange.art  `Cost: 1 Credits`, (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get NFT Listing
     * @param param the request object
     */
    public solanaGetNFTListing(param: SolanaNFTMarketplacesApiSolanaGetNFTListingRequest, options?: Configuration): Promise<GetNFTListingResponse> {
        return this.api.solanaGetNFTListing(param.network, param.mintAddress,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/list-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  List an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  `Cost: 12 Credits`, `Cost: 3 Credits on Devnet` (<a href=\"#section/Pricing\">See Pricing</a>)
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
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-transaction/get-transaction\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the details of a transaction made on Solana.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
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

export interface SolanaWalletApiSolanaGetWalletTransactionsRequest {
    /**
     * The network ID (devnet, mainnet-beta)
     * @type string
     * @memberof SolanaWalletApisolanaGetWalletTransactions
     */
    network: string
    /**
     * The public key of the account whose list of signatures you want to get
     * @type string
     * @memberof SolanaWalletApisolanaGetWalletTransactions
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
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/derive-associated-token-account-address\" target=\"_blank\">See example (Python, JavaScript)</a>.      *Each wallet can own tokens, but in Solana, each token is actually held by an <a href=\"https://spl.solana.com/associated-token-account\" target=\"_blank\">associated token account</a> (ATA), which is an account specific for a token owned by the wallet. When you transfer an SPL token, such as Serum, or transfer an NFT, you're transfering from an ATA you own to another person's ATA for that specific token. With this endpoint, you can derive an associated token address given a wallet and a token address.*  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Derive an associated token account address
     * @param param the request object
     */
    public solanaDeriveAssociatedTokenAccountAddress(param: SolanaWalletApiSolanaDeriveAssociatedTokenAccountAddressRequest, options?: Configuration): Promise<ATAResponse> {
        return this.api.solanaDeriveAssociatedTokenAccountAddress(param.publicKey, param.mintAddress,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/derive-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Returns a private key array and a base58-encoded private key given wallet authentication.  A wallet is defined by a public key. A public key is derived from a combination of seed phrase, derivation path, and passphrase. Changing any *one* of these three will change the public key output.  *You can generate a unique public key with each combination of secret recovery phrase, passphrase, and derivation path. Thus, with a single secret recovery phrase, you can generate many public keys. If you are just starting, just supply the secret recovery phrase you generated with the Solana Wallet Secret Recovery Phrase endpoint.*  *If you are trying to get a public key that already exists (e.g., created in the Phantom wallet), make sure you use the correct derivation path and passphrase. To read more about that, see the descriptions of those parameters below.*  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Derive private key
     * @param param the request object
     */
    public solanaDerivePrivateKey(param: SolanaWalletApiSolanaDerivePrivateKeyRequest, options?: Configuration): Promise<GeneratePrivateKey> {
        return this.api.solanaDerivePrivateKey(param.getPublicKeyRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/derive-public-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Returns a public key given wallet authentication.  A wallet is identified by a public key. A public key is derived from a combination of seed phrase, derivation path, and passphrase. Changing any *one* of these three will change the public key output.   It can also be derived from a private key.  *You can generate a unique public key with each combination of secret recovery phrase, passphrase, and derivation path; or from a private key. Thus, with a single secret recovery phrase, you can generate many public keys; however, with a private key, you can only generate one public key. If you are just starting, generate a <a href=\"#operation/solanaGenerateSecretRecoveryPhrase\">secret recovery phrase</a> or <a href=\"#operation/solanaGeneratePrivateKey\">private key</a>.  *If you are trying to get a public key that already exists (e.g., created in the Phantom wallet), make sure you use the correct derivation path and passphrase; or just use the private key. To read more about that, see the descriptions of those parameters below.*  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Derive public key
     * @param param the request object
     */
    public solanaDerivePublicKey(param: SolanaWalletApiSolanaDerivePublicKeyRequest, options?: Configuration): Promise<PublicKey> {
        return this.api.solanaDerivePublicKey(param.getPublicKeyRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/generate-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a private key for a Solana wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Generate private key
     * @param param the request object
     */
    public solanaGeneratePrivateKey(param: SolanaWalletApiSolanaGeneratePrivateKeyRequest = {}, options?: Configuration): Promise<GeneratePrivateKey> {
        return this.api.solanaGeneratePrivateKey( options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/generate-secret-phrase\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a secret recovery phrase for a Solana wallet.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Generate secret phrase
     * @param param the request object
     */
    public solanaGenerateSecretRecoveryPhrase(param: SolanaWalletApiSolanaGenerateSecretRecoveryPhraseRequest = {}, options?: Configuration): Promise<SecretPhrase> {
        return this.api.solanaGenerateSecretRecoveryPhrase( options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-airdrop\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Use this endpoint to get an airdrop of SOL on the devnet (not real SOL). Amount of 0.015,  which is the minimum amount of SOL you need to mint a Metaplex NFT and then transfer it to another wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get an airdrop on devnet
     * @param param the request object
     */
    public solanaGetAirdrop(param: SolanaWalletApiSolanaGetAirdropRequest = {}, options?: Configuration): Promise<TransferResponse> {
        return this.api.solanaGetAirdrop(param.airdropRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-wallet-balance\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the balance of a wallet in SOL or any SPL token.  To get the balance of an SPL token, supply the `mint_address` of the SPL token. The list of SPL tokens can be viewed <a href=\"https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/solana.tokenlist.json\" target=\"_blank\">here</a>.  You can also use this endpoint to see whether or not a person owns an NFT. Just supply the `mint_address` of the NFT. A balance of \"1\" means the person owns the NFT, and a balance of \"0\" means the person does not own the NFT. This works in most cases, but we are aware of one edge case where a balance of \"0\" will show up for a person who is actually the owner of the NFT. We just recommend using the <a href=\"#operation/solanaGetNFTOwner\">getNFTOwner</a> endpoint and comparing that output to the expected address.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get wallet's balance in SOL or any SPL
     * @param param the request object
     */
    public solanaGetBalance(param: SolanaWalletApiSolanaGetBalanceRequest = {}, options?: Configuration): Promise<BalanceResponse> {
        return this.api.solanaGetBalance(param.balanceRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-wallet-nfts\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the NFTs that belong to a given public key address  `Cost: 3 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get address's NFTs
     * @param param the request object
     */
    public solanaGetNFTsBelongingToWallet(param: SolanaWalletApiSolanaGetNFTsBelongingToWalletRequest, options?: Configuration): Promise<ListNFTsResponse> {
        return this.api.solanaGetNFTsBelongingToWallet(param.network, param.publicKey,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-wallet-token-holdings\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the token holdings of a given public key address  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get address's tokens and respective balances
     * @param param the request object
     */
    public solanaGetTokensBelongingToWallet(param: SolanaWalletApiSolanaGetTokensBelongingToWalletRequest, options?: Configuration): Promise<Array<any>> {
        return this.api.solanaGetTokensBelongingToWallet(param.network, param.publicKey, param.includeNfts, param.includeZeroBalanceHoldings,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-wallet/get-wallet-transactions\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the transaction signatures of a given public key address  `Cost: 1 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get address's associated transaction signatures
     * @param param the request object
     */
    public solanaGetWalletTransactions(param: SolanaWalletApiSolanaGetWalletTransactionsRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.solanaGetWalletTransactions(param.network, param.publicKey,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/transfer-sol\" target=\"_blank\">See transfer SOL example (Python, JavaScript)</a>.  <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/transfer-nft\" target=\"_blank\">See transfer NFT example (can also be used for SPL token) (Python, JavaScript)</a>.  This is a powerful function. It might be slightly confusing because there are several optional parameters, so take some time to review it. This function can send SOL, send an SPL token, or send an NFT. You can set the fee payer of the transaction; you can sign and submit the transaction for confirmation; and you can select to simply return the compiled transaction so that you can submit it to the user for signing (e.g., via Phantom; no private keys required in this case).  Transfer SOL, a token or an NFT to another address. If you're transferring an NFT, supply the `mint` (the address of the mint) for the `token_address`.  SENDER: Note that the wallet information is used to authorize the sending of the tokens and identifies the source of the tokens. If `return_compiled_transaction = false`, we sign and submit the transaction (`wallet` is required in this case; do not provide a value for `sender_public_key`). If `return_compiled_transaction = true`, we compile the transaction (one of `wallet` or `sender_public_key` is required in this case; do not provide both).  RECIPIENT: `recipient_address` identifies the receiver. This is entirely separate from the information used for the SENDER above. So, in this API call, there are two wallets involved, but only one (namely, the SENDER) is needed to authorize the transaction.  FEE_PAYER: The fee payer of the transaction defaults to `wallet` (or `sender_public_key`). To set a different fee payer, provide a value for `fee_payer_wallet`.  If you're transfering a token, supply the token address found on the explorer (e.g., see `SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt` for <a href=\"https://explorer.solana.com/address/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt\" target=\"_blank\">Serum Token</a>) for the `token_address`. If you're transferring SOL, do not supply a value for `token_address`.  `Cost: 2 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Transfer SOL, a token, or an NFT to another address
     * @param param the request object
     */
    public solanaTransfer(param: SolanaWalletApiSolanaTransferRequest = {}, options?: Configuration): Promise<DoubleTransferResponse> {
        return this.api.solanaTransfer(param.transferRequest,  options).toPromise();
    }

}

import { ObservableTokenApi } from "./ObservableAPI";
import { TokenApiRequestFactory, TokenApiResponseProcessor} from "../apis/TokenApi";

export interface TokenApiGetTokenMetadataRequest {
    /**
     * The blockchain you want to use 
     * @type &#39;ethereum&#39; | &#39;solana&#39;
     * @memberof TokenApigetTokenMetadata
     */
    blockchain: 'ethereum' | 'solana'
    /**
     * The network of the blockchain you selected  - Solana: &#x60;devnet&#x60;, &#x60;mainnet-beta&#x60; - Ethereum: &#x60;ropsten&#x60;, &#x60;mainnet&#x60;  Defaults when not provided (not applicable to path parameters): - Solana: &#x60;devnet&#x60; - Ethereum: &#x60;ropsten&#x60;
     * @type string
     * @memberof TokenApigetTokenMetadata
     */
    network: string
    /**
     * The identifier of the token (e.g., &#x60;mint_address&#x60; on &#x60;Solana&#x60; or &#x60;token_address&#x60; on &#x60;Ethereum&#x60;) 
     * @type &#39;ethereum&#39; | &#39;solana&#39;
     * @memberof TokenApigetTokenMetadata
     */
    tokenBlockchainIdentifier: 'ethereum' | 'solana'
}

export interface TokenApiListAllTokensRequest {
    /**
     * The blockchain you want to use 
     * @type &#39;solana&#39;
     * @memberof TokenApilistAllTokens
     */
    blockchain: 'solana'
    /**
     * The network of the blockchain you selected  - Solana: &#x60;devnet&#x60;, &#x60;mainnet-beta&#x60; - Ethereum: &#x60;ropsten&#x60;, &#x60;mainnet&#x60;  Defaults when not provided (not applicable to path parameters): - Solana: &#x60;devnet&#x60; - Ethereum: &#x60;ropsten&#x60;
     * @type string
     * @memberof TokenApilistAllTokens
     */
    network: string
}

export class ObjectTokenApi {
    private api: ObservableTokenApi

    public constructor(configuration: Configuration, requestFactory?: TokenApiRequestFactory, responseProcessor?: TokenApiResponseProcessor) {
        this.api = new ObservableTokenApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      Get the metadata of a token.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get a token's metadata
     * @param param the request object
     */
    public getTokenMetadata(param: TokenApiGetTokenMetadataRequest, options?: Configuration): Promise<TokenMetadataResponse> {
        return this.api.getTokenMetadata(param.blockchain, param.network, param.tokenBlockchainIdentifier,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      List all tokens.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * List all tokens
     * @param param the request object
     */
    public listAllTokens(param: TokenApiListAllTokensRequest, options?: Configuration): Promise<Array<TokenMetadataResponse>> {
        return this.api.listAllTokens(param.blockchain, param.network,  options).toPromise();
    }

}

import { ObservableTransactionApi } from "./ObservableAPI";
import { TransactionApiRequestFactory, TransactionApiResponseProcessor} from "../apis/TransactionApi";

export interface TransactionApiGetTransactionRequest {
    /**
     * The blockchain you want to use 
     * @type &#39;ethereum&#39; | &#39;solana&#39;
     * @memberof TransactionApigetTransaction
     */
    blockchain: 'ethereum' | 'solana'
    /**
     * The network of the blockchain you selected  - Solana: &#x60;devnet&#x60;, &#x60;mainnet-beta&#x60; - Ethereum: &#x60;ropsten&#x60;, &#x60;mainnet&#x60;  Defaults when not provided (not applicable to path parameters): - Solana: &#x60;devnet&#x60; - Ethereum: &#x60;ropsten&#x60;
     * @type string
     * @memberof TransactionApigetTransaction
     */
    network: string
    /**
     * The transaction signature of the transaction.  Examples: - Solana: &#x60;5wHu1qwD7q5ifaN5nwdcDqNFo53GJqa7nLp2BeeEpcHCusb4GzARz4GjgzsEHMkBMgCJMGa6GSQ1VG96Exv8kt2W&#x60; - Ethereum: &#x60;0x5f36b787daa57bfe8568d69e24eae54ccb00720c6edfc826bd4a7b19c525eef4&#x60;
     * @type string
     * @memberof TransactionApigetTransaction
     */
    transactionBlockchainIdentifier: string
}

export class ObjectTransactionApi {
    private api: ObservableTransactionApi

    public constructor(configuration: Configuration, requestFactory?: TransactionApiRequestFactory, responseProcessor?: TransactionApiResponseProcessor) {
        this.api = new ObservableTransactionApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/transaction/get-transaction\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the details of a transaction made on the specified blockchain.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the details of a transaction made on a blockchain
     * @param param the request object
     */
    public getTransaction(param: TransactionApiGetTransactionRequest, options?: Configuration): Promise<GeneralTransaction> {
        return this.api.getTransaction(param.blockchain, param.network, param.transactionBlockchainIdentifier,  options).toPromise();
    }

}

import { ObservableWalletApi } from "./ObservableAPI";
import { WalletApiRequestFactory, WalletApiResponseProcessor} from "../apis/WalletApi";

export interface WalletApiDerivePrivateKeyRequest {
    /**
     * The blockchain you want to use 
     * @type &#39;avalanche&#39; | &#39;binance_smart_chain&#39; | &#39;ethereum&#39; | &#39;near&#39; | &#39;solana&#39;
     * @memberof WalletApiderivePrivateKey
     */
    blockchain: 'avalanche' | 'binance_smart_chain' | 'ethereum' | 'near' | 'solana'
    /**
     * 
     * @type SupplyWalletRequest
     * @memberof WalletApiderivePrivateKey
     */
    supplyWalletRequest: SupplyWalletRequest
}

export interface WalletApiDeriveWalletIdentifierRequest {
    /**
     * The blockchain you want to use 
     * @type &#39;avalanche&#39; | &#39;binance_smart_chain&#39; | &#39;ethereum&#39; | &#39;near&#39; | &#39;solana&#39;
     * @memberof WalletApideriveWalletIdentifier
     */
    blockchain: 'avalanche' | 'binance_smart_chain' | 'ethereum' | 'near' | 'solana'
    /**
     * 
     * @type SupplyWalletRequest
     * @memberof WalletApideriveWalletIdentifier
     */
    supplyWalletRequest: SupplyWalletRequest
}

export interface WalletApiGeneratePrivateKeyRequest {
    /**
     * The blockchain you want to use 
     * @type &#39;avalanche&#39; | &#39;binance_smart_chain&#39; | &#39;ethereum&#39; | &#39;near&#39; | &#39;solana&#39;
     * @memberof WalletApigeneratePrivateKey
     */
    blockchain: 'avalanche' | 'binance_smart_chain' | 'ethereum' | 'near' | 'solana'
}

export interface WalletApiGenerateSeedPhraseRequest {
    /**
     * The blockchain you want to use 
     * @type &#39;avalanche&#39; | &#39;binance_smart_chain&#39; | &#39;ethereum&#39; | &#39;near&#39; | &#39;solana&#39;
     * @memberof WalletApigenerateSeedPhrase
     */
    blockchain: 'avalanche' | 'binance_smart_chain' | 'ethereum' | 'near' | 'solana'
    /**
     * 
     * @type GenerateSeedPhraseRequest
     * @memberof WalletApigenerateSeedPhrase
     */
    generateSeedPhraseRequest?: GenerateSeedPhraseRequest
}

export interface WalletApiGetAirdropRequest {
    /**
     * The blockchain you want to use 
     * @type &#39;ethereum&#39; | &#39;solana&#39;
     * @memberof WalletApigetAirdrop
     */
    blockchain: 'ethereum' | 'solana'
    /**
     * 
     * @type GeneralAirdropRequest
     * @memberof WalletApigetAirdrop
     */
    generalAirdropRequest?: GeneralAirdropRequest
}

export interface WalletApiGetBalanceRequest {
    /**
     * The blockchain you want to use 
     * @type &#39;ethereum&#39; | &#39;solana&#39;
     * @memberof WalletApigetBalance
     */
    blockchain: 'ethereum' | 'solana'
    /**
     * 
     * @type GeneralBalanceRequest
     * @memberof WalletApigetBalance
     */
    generalBalanceRequest?: GeneralBalanceRequest
}

export interface WalletApiTransferRequest {
    /**
     * The blockchain you want to use 
     * @type &#39;ethereum&#39; | &#39;solana&#39;
     * @memberof WalletApitransfer
     */
    blockchain: 'ethereum' | 'solana'
    /**
     * 
     * @type GeneralTransferRequest
     * @memberof WalletApitransfer
     */
    generalTransferRequest?: GeneralTransferRequest
}

export class ObjectWalletApi {
    private api: ObservableWalletApi

    public constructor(configuration: Configuration, requestFactory?: WalletApiRequestFactory, responseProcessor?: WalletApiResponseProcessor) {
        this.api = new ObservableWalletApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/derive-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely derive a private key for a wallet.   For example, if you have a seed phrase and want to derive the corresponding private key, use this endpoint.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Derive private key
     * @param param the request object
     */
    public derivePrivateKey(param: WalletApiDerivePrivateKeyRequest, options?: Configuration): Promise<GeneralGeneratePrivateKeyResponse> {
        return this.api.derivePrivateKey(param.blockchain, param.supplyWalletRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/derive-wallet-identifier\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Derive the identifier for a wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Derive wallet identifier
     * @param param the request object
     */
    public deriveWalletIdentifier(param: WalletApiDeriveWalletIdentifierRequest, options?: Configuration): Promise<WalletIdentifiers> {
        return this.api.deriveWalletIdentifier(param.blockchain, param.supplyWalletRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/generate-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a private key for a wallet.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Generate private key
     * @param param the request object
     */
    public generatePrivateKey(param: WalletApiGeneratePrivateKeyRequest, options?: Configuration): Promise<GeneralGeneratePrivateKeyResponse> {
        return this.api.generatePrivateKey(param.blockchain,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/generate-secret-phrase\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a seed phrase for a wallet.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Generate seed phrase
     * @param param the request object
     */
    public generateSeedPhrase(param: WalletApiGenerateSeedPhraseRequest, options?: Configuration): Promise<GeneralSecretPhrase> {
        return this.api.generateSeedPhrase(param.blockchain, param.generateSeedPhraseRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/get-airdrop\" target=\"_blank\">See examples (Python, JavaScript)</a>.      - Ethereum: Receive an airdrop of 0.001 ETH on Ropsten (not real ETH).  - Solana: Use this endpoint to get an airdrop of SOL on the devnet (not real SOL). Amount of 0.015, which is the minimum amount of SOL you need to mint an NFT and then transfer it to another wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get an airdrop
     * @param param the request object
     */
    public getAirdrop(param: WalletApiGetAirdropRequest, options?: Configuration): Promise<GeneralTransactionMadeResponse> {
        return this.api.getAirdrop(param.blockchain, param.generalAirdropRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/get-wallet-balance\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the balance of a wallet in the native blockchain currency (e.g., ETH, SOL) or any token (e.g., ERC-20, NFTs, SPL, etc.).  To get the balance of a specific token, supply the `token_blockchain_identifier` of the token.   You can also use this endpoint to see whether or not a person owns an NFT. Just supply the `token_blockchain_identifier` of the NFT. A balance of \"1\" means the person owns the NFT, and a balance of \"0\" means the person does not own the NFT.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get wallet's balance of X
     * @param param the request object
     */
    public getBalance(param: WalletApiGetBalanceRequest, options?: Configuration): Promise<GeneralBalanceResponse> {
        return this.api.getBalance(param.blockchain, param.generalBalanceRequest,  options).toPromise();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/transfer-crypto-token-or-nft\" target=\"_blank\">See transfer ETH/SOL/crypto example (Python, JavaScript)</a>.  <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/transfer-crypto-token-or-nft\" target=\"_blank\">See transfer NFT/token example (Python, JavaScript)</a>.  This is a powerful function. It might be slightly confusing because there are several optional parameters, so take some time to review it.   This function can send - The native currency of the selected blockchain (e.g., SOL, ETH, BNB, etc.) - A token (e.g., an SPL token, ERC-20 token, etc.) - An NFT  You can sign and submit the transaction for confirmation; and you can select to simply return the compiled transaction so that you can submit it to the user for signing (e.g., via Phantom or Metamask; no private keys required in this case).  If you're transferring an NFT or a token, supply its respective `token_blockchain_identifier`.  SENDER: Note that the wallet information is used to authorize the sending of the tokens and identifies the source of the tokens. If `return_compiled_transaction = false`, we sign and submit the transaction (`wallet` is required in this case; do not provide a value for `sender_blockchain_identifier`). If `return_compiled_transaction = true`, we compile the transaction (`sender_blockchain_identifier` is required in this case; do not provide `wallet`).  RECIPIENT: `recipient_blockchain_identifier` identifies the receiver. This is entirely separate from the information used for the SENDER above. So, in this API call, there are two wallets involved, but only one (namely, the SENDER) is needed to authorize the transaction (if you want us to sign and submitting it).  FEE_PAYER (Solana only): The fee payer of the transaction defaults to `wallet` (or `sender_blockchain_identifier`). To set a different fee payer, provide a value for `fee_payer_wallet`.  `Cost: 2 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Transfer crypto, a token, or an NFT to another wallet
     * @param param the request object
     */
    public transfer(param: WalletApiTransferRequest, options?: Configuration): Promise<GeneralTransactionResponse> {
        return this.api.transfer(param.blockchain, param.generalTransferRequest,  options).toPromise();
    }

}
