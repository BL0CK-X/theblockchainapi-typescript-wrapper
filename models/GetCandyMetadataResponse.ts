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

import { GetCandyMetadataResponseCreators } from './GetCandyMetadataResponseCreators';
import { HttpFile } from '../http/http';

export class GetCandyMetadataResponse {
    /**
    * The update authority of the candy machine
    */
    'authority'?: string;
    'bump'?: number;
    /**
    * The ID of the candy machine 
    */
    'candyMachineId'?: string;
    /**
    * The configuration public key address of the candy machine 
    */
    'configAddress'?: string;
    'creators'?: Array<GetCandyMetadataResponseCreators>;
    /**
    * The unix timestamp of the start date of the candy machine 
    */
    'goLiveDate'?: number;
    'isMutable'?: boolean;
    /**
    * The number of NFTs available for mint from the candy machine 
    */
    'itemsAvailable'?: number;
    /**
    * The number of NFTs minted already from the candy machine 
    */
    'itemsRedeemed'?: number;
    'maxNumberOfLines'?: number;
    'maxSupply'?: number;
    /**
    * The price in Lamports for minting an NFT from the candy machine. 1e9 Lamport  = 1 SOL 
    */
    'price'?: number;
    'retainAuthority'?: boolean;
    /**
    * The royalty the creators receive on each sale after the primary sale (the initial minting) (denominated in basis points (e.g., 75 basis points = 0.75%)) 
    */
    'sellerFeeBasisPoints'?: number;
    'symbol'?: string;
    'tokenMint'?: string;
    /**
    * The uuid of the candy machine
    */
    'uuid'?: string;
    /**
    * The public key address of the wallet that recevies the proceeds from NFT mints 
    */
    'wallet'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authority",
            "baseName": "authority",
            "type": "string",
            "format": ""
        },
        {
            "name": "bump",
            "baseName": "bump",
            "type": "number",
            "format": ""
        },
        {
            "name": "candyMachineId",
            "baseName": "candy_machine_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "configAddress",
            "baseName": "config_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "creators",
            "baseName": "creators",
            "type": "Array<GetCandyMetadataResponseCreators>",
            "format": ""
        },
        {
            "name": "goLiveDate",
            "baseName": "go_live_date",
            "type": "number",
            "format": ""
        },
        {
            "name": "isMutable",
            "baseName": "is_mutable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "itemsAvailable",
            "baseName": "items_available",
            "type": "number",
            "format": ""
        },
        {
            "name": "itemsRedeemed",
            "baseName": "items_redeemed",
            "type": "number",
            "format": ""
        },
        {
            "name": "maxNumberOfLines",
            "baseName": "max_number_of_lines",
            "type": "number",
            "format": ""
        },
        {
            "name": "maxSupply",
            "baseName": "max_supply",
            "type": "number",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": ""
        },
        {
            "name": "retainAuthority",
            "baseName": "retain_authority",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sellerFeeBasisPoints",
            "baseName": "seller_fee_basis_points",
            "type": "number",
            "format": ""
        },
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenMint",
            "baseName": "token_mint",
            "type": "string",
            "format": ""
        },
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetCandyMetadataResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

