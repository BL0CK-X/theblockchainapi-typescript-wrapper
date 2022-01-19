# theblockchainapi.SolanaNFTMarketplacesApi

All URIs are relative to *https://api.blockchainapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**solanaBuyNFT**](SolanaNFTMarketplacesApi.md#solanaBuyNFT) | **POST** /solana/nft/marketplaces/{exchange}/buy/{network}/{mint_address} | Buy
[**solanaDelistNFT**](SolanaNFTMarketplacesApi.md#solanaDelistNFT) | **POST** /solana/nft/marketplaces/{exchange}/delist/{network}/{mint_address} | Delist
[**solanaGetNFTListing**](SolanaNFTMarketplacesApi.md#solanaGetNFTListing) | **GET** /solana/nft/marketplaces/listing/{network}/{mint_address} | Get NFT Listing
[**solanaListNFT**](SolanaNFTMarketplacesApi.md#solanaListNFT) | **POST** /solana/nft/marketplaces/{exchange}/list/{network}/{mint_address} | List


# **solanaBuyNFT**
> BuyResponse solanaBuyNFT()

<a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/buy-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Buy an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  **We are not responsible for any SOL or NFT lost.**  `Cost: 25 Credits`, `Cost: 3 Credits on Devnet`  Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)  (You are able to try on the `Free` plan as well, until you run out of credits.)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaNFTMarketplacesApi(configuration);

let body:theblockchainapi.SolanaNFTMarketplacesApiSolanaBuyNFTRequest = {
  // 'devnet' | 'mainnet-beta' | The network ID
  network: "devnet",
  // 'solsea' | 'magic-eden' | The NFT exchange to interact with
  exchange: "solsea",
  // string | The mint address of the NFT you want to buy
  mintAddress: "7GA16mQup7ESJbaD6n49VCwVG9kRkyQDzWKhBSLjbYqr",
  // BuyRequest (optional)
  buyRequest: null,
};

apiInstance.solanaBuyNFT(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **buyRequest** | **BuyRequest**|  |
 **network** | [**&#39;devnet&#39; | &#39;mainnet-beta&#39;**]**Array<&#39;devnet&#39; &#124; &#39;mainnet-beta&#39;>** | The network ID | defaults to undefined
 **exchange** | [**&#39;solsea&#39; | &#39;magic-eden&#39;**]**Array<&#39;solsea&#39; &#124; &#39;magic-eden&#39;>** | The NFT exchange to interact with | defaults to undefined
 **mintAddress** | [**string**] | The mint address of the NFT you want to buy | defaults to undefined


### Return type

**BuyResponse**

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

# **solanaDelistNFT**
> DelistResponse solanaDelistNFT()

<a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/delist-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Delist an NFT from a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  **We are not responsible for any SOL or NFT lost.**  `Cost: 8 Credits`, `Cost: 3 Credits on Devnet`  Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)  (You are able to try on the `Free` plan as well, until you run out of credits.)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaNFTMarketplacesApi(configuration);

let body:theblockchainapi.SolanaNFTMarketplacesApiSolanaDelistNFTRequest = {
  // 'devnet' | 'mainnet-beta' | The network ID
  network: "devnet",
  // 'solsea' | 'magic-eden' | The NFT exchange to interact with
  exchange: "solsea",
  // string | The mint address of the NFT you want to buy
  mintAddress: "7GA16mQup7ESJbaD6n49VCwVG9kRkyQDzWKhBSLjbYqr",
  // DelistRequest (optional)
  delistRequest: null,
};

apiInstance.solanaDelistNFT(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delistRequest** | **DelistRequest**|  |
 **network** | [**&#39;devnet&#39; | &#39;mainnet-beta&#39;**]**Array<&#39;devnet&#39; &#124; &#39;mainnet-beta&#39;>** | The network ID | defaults to undefined
 **exchange** | [**&#39;solsea&#39; | &#39;magic-eden&#39;**]**Array<&#39;solsea&#39; &#124; &#39;magic-eden&#39;>** | The NFT exchange to interact with | defaults to undefined
 **mintAddress** | [**string**] | The mint address of the NFT you want to buy | defaults to undefined


### Return type

**DelistResponse**

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

# **solanaGetNFTListing**
> GetNFTListingResponse solanaGetNFTListing()

<a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/get-nft-listing\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get the Marketplace listing of a Solana NFT.  Currently checks for the following Solana NFT martketplaces: SolSea, Magic Eden  `Cost: 1 Credits`, (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaNFTMarketplacesApi(configuration);

let body:theblockchainapi.SolanaNFTMarketplacesApiSolanaGetNFTListingRequest = {
  // 'devnet' | 'mainnet-beta' | The network ID
  network: "devnet",
  // string | The mint address of the NFT you want to buy
  mintAddress: "7GA16mQup7ESJbaD6n49VCwVG9kRkyQDzWKhBSLjbYqr",
};

apiInstance.solanaGetNFTListing(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | [**&#39;devnet&#39; | &#39;mainnet-beta&#39;**]**Array<&#39;devnet&#39; &#124; &#39;mainnet-beta&#39;>** | The network ID | defaults to undefined
 **mintAddress** | [**string**] | The mint address of the NFT you want to buy | defaults to undefined


### Return type

**GetNFTListingResponse**

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
**403** | Our API will throw a 403 if you are providing a body in the GET request.  Such requests are insecure and rejected. The solution is not to provide any sort of body in any GET request.  |  -  |
**404** | No marketplace listing found for this NFT. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **solanaListNFT**
> ListResponse solanaListNFT()

<a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/list-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  List an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  **We are not responsible for any SOL or NFT lost.**  `Cost: 12 Credits`, `Cost: 3 Credits on Devnet`  Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)  (You are able to try on the `Free` plan as well, until you run out of credits.)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaNFTMarketplacesApi(configuration);

let body:theblockchainapi.SolanaNFTMarketplacesApiSolanaListNFTRequest = {
  // 'devnet' | 'mainnet-beta' | The network ID
  network: "devnet",
  // 'solsea' | 'magic-eden' | The NFT exchange to interact with
  exchange: "solsea",
  // string | The mint address of the NFT you want to buy
  mintAddress: "7GA16mQup7ESJbaD6n49VCwVG9kRkyQDzWKhBSLjbYqr",
  // ListRequest (optional)
  listRequest: null,
};

apiInstance.solanaListNFT(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listRequest** | **ListRequest**|  |
 **network** | [**&#39;devnet&#39; | &#39;mainnet-beta&#39;**]**Array<&#39;devnet&#39; &#124; &#39;mainnet-beta&#39;>** | The network ID | defaults to undefined
 **exchange** | [**&#39;solsea&#39; | &#39;magic-eden&#39;**]**Array<&#39;solsea&#39; &#124; &#39;magic-eden&#39;>** | The NFT exchange to interact with | defaults to undefined
 **mintAddress** | [**string**] | The mint address of the NFT you want to buy | defaults to undefined


### Return type

**ListResponse**

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


