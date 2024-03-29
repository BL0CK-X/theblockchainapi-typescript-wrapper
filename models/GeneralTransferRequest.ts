/**
 * The Blockchain API
 * # About  Our vision is to make it super easy to interact with the decentralized web. We want you to be able to do this in any coding language and do it easily and quickly.   You're a key part of our vision. We love feature requests! <a href=\"#section/Feature-Requests\">Make one!</a>  # How to Use the API  To use the API, you simply need to create an API key pair.  Doing so takes less than a minute. Simply go to <a target=\"_blank\" href=\"https://dashboard.blockchainapi.com\">the dashboard</a>, create an account, and generate a key pair. You can now use this pair to make API requests. You must create your first pair via the dashboard.  # Feature Requests  Got a feature request? Submit it as an issue on <a target=\"_blank\" href=\"https://github.com/BL0CK-X/the-blockchain-api/issues/new/choose\">our GitHub repo</a> or [email us](mailto:info@blockchainapi.com).  # Contact  <figure>     <img          width=\"40px\"         height=\"40px\"          src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/phone.svg\"     />     <figcaption style=\"textAlign:center;\">Text / Call: +1 (415) 888 4745 </figcaption> </figure> <a href=\"mailto:info@blockchainapi.com\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/email.svg\"         />         <figcaption style=\"textAlign:center;\">Email us: info@blockchainapi.com</figcaption>     </figure> </a> <a href=\"https://discord.gg/d49yzrZRAF\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/discord.svg\"         />         <figcaption style=\"textAlign:center;\">Join our Discord</figcaption>     </figure> </a> <a href=\"https://twitter.com/BlockchainAP1\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/twitter.svg\"         />          <figcaption style=\"textAlign:center;\">Follow us on Twitter</figcaption>     </figure> </a> <a href=\"https://github.com/BL0CK-X/the-blockchain-api\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/github.svg\"         />         <figcaption style=\"textAlign:center;\">Star us on Github</figcaption>     </figure> </a>  # Security  Common dogma is to never give out your seed phrase. We agree. It's a matter of security, and anyone who has your seed phrase can irreversibly empty your wallet.   <b>When using an API endpoint that requires a seed phrase, we highly recommend that users use or create a wallet that they do not use as their primary wallet.</b>   How you make this work depends on what you're doing. If you're minting an NFT for example, we recommend creating a new wallet and then transferring just enough SOL to that wallet to mint the NFT. This is possible on Solana because such transactions cost less than a penny. We will have more tutorials in the future that make it easier for you to be secure when using our API.  We have easy-to-use endpoints for <a href=\"#tag/Solana-Wallet/paths/~1solana~1wallet~1secret_recovery_phrase/post\">creating a new seed phrase</a> and then <a href=\"#tag/Solana-Wallet/paths/~1solana~1wallet~1public_key/post\">deriving a public key</a> to enable you to transfer to that new wallet.  Let's have a constructive dialog about this. Feel free to <a href=\"#section/Contact\">contact us</a>. I made a video discussing this matter <a target=\"_blank\" href=\"https://youtu.be/m9unUb8Z9qU\">here</a>.  Note: We have had a couple of individuals harrass and threaten us. These individuals did <b>not</b> try our API or speak to anyone who has used it. They simply saw that we require a seed phrase for certain endpoints and figured that the proper response was to attack us. (I explain why we do <a target=\"_blank\" href=\"https://youtu.be/m9unUb8Z9qU\">here</a>.) Such harrassment and threats are not only harmful, but they are also illegal, and we will report offenders. Do not harrass us. Rather, feel free to discuss your concerns with us and we will be more than happy to work with you to come up with a solution.  # Pricing  <b>Each user receives 50,000 free credits each month.</b> Each endpoint costs a certain amount credits. Scroll below to any endpoint (i.e., function) to see how much each endpoint costs. (Or CMD+F `Cost: 0 Credit`, for example)  You can learn more about our pricing <a href=\"https://dashboard.blockchainapi.com/billing\" target=\"_blank\">here</a>.   We frequently do custom plans. If our pricing doesn't work for you, <a href=\"#section/Contact\">contact us</a>.  If you have questions, concerns, feedback, or ideas, <a href=\"#section/Contact\">contact us</a>.  # SDKs / API Wrappers  We have examples using both our <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples\" target=\"_blank\">Python wrapper and our JavaScript wrapper here</a>.  We have built a custom <a href=\"https://github.com/BL0CK-X/the-blockchain-api-python-wrapper\" target=\"_blank\">Python wrapper</a>.  `pip install theblockchainapi`  We also have published a <a href=\"https://github.com/BL0CK-X/theblockchainapi-javascript-wrapper\" target=\"_blank\">JavaScript Wrapper</a>.  `npm install theblockchainapi`  We also have auto-generated wrappers for the following languages: - <a href=\"https://github.com/BL0CK-X/theblockchainapi-go-wrapper\" target = \"_blank\">Go</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-java-wrapper\" target = \"_blank\">Java</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-kotlin-wrapper\" target = \"_blank\">Kotlin</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-php-wrapper\" target = \"_blank\">PHP</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-swift-wrapper\" target = \"_blank\">Swift5</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-typescript-wrapper\" target = \"_blank\">TypeScript</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-csharp-wrapper\" target = \"_blank\">C#</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-dart-wrapper\" target = \"_blank\">Dart</a>  If you would like a different language as well, submit an issue <a href=\"https://github.com/BL0CK-X/theblockchainapi-wrappers/issues/new\" target=\"_blank\">here</a>.  If you run into any bugs with the wrappers, submit an issue <a href=\"https://github.com/BL0CK-X/theblockchainapi-wrappers/issues/new\" target=\"_blank\">here</a>.
 *
 * OpenAPI spec version: null
 * Contact: info@blockchainapi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { GeneralFeePayerWallet } from './GeneralFeePayerWallet';
import { GeneralWallet } from './GeneralWallet';
import { HttpFile } from '../http/http';

export class GeneralTransferRequest {
    /**
    * The blockchain identifier of the recipient to whom you want to send a token or NFT.  On Ethereum, this is the hex public address of the recipient (e.g., `0x150865ca659204a9a0cd0da00296c6b5db441172`)  On Solana, this is the public key of the recipient (e.g., `EW3nXn7X4NTWFKWaJgxKrFNoTSkop1cBUVHA21zrfF6u`). 
    */
    'recipientBlockchainIdentifier': string;
    'wallet'?: GeneralWallet;
    /**
    * The `token_blockchain_identifier` identifies the token you wish to transfer.  - If you're transferring a native blockchain currency (e.g., SOL, ETH, BNB), then simply do not supply this value. - If you're transfering an NFT, then supply the token address of the NFT. On Solana, this is the `mint_address` or `mint` (the address of the mint). - If you're transfering a token, supply the token address. For Solana, you can find on this on the Solana Explorer (e.g., see `SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt` for <a href=\"https://explorer.solana.com/address/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt\" target=\"_blank\">Serum Token</a>) for the `token_address`.  Examples: - Ethereum: `0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48` - Solana: `CK1LHEANTu7RFqN3XMzo2AnZhyus2W1vue1njrxLEM1d`
    */
    'tokenBlockchainIdentifier'?: string;
    /**
    * The network of the blockchain you selected  - Solana: `devnet`, `mainnet-beta` - Ethereum: `ropsten`, `mainnet`  Defaults when not provided (not applicable to path parameters): - Solana: `devnet` - Ethereum: `ropsten`
    */
    'network'?: string;
    /**
    * This value must be a string. What you provide here depends on if you are sending an NFT, an SPL token, or SOL.  - Native Currency (e.g., SOL, ETH, BNB): Supply this value denominated in the native currency (e.g., in SOL (but not in Lamports), or in ETH (but not in Wei)) in a string format. This does not need to be an integer. For example, if you want to send 0.0005 SOL, then `amount = \"0.0005\"`. If you want to send 0.0005 ETH, then `amount = \"0.0005\"`. - NFT: This must be `1`. - Token: This must be an integer in string format. To convert from what you see on a wallet UI (e.g., 1 ATLAS, 1 USDC) to an integer value, you have to multiply that value by 10^<i>x</i> where <i>x</i> is the number of decimals. For example, to transfer 0.2 USDC, if USDC uses 6 decimals, then the amount is 0.2 * 10^6 = 200000.    - For Solana, you can get the number of decimals for a given SPL token <a href=\"#operation/solanaGetSPLToken\">here</a>. We are working on analogues of this endpoint for other blockchains.
    */
    'amount'?: string;
    /**
    * - If `false`, we sign and submit the transaction (`wallet` is required in this case; do not provide a value for `sender_blockchain_identifier`).  - If `true`, we compile the transaction (either `wallet` or `sender_blockchain_identifier` is required in this case; do not provide both).   
    */
    'returnCompiledTransaction'?: boolean;
    /**
    * To understand the purpose of `sender_blockchain_identifier` first note the following: There are two ways you can complete a transfer transaction:  - (1) we complete it for you with your `wallet` information or  - (2) we return the raw instruction data that you can sign and submit yourself (no private keys required).  When you provide your `wallet` authentication, we are able to determine your wallet's blockchain identifier (public key or address) which is the sender public key of the transaction.  When you are not providing your `wallet` as authentication, we still need the `sender_blockchain_identifier` to be able to return the compiled transaction. Thus, you provide `sender_blockchain_identifier` if and only if you are not providing `wallet` authentication information **and** you are returning a compiled transaction.  You will receive an error if you provide both `wallet` and `sender_blockchain_identifier`. You will receive an error if you provide neither `wallet` nor `sender_blockchain_identifier`.
    */
    'senderBlockchainIdentifier'?: string;
    'feePayerWallet'?: GeneralFeePayerWallet;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recipientBlockchainIdentifier",
            "baseName": "recipient_blockchain_identifier",
            "type": "string",
            "format": ""
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "GeneralWallet",
            "format": ""
        },
        {
            "name": "tokenBlockchainIdentifier",
            "baseName": "token_blockchain_identifier",
            "type": "string",
            "format": ""
        },
        {
            "name": "network",
            "baseName": "network",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "returnCompiledTransaction",
            "baseName": "return_compiled_transaction",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "senderBlockchainIdentifier",
            "baseName": "sender_blockchain_identifier",
            "type": "string",
            "format": ""
        },
        {
            "name": "feePayerWallet",
            "baseName": "fee_payer_wallet",
            "type": "GeneralFeePayerWallet",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GeneralTransferRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

