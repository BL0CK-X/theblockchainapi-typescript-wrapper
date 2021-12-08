# theblockchainapi.SolanaAccountApi

All URIs are relative to *https://api.theblockchainapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**solanaGetAccount**](SolanaAccountApi.md#solanaGetAccount) | **GET** /solana/account/{network}/{public_key} | Get the details of an account on Solana
[**solanaGetAccountIsCandyMachine**](SolanaAccountApi.md#solanaGetAccountIsCandyMachine) | **GET** /solana/account/{network}/{public_key}/is_candy_machine | Get if account is candy machine
[**solanaGetAccountIsNFT**](SolanaAccountApi.md#solanaGetAccountIsNFT) | **GET** /solana/account/{network}/{public_key}/is_nft | Get if account is NFT


# **solanaGetAccount**
> Account solanaGetAccount()

<a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-account/get-account\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the details of an account on Solana. Learn more about accounts <a href=\"https://docs.solana.com/developing/programming-model/accounts\" target=\"_blank\">here</a>.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaAccountApi(configuration);

let body:theblockchainapi.SolanaAccountApiSolanaGetAccountRequest = {
  // string | The network ID (devnet, mainnet-beta)
  network: "mainnet-beta",
  // string | The public key of the account
  publicKey: "EEr5yQpNXf7Bru6Rt5podx56HGW9CEehXqgRGh2wa71w",
};

apiInstance.solanaGetAccount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | [**string**] | The network ID (devnet, mainnet-beta) | defaults to undefined
 **publicKey** | [**string**] | The public key of the account | defaults to undefined


### Return type

**Account**

### Authorization

[APIKeyID](README.md#APIKeyID), [APISecretKey](README.md#APISecretKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Account found. Details in response. |  -  |
**400** | Invalid input or issue retrieving transaction. See response for details |  -  |
**401** | Invalid API key pair in headers |  -  |
**402** | Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. |  -  |
**404** | Task not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **solanaGetAccountIsCandyMachine**
> AccountIsCandyMachine solanaGetAccountIsCandyMachine()

<a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [COMING SOON]</a>.      Determine whether or not a public key address corresponds to a candy machine ID or candy machine configuration.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaAccountApi(configuration);

let body:theblockchainapi.SolanaAccountApiSolanaGetAccountIsCandyMachineRequest = {
  // string | The network ID (devnet, mainnet-beta)
  network: "mainnet-beta",
  // string | The public key of the account
  publicKey: "EEr5yQpNXf7Bru6Rt5podx56HGW9CEehXqgRGh2wa71w",
};

apiInstance.solanaGetAccountIsCandyMachine(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | [**string**] | The network ID (devnet, mainnet-beta) | defaults to undefined
 **publicKey** | [**string**] | The public key of the account | defaults to undefined


### Return type

**AccountIsCandyMachine**

### Authorization

[APIKeyID](README.md#APIKeyID), [APISecretKey](README.md#APISecretKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Invalid input or issue retrieving transaction. See response for details |  -  |
**401** | Invalid API key pair in headers |  -  |
**402** | Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. |  -  |
**404** | Task not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **solanaGetAccountIsNFT**
> AccountIsNFT solanaGetAccountIsNFT()

<a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [COMING SOON]</a>.      Determine whether or not a public key is an NFT `mint address`  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaAccountApi(configuration);

let body:theblockchainapi.SolanaAccountApiSolanaGetAccountIsNFTRequest = {
  // string | The network ID (devnet, mainnet-beta)
  network: "mainnet-beta",
  // string | The public key of the account
  publicKey: "EEr5yQpNXf7Bru6Rt5podx56HGW9CEehXqgRGh2wa71w",
};

apiInstance.solanaGetAccountIsNFT(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | [**string**] | The network ID (devnet, mainnet-beta) | defaults to undefined
 **publicKey** | [**string**] | The public key of the account | defaults to undefined


### Return type

**AccountIsNFT**

### Authorization

[APIKeyID](README.md#APIKeyID), [APISecretKey](README.md#APISecretKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Invalid input or issue retrieving transaction. See response for details |  -  |
**401** | Invalid API key pair in headers |  -  |
**402** | Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. |  -  |
**404** | Task not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


