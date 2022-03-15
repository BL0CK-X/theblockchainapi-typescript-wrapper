# theblockchainapi.SolanaNFTMarketplacesApi

All URIs are relative to *https://api.blockchainapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**solanaBuyNFT**](SolanaNFTMarketplacesApi.md#solanaBuyNFT) | **POST** /solana/nft/marketplaces/{exchange}/buy/{network}/{mint_address} | Buy
[**solanaDelistNFT**](SolanaNFTMarketplacesApi.md#solanaDelistNFT) | **POST** /solana/nft/marketplaces/{exchange}/delist/{network}/{mint_address} | Delist
[**solanaGetNFTListing**](SolanaNFTMarketplacesApi.md#solanaGetNFTListing) | **GET** /solana/nft/marketplaces/listing/{network}/{mint_address} | Get NFT Listing
[**solanaGetNFTMarketplaceAnalytics**](SolanaNFTMarketplacesApi.md#solanaGetNFTMarketplaceAnalytics) | **POST** /solana/nft/marketplaces/analytics | Get NFT Analytics
[**solanaGetNFTMarketplaceMarketShare**](SolanaNFTMarketplacesApi.md#solanaGetNFTMarketplaceMarketShare) | **GET** /solana/nft/marketplaces/analytics/market_share | Get Marketplace Market Share
[**solanaGetNFTMarketplaceRecentTransactions**](SolanaNFTMarketplacesApi.md#solanaGetNFTMarketplaceRecentTransactions) | **GET** /solana/nft/marketplaces/analytics/recent_transactions | Get Recent NFT Transactions
[**solanaListNFT**](SolanaNFTMarketplacesApi.md#solanaListNFT) | **POST** /solana/nft/marketplaces/{exchange}/list/{network}/{mint_address} | List


# **solanaBuyNFT**
> BuyResponse solanaBuyNFT()

<a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/buy-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Buy an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Edennpm  `Cost: 25 Credits`, `Cost: 3 Credits on Devnet` (<a href=\"#section/Pricing\">See Pricing</a>)

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

<a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/delist-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Delist an NFT from a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  `Cost: 8 Credits`, `Cost: 3 Credits on Devnet` (<a href=\"#section/Pricing\">See Pricing</a>)

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

<a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/get-nft-listing\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get the Marketplace listing of a Solana NFT.  Currently checks the following Solana NFT martketplaces: SolSea, Magic Eden, Solanart, Alpha Art, Digital Eyes, Exchange.art  `Cost: 1 Credits`, (<a href=\"#section/Pricing\">See Pricing</a>)

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

# **solanaGetNFTMarketplaceAnalytics**
> NFTAnalyticsResponse solanaGetNFTMarketplaceAnalytics()

<a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/analytics\" target=\"_blank\">See examples (Python, JavaScript)</a>.  A collection is a list of NFTs.  Any collection can thus be defined as a list of mint addresses.  This endpoint takes in a list of mint addresses (effectively, a collection), a start time (optional), and an end time (optional) and outputs the floor for that period, the volume for that period, and the transaction history for each NFT in the list (buy, list, delist, update price) for that period.  We are currently compiling a dictionary of collection names to list of mint addresses for public use. Please contribute <a href=\"https://github.com/BL0CK-X/solana-nft-collection-mint-addresses\" target=\"_blank\">here</a>.  Currently scans the following Solana NFT martketplaces: SolSea, Magic Eden, Solanart, Alpha Art, Digital Eyes, Exchange.art  `Cost: 15 Credits`, (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaNFTMarketplacesApi(configuration);

let body:theblockchainapi.SolanaNFTMarketplacesApiSolanaGetNFTMarketplaceAnalyticsRequest = {
  // NFTAnalyticsRequest (optional)
  nFTAnalyticsRequest: null,
};

apiInstance.solanaGetNFTMarketplaceAnalytics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nFTAnalyticsRequest** | **NFTAnalyticsRequest**|  |


### Return type

**NFTAnalyticsResponse**

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
**404** | No marketplace listing found for this NFT. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **solanaGetNFTMarketplaceMarketShare**
> any solanaGetNFTMarketplaceMarketShare()

<a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/market-share\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get the Marketplace listing of a Solana NFT.  Currently checks for the following Solana NFT martketplaces: SolSea, Magic Eden, Solanart, Alpha Art, Digital Eyes, Exchange.art  `Cost: 3 Credits`, (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaNFTMarketplacesApi(configuration);

let body:any = {};

apiInstance.solanaGetNFTMarketplaceMarketShare(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**any**

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

# **solanaGetNFTMarketplaceRecentTransactions**
> Array<NFTTransaction> solanaGetNFTMarketplaceRecentTransactions()

<a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/recent-transactions\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get all NFT transactions across all major marketplaces in the last 30 minutes.  Currently checks for the following Solana NFT martketplaces: SolSea, Magic Eden, Solanart, Alpha Art, Digital Eyes, Exchange.art  `Cost: 15 Credits`, (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaNFTMarketplacesApi(configuration);

let body:any = {};

apiInstance.solanaGetNFTMarketplaceRecentTransactions(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<NFTTransaction>**

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

<a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/list-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  List an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  `Cost: 12 Credits`, `Cost: 3 Credits on Devnet` (<a href=\"#section/Pricing\">See Pricing</a>)

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


