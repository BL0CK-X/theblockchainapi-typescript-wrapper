# theblockchainapi.SolanaNFTApi

All URIs are relative to *https://api.blockchainapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**solanaCreateNFT**](SolanaNFTApi.md#solanaCreateNFT) | **POST** /solana/nft | Create an NFT on Solana
[**solanaGetNFT**](SolanaNFTApi.md#solanaGetNFT) | **GET** /solana/nft/{network}/{mint_address} | Get an NFT&#39;s metadata
[**solanaGetNFTMintFee**](SolanaNFTApi.md#solanaGetNFTMintFee) | **GET** /solana/nft/mint/fee | Get the NFT mint fee
[**solanaGetNFTOwner**](SolanaNFTApi.md#solanaGetNFTOwner) | **GET** /solana/nft/{network}/{mint_address}/owner | Get owner of an NFT
[**solanaGetNFTsCandyMachineId**](SolanaNFTApi.md#solanaGetNFTsCandyMachineId) | **POST** /solana/nft/candy_machine_id | Get the ID of the candy machine of an NFT 
[**solanaSearchNFTs**](SolanaNFTApi.md#solanaSearchNFTs) | **POST** /solana/nft/search | Search NFTs on Solana


# **solanaCreateNFT**
> NFT solanaCreateNFT()

<a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/create-an-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Create a Metaplex NFT on Solana.   Read more on this <a href=\"https://blog.blockchainapi.com/2021/11/16/a-note-on-nfts.html\" target=\"_blank\">here</a>.  Note: Please see <a href=\"https://blog.blockchainapi.com/2022/01/18/how-to-format-off-chain-nft-metadata.html\" target=\"_blank\">this article</a> to learn more about what `nft_upload_method` means and how storing the metadata of an NFT works.  If you're using `nft_upload_method = \"LINK\"`, then to add attributes to the NFT or an image, add them to a JSON file and upload that to Arweave/IPFS/Filecoin. See the JSON format <a href=\"https://blog.blockchainapi.com/2022/01/18/how-to-format-off-chain-nft-metadata.html\">here</a>.  Then supply the link to the JSON file in `nft_url`.   NOTE: Don't use `nft_metadata`. Values provided here do not do anything at the moment. We are fixing this soon.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaNFTApi(configuration);

let body:theblockchainapi.SolanaNFTApiSolanaCreateNFTRequest = {
  // NFTMintRequest (optional)
  nFTMintRequest: {
    wallet: null,
    nftName: "",
    nftSymbol: "",
    nftDescription: "",
    nftUrl: "",
    nftMetadata: "{}",
    nftUploadMethod: "S3",
    isMutable: true,
    isMasterEdition: true,
    sellerFeeBasisPoints: 0,
    creators: ["The Public Key Corresponding to The Seed Phrase, Path, and Passphrase Provided"],
    share: [100],
    mintToPublicKey: "The public key of the wallet provided",
    network: "devnet",
  },
};

apiInstance.solanaCreateNFT(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nFTMintRequest** | **NFTMintRequest**|  |


### Return type

**NFT**

### Authorization

[APIKeyID](README.md#APIKeyID), [APISecretKey](README.md#APISecretKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Bad request (check response message) |  -  |
**401** | Invalid API key pair in headers |  -  |
**402** | Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. |  -  |
**414** | URI too long (the data you provided was too large [e.g., the metadata provided was 500kb]) |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **solanaGetNFT**
> NFT solanaGetNFT()

<a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-metadata\" target=\"_blank\">See examples (Python, JavaScript)</a>.       Get the metadata of an NFT.  If you're looking for metadata such as attributes and others, you can retrieve them from the link in the URI field of the NFT metadata returned. See the example on the right. The URI is an Arweave URL. That contains the attributes and other information about the NFT. That URL is stored on the Solana blockchain.  `Cost: 1 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaNFTApi(configuration);

let body:theblockchainapi.SolanaNFTApiSolanaGetNFTRequest = {
  // 'devnet' | 'mainnet-beta' | The network ID
  network: "mainnet-beta",
  // string | The mint address of the NFT
  mintAddress: "EEr5yQpNXf7Bru6Rt5podx56HGW9CEehXqgRGh2wa71w",
};

apiInstance.solanaGetNFT(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | [**&#39;devnet&#39; | &#39;mainnet-beta&#39;**]**Array<&#39;devnet&#39; &#124; &#39;mainnet-beta&#39;>** | The network ID | defaults to undefined
 **mintAddress** | [**string**] | The mint address of the NFT | defaults to undefined


### Return type

**NFT**

### Authorization

[APIKeyID](README.md#APIKeyID), [APISecretKey](README.md#APISecretKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Bad request (check response message) |  -  |
**401** | Invalid API key pair in headers |  -  |
**402** | Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. |  -  |
**404** | The doesn&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **solanaGetNFTMintFee**
> NFTMintFee solanaGetNFTMintFee()

<a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-mint-fee\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the estimated fee for minting an NFT on the Solana blockchain using the Metaplex protocol.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaNFTApi(configuration);

let body:any = {};

apiInstance.solanaGetNFTMintFee(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**NFTMintFee**

### Authorization

[APIKeyID](README.md#APIKeyID), [APISecretKey](README.md#APISecretKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Invalid API key pair in headers |  -  |
**402** | Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **solanaGetNFTOwner**
> NFTOwnerResponse solanaGetNFTOwner()

<a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-owner\" target=\"_blank\">See examples (Python, JavaScript)</a>.       Get the owner of an NFT. This returns the public key of the wallet that owns the associated token account that owns the NFT.  If you want to get the associated token account that literally owns the NFT, derive the associated token account address from the public key returned and the NFT mint address using <a href=\"#operation/solanaDeriveAssociatedTokenAccountAddress\">this endpoint</a>.  `Cost: 1 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaNFTApi(configuration);

let body:theblockchainapi.SolanaNFTApiSolanaGetNFTOwnerRequest = {
  // 'devnet' | 'mainnet-beta' | The network ID
  network: "devnet",
  // string | The mint address of the NFT
  mintAddress: "4zH3Rwm1QXdfTSUqsYmeUBY4QqQmQEXJVbv4ErSK736Q",
};

apiInstance.solanaGetNFTOwner(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | [**&#39;devnet&#39; | &#39;mainnet-beta&#39;**]**Array<&#39;devnet&#39; &#124; &#39;mainnet-beta&#39;>** | The network ID | defaults to undefined
 **mintAddress** | [**string**] | The mint address of the NFT | defaults to undefined


### Return type

**NFTOwnerResponse**

### Authorization

[APIKeyID](README.md#APIKeyID), [APISecretKey](README.md#APISecretKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Bad request (check response message) |  -  |
**401** | Invalid API key pair in headers |  -  |
**402** | Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. |  -  |
**404** | The doesn&#39;t exist |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **solanaGetNFTsCandyMachineId**
> GetCandyMachineIDResponse solanaGetNFTsCandyMachineId()

<a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-candy-machine-id\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get the candy machine ID from where the NFT came, if any. NFTs can also be minted without a candy machine.  It's also possible that we return \"Not Found\" when the NFT actually did come from a version of a candy machine. We check for the most popular versions of candy machine, but it is possible that someone creates their own candy machine version and mints NFTs from it.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaNFTApi(configuration);

let body:theblockchainapi.SolanaNFTApiSolanaGetNFTsCandyMachineIdRequest = {
  // GetCandyMachineIDRequest (optional)
  getCandyMachineIDRequest: {
    mintAddress: "mintAddress_example",
    network: "devnet",
  },
};

apiInstance.solanaGetNFTsCandyMachineId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getCandyMachineIDRequest** | **GetCandyMachineIDRequest**|  |


### Return type

**GetCandyMachineIDResponse**

### Authorization

[APIKeyID](README.md#APIKeyID), [APISecretKey](README.md#APISecretKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Bad request (check response message) |  -  |
**401** | Invalid API key pair in headers |  -  |
**402** | Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **solanaSearchNFTs**
> Array<NFTSearchResponse> solanaSearchNFTs()

<a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/search-nfts\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can search for NFTs by their symbol, name of NFTs, uuid, configuration address, and update authority.  The output is a list of NFTs that match your query.  You can also provide multiple search clauses, such as the update authority (`update_authority=\"G17UmNGnMJ851x3M1JXocgpft1afcYedjPuFpo1ohhCk\"`) and symbol begins with \"Sol\" (`symbol=\"Sol\", symbol_search_method='begins_with'`).  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaNFTApi(configuration);

let body:theblockchainapi.SolanaNFTApiSolanaSearchNFTsRequest = {
  // NFTSearchRequest (optional)
  nFTSearchRequest: {
    updateAuthority: "updateAuthority_example",
    updateAuthoritySearchMethod: "exact_match",
    mintAddress: "mintAddress_example",
    mintAddressSearchMethod: "exact_match",
    name: "name_example",
    nameSearchMethod: "exact_match",
    uri: "uri_example",
    uriSearchMethod: "exact_match",
    symbol: "symbol_example",
    symbolSearchMethod: "exact_match",
    network: "devnet",
  },
};

apiInstance.solanaSearchNFTs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nFTSearchRequest** | **NFTSearchRequest**|  |


### Return type

**Array<NFTSearchResponse>**

### Authorization

[APIKeyID](README.md#APIKeyID), [APISecretKey](README.md#APISecretKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Bad request (check response message) |  -  |
**401** | Invalid API key pair in headers |  -  |
**402** | Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


