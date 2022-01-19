import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { FileApiRequestFactory, FileApiResponseProcessor} from "../apis/FileApi";
export class ObservableFileApi {
    private requestFactory: FileApiRequestFactory;
    private responseProcessor: FileApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FileApiRequestFactory,
        responseProcessor?: FileApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FileApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FileApiResponseProcessor();
    }

    /**
     * Easily upload a file to any of IPFS, Arweave, and Filecoin. Not publicly available. Please sign up for <a href=\"https://forms.gle/N4KSqcptpSrHQ1427\" target=\"_blank\">the waitlist</a>.
     * Upload a file
     */
    public uploadFile(_options?: Configuration): Observable<GetFileResponse> {
        const requestContextPromise = this.requestFactory.uploadFile(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadFile(rsp)));
            }));
    }

}

import { SolanaAccountApiRequestFactory, SolanaAccountApiResponseProcessor} from "../apis/SolanaAccountApi";
export class ObservableSolanaAccountApi {
    private requestFactory: SolanaAccountApiRequestFactory;
    private responseProcessor: SolanaAccountApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SolanaAccountApiRequestFactory,
        responseProcessor?: SolanaAccountApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SolanaAccountApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SolanaAccountApiResponseProcessor();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-account/get-account\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the details of an account on Solana. Learn more about accounts <a href=\"https://docs.solana.com/developing/programming-model/accounts\" target=\"_blank\">here</a>.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the details of an account on Solana
     * @param network The network ID (devnet, mainnet-beta)
     * @param publicKey The public key of the account
     */
    public solanaGetAccount(network: string, publicKey: string, _options?: Configuration): Observable<Account> {
        const requestContextPromise = this.requestFactory.solanaGetAccount(network, publicKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaGetAccount(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-account/get-is-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Determine whether or not a public key address corresponds to a candy machine ID or candy machine configuration.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get if account is candy machine
     * @param network The network ID (devnet, mainnet-beta)
     * @param publicKey The public key of the account
     */
    public solanaGetAccountIsCandyMachine(network: string, publicKey: string, _options?: Configuration): Observable<AccountIsCandyMachine> {
        const requestContextPromise = this.requestFactory.solanaGetAccountIsCandyMachine(network, publicKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaGetAccountIsCandyMachine(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-account/get-is-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Determine whether or not a public key is an NFT `mint address`  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get if account is NFT
     * @param network The network ID (devnet, mainnet-beta)
     * @param publicKey The public key of the account
     */
    public solanaGetAccountIsNFT(network: string, publicKey: string, _options?: Configuration): Observable<AccountIsNFT> {
        const requestContextPromise = this.requestFactory.solanaGetAccountIsNFT(network, publicKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaGetAccountIsNFT(rsp)));
            }));
    }

}

import { SolanaCandyMachineApiRequestFactory, SolanaCandyMachineApiResponseProcessor} from "../apis/SolanaCandyMachineApi";
export class ObservableSolanaCandyMachineApi {
    private requestFactory: SolanaCandyMachineApiRequestFactory;
    private responseProcessor: SolanaCandyMachineApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SolanaCandyMachineApiRequestFactory,
        responseProcessor?: SolanaCandyMachineApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SolanaCandyMachineApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SolanaCandyMachineApiResponseProcessor();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/create-test-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.   Use this endpoint to create a test candy machine so that you can test your minting bot.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Create a test CM
     * @param createTestCandyMachineRequest 
     */
    public solanaCreateTestCandyMachine(createTestCandyMachineRequest?: CreateTestCandyMachineRequest, _options?: Configuration): Observable<CreateTestCandyMachineResponse> {
        const requestContextPromise = this.requestFactory.solanaCreateTestCandyMachine(createTestCandyMachineRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaCreateTestCandyMachine(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-all-nfts\" target=\"_blank\"> See examples (Python, JavaScript)</a>.  Use this endpoint to get the list of all NFTs (minted and unminted) from a Solana Candy Machine.  This works for `v1` and `v2` candy machines.   *However*, for `v2` only the value for `all_nfts` is provided. To determine which are minted and unminted follow this example.  You do not need to specify `v1` or `v2` for this endpoint as it will automatically determine it from the candy machine ID.  See example for how to get the list of NFT hashes <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-hash-table\" target=\"_blank\">here</a>.    `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get CM's NFTs  
     * @param network The network ID
     * @param candyMachineId The ID of the candy machine
     */
    public solanaGetAllNFTsFromCandyMachine(network: 'devnet' | 'mainnet-beta', candyMachineId: string, _options?: Configuration): Observable<GetAllNFTsResponse> {
        const requestContextPromise = this.requestFactory.solanaGetAllNFTsFromCandyMachine(network, candyMachineId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaGetAllNFTsFromCandyMachine(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-metadata\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get metadata about a Metaplex candy machine. This includes the goLiveDate, itemsAvailable, and itemsRedeemed. To see what is included, expand the green successful response below.  NOTE: Supply exactly one of `candy_machine_id`, `config_address`, or `uuid`. If you provide more than one, you will receive a `400` error.   `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get a CM's metadata 
     * @param getCandyMetadataRequest 
     */
    public solanaGetCandyMachineMetadata(getCandyMetadataRequest?: GetCandyMetadataRequest, _options?: Configuration): Observable<GetCandyMetadataResponse> {
        const requestContextPromise = this.requestFactory.solanaGetCandyMachineMetadata(getCandyMetadataRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaGetCandyMachineMetadata(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/list-all-candy-machines\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can list all candy machines published to Solana mainnet.  We update this data every 15 minutes.  The output is a list of config addresses, currently about 17000 in length.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * List all CMs
     */
    public solanaListAllCandyMachines(_options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.solanaListAllCandyMachines(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaListAllCandyMachines(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/mint-from-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to mint an NFT from a metaplex candy machine as soon as it drops.  This only works for `v1` and `v2` candy machines, and does not work for candy machines of any other type such as Magic Eden candy machines.  In order to achieve speed, this endpoint sends the transaction without checking whether or not it confirmed. It could still fail, for example, because the candy machine ran out of available mints. You should check the status of the transaction using our <a href=\"#operation/solanaGetTransaction\">getTransaction</a> endpoint. <a href=\"https://gist.github.com/joshwolff1/298e8251e43ff9b4815028683b1ca17d\" target=\"_blank\">Here's an example</a> of how to do this.  Mint transactions for candy machines that have capatcha/Civic enabled will fail. There is a gatekeeper functionality where you must manually verify through Civic and captcha in order to mint from a candy machine. In this functionality, Civic signs the transaction. Therefore, if the gatekeeper functionality is enabled, our “Mint from candy machine” endpoint will fail because it is missing a signer. If it is not enabled, then our “Mint from candy machine” endpoint will succeed. One caveat is the attribute “expireOnUse”. If this is True, then you have to solve a captcha each time. In this case, the “Mint from candy machine” endpoint will fail. If this is False, then your first verification is sufficient for further mints. In which case, after verifying manually the first time, you can use our endpoint thereafter.   You can check if the gatekeeper functionality is enabled with this <a href=\"#operation/solanaGetCandyMachineMetadata\">endpoint</a>.   `Cost: 8 Credits`  Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)  (You are able to try on the `Free` plan as well, until you run out of credits.)
     * Mint from a CM
     * @param mintNFTRequest 
     */
    public solanaMintFromCandyMachine(mintNFTRequest?: MintNFTRequest, _options?: Configuration): Observable<MintNFTResponse> {
        const requestContextPromise = this.requestFactory.solanaMintFromCandyMachine(mintNFTRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaMintFromCandyMachine(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/search-candy-machines\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can search candy machines by their symbol, name of NFTs, uuid, configuration address, and update authority.  The output is a list of config addresses.  You can also provide multiple search clauses, such as the update authority (`update_authority=\"G17UmNGnMJ851x3M1JXocgpft1afcYedjPuFpo1ohhCk\"`) and symbol begins with \"Sol\" (`symbol=\"Sol\", symbol_search_method='begins_with'`).  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Search CMs
     * @param candyMachineSearchRequest 
     */
    public solanaSearchCandyMachines(candyMachineSearchRequest?: CandyMachineSearchRequest, _options?: Configuration): Observable<Array<string>> {
        const requestContextPromise = this.requestFactory.solanaSearchCandyMachines(candyMachineSearchRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaSearchCandyMachines(rsp)));
            }));
    }

}

import { SolanaNFTApiRequestFactory, SolanaNFTApiResponseProcessor} from "../apis/SolanaNFTApi";
export class ObservableSolanaNFTApi {
    private requestFactory: SolanaNFTApiRequestFactory;
    private responseProcessor: SolanaNFTApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SolanaNFTApiRequestFactory,
        responseProcessor?: SolanaNFTApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SolanaNFTApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SolanaNFTApiResponseProcessor();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/create-an-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Create a Metaplex NFT on Solana.   Read more on this <a href=\"https://blog.blockchainapi.com/2021/11/16/a-note-on-nfts.html\" target=\"_blank\">here</a>.  Note: Please see <a href=\"https://blog.blockchainapi.com/2022/01/18/how-to-format-off-chain-nft-metadata.html\" target=\"_blank\">this article</a> to learn more about what `nft_upload_method` means and how storing the metadata of an NFT works.  If you're using `nft_upload_method = \"LINK\"`, then to add attributes to the NFT or an image, add them to a JSON file and upload that to Arweave/IPFS/Filecoin. See the JSON format <a href=\"https://blog.blockchainapi.com/2022/01/18/how-to-format-off-chain-nft-metadata.html\">here</a>.  Then supply the link to the JSON file in `nft_url`.   NOTE: Don't use `nft_metadata`. Values provided here do not do anything at the moment. We are fixing this soon.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Create an NFT on Solana
     * @param nFTMintRequest 
     */
    public solanaCreateNFT(nFTMintRequest?: NFTMintRequest, _options?: Configuration): Observable<NFT> {
        const requestContextPromise = this.requestFactory.solanaCreateNFT(nFTMintRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaCreateNFT(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-metadata\" target=\"_blank\">See examples (Python, JavaScript)</a>.       Get the metadata of an NFT.  If you're looking for metadata such as attributes and others, you can retrieve them from the link in the URI field of the NFT metadata returned. See the example on the right. The URI is an Arweave URL. That contains the attributes and other information about the NFT. That URL is stored on the Solana blockchain.  `Cost: 1 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get an NFT's metadata
     * @param network The network ID
     * @param mintAddress The mint address of the NFT
     */
    public solanaGetNFT(network: 'devnet' | 'mainnet-beta', mintAddress: string, _options?: Configuration): Observable<NFT> {
        const requestContextPromise = this.requestFactory.solanaGetNFT(network, mintAddress, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaGetNFT(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-mint-fee\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the estimated fee for minting an NFT on the Solana blockchain using the Metaplex protocol.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the NFT mint fee
     */
    public solanaGetNFTMintFee(_options?: Configuration): Observable<NFTMintFee> {
        const requestContextPromise = this.requestFactory.solanaGetNFTMintFee(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaGetNFTMintFee(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-owner\" target=\"_blank\">See examples (Python, JavaScript)</a>.       Get the owner of an NFT. This returns the public key of the wallet that owns the associated token account that owns the NFT.  If you want to get the associated token account that literally owns the NFT, derive the associated token account address from the public key returned and the NFT mint address using <a href=\"#operation/solanaDeriveAssociatedTokenAccountAddress\">this endpoint</a>.  `Cost: 1 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get owner of an NFT
     * @param network The network ID
     * @param mintAddress The mint address of the NFT
     */
    public solanaGetNFTOwner(network: 'devnet' | 'mainnet-beta', mintAddress: string, _options?: Configuration): Observable<NFTOwnerResponse> {
        const requestContextPromise = this.requestFactory.solanaGetNFTOwner(network, mintAddress, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaGetNFTOwner(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-candy-machine-id\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get the candy machine ID from where the NFT came, if any. NFTs can also be minted without a candy machine.  It's also possible that we return \"Not Found\" when the NFT actually did come from a version of a candy machine. We check for the most popular versions of candy machine, but it is possible that someone creates their own candy machine version and mints NFTs from it.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the ID of the candy machine of an NFT 
     * @param getCandyMachineIDRequest 
     */
    public solanaGetNFTsCandyMachineId(getCandyMachineIDRequest?: GetCandyMachineIDRequest, _options?: Configuration): Observable<GetCandyMachineIDResponse> {
        const requestContextPromise = this.requestFactory.solanaGetNFTsCandyMachineId(getCandyMachineIDRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaGetNFTsCandyMachineId(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/search-nfts\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can search for NFTs by their symbol, name of NFTs, uuid, configuration address, and update authority.  The output is a list of NFTs that match your query.  You can also provide multiple search clauses, such as the update authority (`update_authority=\"G17UmNGnMJ851x3M1JXocgpft1afcYedjPuFpo1ohhCk\"`) and symbol begins with \"Sol\" (`symbol=\"Sol\", symbol_search_method='begins_with'`).  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Search NFTs on Solana
     * @param nFTSearchRequest 
     */
    public solanaSearchNFTs(nFTSearchRequest?: NFTSearchRequest, _options?: Configuration): Observable<Array<NFTSearchResponse>> {
        const requestContextPromise = this.requestFactory.solanaSearchNFTs(nFTSearchRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaSearchNFTs(rsp)));
            }));
    }

}

import { SolanaNFTMarketplacesApiRequestFactory, SolanaNFTMarketplacesApiResponseProcessor} from "../apis/SolanaNFTMarketplacesApi";
export class ObservableSolanaNFTMarketplacesApi {
    private requestFactory: SolanaNFTMarketplacesApiRequestFactory;
    private responseProcessor: SolanaNFTMarketplacesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SolanaNFTMarketplacesApiRequestFactory,
        responseProcessor?: SolanaNFTMarketplacesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SolanaNFTMarketplacesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SolanaNFTMarketplacesApiResponseProcessor();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/buy-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Buy an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  **We are not responsible for any SOL or NFT lost.**  `Cost: 25 Credits`, `Cost: 3 Credits on Devnet`  Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)  (You are able to try on the `Free` plan as well, until you run out of credits.)
     * Buy
     * @param network The network ID
     * @param exchange The NFT exchange to interact with
     * @param mintAddress The mint address of the NFT you want to buy
     * @param buyRequest 
     */
    public solanaBuyNFT(network: 'devnet' | 'mainnet-beta', exchange: 'solsea' | 'magic-eden', mintAddress: string, buyRequest?: BuyRequest, _options?: Configuration): Observable<BuyResponse> {
        const requestContextPromise = this.requestFactory.solanaBuyNFT(network, exchange, mintAddress, buyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaBuyNFT(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/delist-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Delist an NFT from a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  **We are not responsible for any SOL or NFT lost.**  `Cost: 8 Credits`, `Cost: 3 Credits on Devnet`  Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)  (You are able to try on the `Free` plan as well, until you run out of credits.)
     * Delist
     * @param network The network ID
     * @param exchange The NFT exchange to interact with
     * @param mintAddress The mint address of the NFT you want to buy
     * @param delistRequest 
     */
    public solanaDelistNFT(network: 'devnet' | 'mainnet-beta', exchange: 'solsea' | 'magic-eden', mintAddress: string, delistRequest?: DelistRequest, _options?: Configuration): Observable<DelistResponse> {
        const requestContextPromise = this.requestFactory.solanaDelistNFT(network, exchange, mintAddress, delistRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaDelistNFT(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/get-nft-listing\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get the Marketplace listing of a Solana NFT.  Currently checks for the following Solana NFT martketplaces: SolSea, Magic Eden  `Cost: 1 Credits`, (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get NFT Listing
     * @param network The network ID
     * @param mintAddress The mint address of the NFT you want to buy
     */
    public solanaGetNFTListing(network: 'devnet' | 'mainnet-beta', mintAddress: string, _options?: Configuration): Observable<GetNFTListingResponse> {
        const requestContextPromise = this.requestFactory.solanaGetNFTListing(network, mintAddress, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaGetNFTListing(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/list-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  List an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  **We are not responsible for any SOL or NFT lost.**  `Cost: 12 Credits`, `Cost: 3 Credits on Devnet`  Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)  (You are able to try on the `Free` plan as well, until you run out of credits.)
     * List
     * @param network The network ID
     * @param exchange The NFT exchange to interact with
     * @param mintAddress The mint address of the NFT you want to buy
     * @param listRequest 
     */
    public solanaListNFT(network: 'devnet' | 'mainnet-beta', exchange: 'solsea' | 'magic-eden', mintAddress: string, listRequest?: ListRequest, _options?: Configuration): Observable<ListResponse> {
        const requestContextPromise = this.requestFactory.solanaListNFT(network, exchange, mintAddress, listRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaListNFT(rsp)));
            }));
    }

}

import { SolanaSPLTokenApiRequestFactory, SolanaSPLTokenApiResponseProcessor} from "../apis/SolanaSPLTokenApi";
export class ObservableSolanaSPLTokenApi {
    private requestFactory: SolanaSPLTokenApiRequestFactory;
    private responseProcessor: SolanaSPLTokenApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SolanaSPLTokenApiRequestFactory,
        responseProcessor?: SolanaSPLTokenApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SolanaSPLTokenApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SolanaSPLTokenApiResponseProcessor();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-spl-token/get-spl-token\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Retrieves basic information about an SPL token given its `mint_address`.  You can see the mint addresses of popular SPL tokens <a href=\"https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/solana.tokenlist.json\" target=\"_blank\">here</a>.  Some example mint addresses of SPL tokens: - USDC: EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v - Mango: MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac - Serum: SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt - Raydium: 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R - wSOL: So11111111111111111111111111111111111111112 - ATLAS: ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get SPL token metadata
     * @param publicKey The public key of the token
     * @param network The network ID (devnet, mainnet-beta)
     */
    public solanaGetSPLToken(publicKey: string, network: string, _options?: Configuration): Observable<GetSPLTokenResponse> {
        const requestContextPromise = this.requestFactory.solanaGetSPLToken(publicKey, network, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaGetSPLToken(rsp)));
            }));
    }

}

import { SolanaTransactionApiRequestFactory, SolanaTransactionApiResponseProcessor} from "../apis/SolanaTransactionApi";
export class ObservableSolanaTransactionApi {
    private requestFactory: SolanaTransactionApiRequestFactory;
    private responseProcessor: SolanaTransactionApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SolanaTransactionApiRequestFactory,
        responseProcessor?: SolanaTransactionApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SolanaTransactionApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SolanaTransactionApiResponseProcessor();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-transaction/get-transaction\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the details of a transaction made on Solana.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get the details of a transaction made on Solana
     * @param network The network ID (devnet, mainnet-beta)
     * @param txSignature The transaction signature of the transaction
     */
    public solanaGetTransaction(network: string, txSignature: string, _options?: Configuration): Observable<Transaction> {
        const requestContextPromise = this.requestFactory.solanaGetTransaction(network, txSignature, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaGetTransaction(rsp)));
            }));
    }

}

import { SolanaWalletApiRequestFactory, SolanaWalletApiResponseProcessor} from "../apis/SolanaWalletApi";
export class ObservableSolanaWalletApi {
    private requestFactory: SolanaWalletApiRequestFactory;
    private responseProcessor: SolanaWalletApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SolanaWalletApiRequestFactory,
        responseProcessor?: SolanaWalletApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SolanaWalletApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SolanaWalletApiResponseProcessor();
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/derive-associated-token-account-address\" target=\"_blank\">See example (Python, JavaScript)</a>.      *Each wallet can own tokens, but in Solana, each token is actually held by an <a href=\"https://spl.solana.com/associated-token-account\" target=\"_blank\">associated token account</a> (ATA), which is an account specific for a token owned by the wallet. When you transfer an SPL token, such as Serum, or transfer an NFT, you're transfering from an ATA you own to another person's ATA for that specific token. With this endpoint, you can derive an associated token address given a wallet and a token address.*  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Derive an associated token account address
     * @param publicKey The public key of the wallet
     * @param mintAddress The mint address of the token (either SPL or NFT)
     */
    public solanaDeriveAssociatedTokenAccountAddress(publicKey: string, mintAddress: string, _options?: Configuration): Observable<ATAResponse> {
        const requestContextPromise = this.requestFactory.solanaDeriveAssociatedTokenAccountAddress(publicKey, mintAddress, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaDeriveAssociatedTokenAccountAddress(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/derive-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Returns a private key array and a base58-encoded private key given wallet authentication.  A wallet is defined by a public key. A public key is derived from a combination of seed phrase, derivation path, and passphrase. Changing any *one* of these three will change the public key output.  *You can generate a unique public key with each combination of secret recovery phrase, passphrase, and derivation path. Thus, with a single secret recovery phrase, you can generate many public keys. If you are just starting, just supply the secret recovery phrase you generated with the Solana Wallet Secret Recovery Phrase endpoint.*  *If you are trying to get a public key that already exists (e.g., created in the Phantom wallet), make sure you use the correct derivation path and passphrase. To read more about that, see the descriptions of those parameters below.*  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Derive private key
     * @param getPublicKeyRequest 
     */
    public solanaDerivePrivateKey(getPublicKeyRequest: GetPublicKeyRequest, _options?: Configuration): Observable<GeneratePrivateKey> {
        const requestContextPromise = this.requestFactory.solanaDerivePrivateKey(getPublicKeyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaDerivePrivateKey(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/derive-public-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Returns a public key given wallet authentication.  A wallet is identified by a public key. A public key is derived from a combination of seed phrase, derivation path, and passphrase. Changing any *one* of these three will change the public key output.   It can also be derived from a private key.  *You can generate a unique public key with each combination of secret recovery phrase, passphrase, and derivation path; or from a private key. Thus, with a single secret recovery phrase, you can generate many public keys; however, with a private key, you can only generate one public key. If you are just starting, generate a <a href=\"#operation/solanaGenerateSecretRecoveryPhrase\">secret recovery phrase</a> or <a href=\"#operation/solanaGeneratePrivateKey\">private key</a>.  *If you are trying to get a public key that already exists (e.g., created in the Phantom wallet), make sure you use the correct derivation path and passphrase; or just use the private key. To read more about that, see the descriptions of those parameters below.*  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Derive public key
     * @param getPublicKeyRequest 
     */
    public solanaDerivePublicKey(getPublicKeyRequest: GetPublicKeyRequest, _options?: Configuration): Observable<PublicKey> {
        const requestContextPromise = this.requestFactory.solanaDerivePublicKey(getPublicKeyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaDerivePublicKey(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/generate-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a private key for a Solana wallet.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Generate private key
     */
    public solanaGeneratePrivateKey(_options?: Configuration): Observable<GeneratePrivateKey> {
        const requestContextPromise = this.requestFactory.solanaGeneratePrivateKey(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaGeneratePrivateKey(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/generate-secret-phrase\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a secret recovery phrase for a Solana wallet.   `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Generate secret phrase
     */
    public solanaGenerateSecretRecoveryPhrase(_options?: Configuration): Observable<SecretPhrase> {
        const requestContextPromise = this.requestFactory.solanaGenerateSecretRecoveryPhrase(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaGenerateSecretRecoveryPhrase(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-airdrop\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Use this endpoint to get an airdrop of SOL on the devnet (not real SOL). Amount of 0.015,  which is the minimum amount of SOL you need to mint a Metaplex NFT and then transfer it to another wallet.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get an airdrop on devnet
     * @param airdropRequest 
     */
    public solanaGetAirdrop(airdropRequest?: AirdropRequest, _options?: Configuration): Observable<TransferResponse> {
        const requestContextPromise = this.requestFactory.solanaGetAirdrop(airdropRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaGetAirdrop(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-wallet-balance\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the balance of a wallet in SOL or any SPL token.  To get the balance of an SPL token, supply the `mint_address` of the SPL token. The list of SPL tokens can be viewed <a href=\"https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/solana.tokenlist.json\" target=\"_blank\">here</a>.  You can also use this endpoint to see whether or not a person owns an NFT. Just supply the `mint_address` of the NFT. A balance of \"1\" means the person owns the NFT, and a balance of \"0\" means the person does not own the NFT. This works in most cases, but we are aware of one edge case where a balance of \"0\" will show up for a person who is actually the owner of the NFT. We just recommend using the <a href=\"#operation/solanaGetNFTOwner\">getNFTOwner</a> endpoint and comparing that output to the expected address.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get wallet's balance in SOL or any SPL
     * @param balanceRequest 
     */
    public solanaGetBalance(balanceRequest?: BalanceRequest, _options?: Configuration): Observable<BalanceResponse> {
        const requestContextPromise = this.requestFactory.solanaGetBalance(balanceRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaGetBalance(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-wallet-nfts\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the NFTs that belong to a given public key address  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get address's NFTs
     * @param network The network ID (devnet, mainnet-beta)
     * @param publicKey The public key of the account whose list of owned NFTs you want to get
     */
    public solanaGetNFTsBelongingToWallet(network: string, publicKey: string, _options?: Configuration): Observable<ListNFTsResponse> {
        const requestContextPromise = this.requestFactory.solanaGetNFTsBelongingToWallet(network, publicKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaGetNFTsBelongingToWallet(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-wallet-token-holdings\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the token holdings of a given public key address  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get address's tokens and respective balances
     * @param network The network ID (devnet, mainnet-beta)
     * @param publicKey The public key of the account whose list of owned NFTs you want to get
     * @param includeNfts Whether or not to include NFTs in the response
     * @param includeZeroBalanceHoldings Whether or not to include holdings that have zero balance. This indicates that the wallet held this token or NFT in the past, but no longer holds it.
     */
    public solanaGetTokensBelongingToWallet(network: string, publicKey: string, includeNfts?: boolean, includeZeroBalanceHoldings?: boolean, _options?: Configuration): Observable<Array<any>> {
        const requestContextPromise = this.requestFactory.solanaGetTokensBelongingToWallet(network, publicKey, includeNfts, includeZeroBalanceHoldings, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaGetTokensBelongingToWallet(rsp)));
            }));
    }

    /**
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/transfer-sol\" target=\"_blank\">See transfer SOL example (Python, JavaScript)</a>.  <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/transfer-nft\" target=\"_blank\">See transfer NFT example (can also be used for SPL token) (Python, JavaScript)</a>.  Transfer SOL, a token or an NFT to another address. If you're transferring an NFT, supply the `mint` (the address of the mint) for the `token_address`.  SENDER: Note that the wallet information (`secret_recovery_phrase`, `passphrase`, `derivation_path`) is used to authorize the sending of the tokens and identifies the source of the tokens.   RECEIVER: `recipient_address` identifies the receiver. This is entirely separate from the information used for the SENDER above. So, in this API call, there are two wallets involved, but only one (namely, the SENDER) is needed to authorize the transaction.  If you're transfering a token, supply the token address found on the explorer (e.g., see `SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt` for <a href=\"https://explorer.solana.com/address/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt\" target=\"_blank\">Serum Token</a>) for the `token_address`. If you're transferring SOL, do not supply a value for `token_address`.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * Transfer SOL, a token, or an NFT to another address
     * @param transferRequest 
     */
    public solanaTransfer(transferRequest?: TransferRequest, _options?: Configuration): Observable<TransferResponse> {
        const requestContextPromise = this.requestFactory.solanaTransfer(transferRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.solanaTransfer(rsp)));
            }));
    }

}
