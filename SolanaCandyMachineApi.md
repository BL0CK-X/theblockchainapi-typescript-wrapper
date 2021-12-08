# theblockchainapi.SolanaCandyMachineApi

All URIs are relative to *https://api.theblockchainapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**solanaCreateTestCandyMachine**](SolanaCandyMachineApi.md#solanaCreateTestCandyMachine) | **POST** /solana/nft/candy_machine | Create a test candy machine 
[**solanaGetAllNFTsFromCandyMachine**](SolanaCandyMachineApi.md#solanaGetAllNFTsFromCandyMachine) | **GET** /solana/nft/candy_machine/{network}/{candy_machine_id}/nfts | Get the list of all NFTs (minted and unminted) from a Solana Candy Machine 
[**solanaGetCandyMachineConfigurationDetails**](SolanaCandyMachineApi.md#solanaGetCandyMachineConfigurationDetails) | **POST** /solana/nft/candy_machine/config/info | Get the details of a Solana Candy Machine configuration 
[**solanaGetCandyMachineDetails**](SolanaCandyMachineApi.md#solanaGetCandyMachineDetails) | **POST** /solana/nft/candy_machine/info | Get a Metaplex candy machine&#39;s details 
[**solanaGetNFTsMintedFromCandyMachine**](SolanaCandyMachineApi.md#solanaGetNFTsMintedFromCandyMachine) | **POST** /solana/nft/candy_machine/nfts | Get the list of NFTs minted from a Solana Candy Machine 
[**solanaMintFromCandyMachine**](SolanaCandyMachineApi.md#solanaMintFromCandyMachine) | **POST** /solana/nft/candy_machine/mint | Mint an NFT from a Metaplex candy machine


# **solanaCreateTestCandyMachine**
> CreateTestCandyMachineResponse solanaCreateTestCandyMachine()

<a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/create-test-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.   Use this endpoint to create a test candy machine so that you can test your minting bot.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaCandyMachineApi(configuration);

let body:theblockchainapi.SolanaCandyMachineApiSolanaCreateTestCandyMachineRequest = {
  // CreateTestCandyMachineRequest (optional)
  createTestCandyMachineRequest: {
    secretRecoveryPhrase: "secretRecoveryPhrase_example",
    derivationPath: "m/44/501/0/0",
    passphrase: "",
    network: "devnet",
  },
};

apiInstance.solanaCreateTestCandyMachine(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTestCandyMachineRequest** | **CreateTestCandyMachineRequest**|  |


### Return type

**CreateTestCandyMachineResponse**

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

# **solanaGetAllNFTsFromCandyMachine**
> GetAllNFTsResponse solanaGetAllNFTsFromCandyMachine()

<a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-all-nfts\" target=\"_blank\"> See examples (Python, JavaScript)</a>.  Use this endpoint to get the list of all NFTs (minted and unminted) from a Solana Candy Machine.  `Cost: 3 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaCandyMachineApi(configuration);

let body:theblockchainapi.SolanaCandyMachineApiSolanaGetAllNFTsFromCandyMachineRequest = {
  // string | The network ID (devnet, mainnet-beta)
  network: "mainnet-beta",
  // string | The ID of the candy machine
  candyMachineId: "FmkrvXRenCGtwBHw3VtBcExp8eTdnau97upaewF4GUEX",
};

apiInstance.solanaGetAllNFTsFromCandyMachine(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | [**string**] | The network ID (devnet, mainnet-beta) | defaults to undefined
 **candyMachineId** | [**string**] | The ID of the candy machine | defaults to undefined


### Return type

**GetAllNFTsResponse**

### Authorization

[APIKeyID](README.md#APIKeyID), [APISecretKey](README.md#APISecretKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response. Click \&quot;Expand All\&quot; on the right sidebar to see more. |  -  |
**400** | Bad request (check response message) |  -  |
**401** | Invalid API key pair in headers |  -  |
**402** | Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **solanaGetCandyMachineConfigurationDetails**
> GetConfigInfoResponse solanaGetCandyMachineConfigurationDetails()

<a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-config-info\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get the details of a Solana Candy Machine configuration.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaCandyMachineApi(configuration);

let body:theblockchainapi.SolanaCandyMachineApiSolanaGetCandyMachineConfigurationDetailsRequest = {
  // GetConfigInfoRequest (optional)
  getConfigInfoRequest: {
    configAddress: "configAddress_example",
    network: "devnet",
  },
};

apiInstance.solanaGetCandyMachineConfigurationDetails(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getConfigInfoRequest** | **GetConfigInfoRequest**|  |


### Return type

**GetConfigInfoResponse**

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

# **solanaGetCandyMachineDetails**
> GetCandyDetailsResponse solanaGetCandyMachineDetails()

<a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-info\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get the following details about a Metaplex candy machine: uuid, go live date, items in the collection, and the cost to mint.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaCandyMachineApi(configuration);

let body:theblockchainapi.SolanaCandyMachineApiSolanaGetCandyMachineDetailsRequest = {
  // GetCandyDetailsRequest (optional)
  getCandyDetailsRequest: {
    candyMachineId: "candyMachineId_example",
    network: "devnet",
  },
};

apiInstance.solanaGetCandyMachineDetails(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getCandyDetailsRequest** | **GetCandyDetailsRequest**|  |


### Return type

**GetCandyDetailsResponse**

### Authorization

[APIKeyID](README.md#APIKeyID), [APISecretKey](README.md#APISecretKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response.  |  -  |
**400** | Bad request (check response message) |  -  |
**401** | Invalid API key pair in headers |  -  |
**402** | Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **solanaGetNFTsMintedFromCandyMachine**
> Array<GetMintedNFTsResponse> solanaGetNFTsMintedFromCandyMachine()

<a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-minted-nfts\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get the list of NFTs minted from a Solana Candy Machine.  See example for how to get the list of NFT hashes <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-hash-table\" target=\"_blank\">here</a>.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaCandyMachineApi(configuration);

let body:theblockchainapi.SolanaCandyMachineApiSolanaGetNFTsMintedFromCandyMachineRequest = {
  // GetMintedNFTsRequest (optional)
  getMintedNFTsRequest: {
    candyMachineId: "candyMachineId_example",
    network: "devnet",
  },
};

apiInstance.solanaGetNFTsMintedFromCandyMachine(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getMintedNFTsRequest** | **GetMintedNFTsRequest**|  |


### Return type

**Array<GetMintedNFTsResponse>**

### Authorization

[APIKeyID](README.md#APIKeyID), [APISecretKey](README.md#APISecretKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response. Click \&quot;Expand All\&quot; on the right sidebar to see more. |  -  |
**400** | Bad request (check response message) |  -  |
**401** | Invalid API key pair in headers |  -  |
**402** | Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **solanaMintFromCandyMachine**
> MintNFTResponse solanaMintFromCandyMachine()

<a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/mint-from-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to mint an NFT from a metaplex candy machine as soon as it drops.  `Cost: 10 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaCandyMachineApi(configuration);

let body:theblockchainapi.SolanaCandyMachineApiSolanaMintFromCandyMachineRequest = {
  // MintNFTRequest (optional)
  mintNFTRequest: {
    configAddress: "configAddress_example",
    secretRecoveryPhrase: "secretRecoveryPhrase_example",
    derivationPath: "m/44/501/0/0",
    passphrase: "",
    network: "devnet",
  },
};

apiInstance.solanaMintFromCandyMachine(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mintNFTRequest** | **MintNFTRequest**|  |


### Return type

**MintNFTResponse**

### Authorization

[APIKeyID](README.md#APIKeyID), [APISecretKey](README.md#APISecretKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response. The actual response to this API will be something like {\&quot;task_id\&quot;: \&quot;10jd12Ka1\&quot;}.  You must poll the task ID endpoint to get info on this task. Once the task is completed, the returned format will follow the schema {&#39;transaction_signature&#39;: &#39;...&#39;}. See the [Task endpoint](/#tag/Task/paths/~1task~1{task_id}/get).  |  -  |
**400** | Bad request (check response message) |  -  |
**401** | Invalid API key pair in headers |  -  |
**402** | Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


