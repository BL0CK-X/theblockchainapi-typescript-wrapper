# theblockchainapi.NameServiceApi

All URIs are relative to *https://api.blockchainapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBlockchainIdentifierFromName**](NameServiceApi.md#getBlockchainIdentifierFromName) | **POST** /{blockchain}/{network}/name_service/name_to_blockchain_identifier | Get the identifier
[**getNameForBlockchainIdentifier**](NameServiceApi.md#getNameForBlockchainIdentifier) | **POST** /{blockchain}/{network}/name_service/blockchain_identifier_to_name | Get the name


# **getBlockchainIdentifierFromName**
> InputBlockchainIdentifier getBlockchainIdentifierFromName()

<a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/name-service/name-to-blockchain-identifier\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      Get the blockchain identifier from a name.  e.g., Input `vitalik.eth` and output `0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045`  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.NameServiceApi(configuration);

let body:theblockchainapi.NameServiceApiGetBlockchainIdentifierFromNameRequest = {
  // 'ethereum' | 'solana' | The blockchain you want to use 
  blockchain: "ethereum",
  // string | The network of the blockchain you selected  - Solana: `devnet`, `mainnet-beta` - Ethereum: `ropsten`, `mainnet`  Defaults when not provided (not applicable to path parameters): - Solana: `devnet` - Ethereum: `ropsten`
  network: "ropsten",
  // InputName (optional)
  inputName: {
    name: "name_example",
  },
};

apiInstance.getBlockchainIdentifierFromName(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputName** | **InputName**|  |
 **blockchain** | [**&#39;ethereum&#39; | &#39;solana&#39;**]**Array<&#39;ethereum&#39; &#124; &#39;solana&#39;>** | The blockchain you want to use  | defaults to undefined
 **network** | [**string**] | The network of the blockchain you selected  - Solana: &#x60;devnet&#x60;, &#x60;mainnet-beta&#x60; - Ethereum: &#x60;ropsten&#x60;, &#x60;mainnet&#x60;  Defaults when not provided (not applicable to path parameters): - Solana: &#x60;devnet&#x60; - Ethereum: &#x60;ropsten&#x60; | defaults to undefined


### Return type

**InputBlockchainIdentifier**

### Authorization

[APIKeyID](README.md#APIKeyID), [APISecretKey](README.md#APISecretKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Invalid input or issue retrieving transaction. See response for details |  -  |
**401** | Invalid API key pair in headers |  -  |
**402** | Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. |  -  |
**404** | Task not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getNameForBlockchainIdentifier**
> InputName getNameForBlockchainIdentifier()

<a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/name-service/blockchain-identifier-to-name\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      Get the name from a blockchain identifier.  e.g., Input `0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045` and output `vitalik.eth`  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.NameServiceApi(configuration);

let body:theblockchainapi.NameServiceApiGetNameForBlockchainIdentifierRequest = {
  // 'ethereum' | 'solana' | The blockchain you want to use 
  blockchain: "ethereum",
  // string | The network of the blockchain you selected  - Solana: `devnet`, `mainnet-beta` - Ethereum: `ropsten`, `mainnet`  Defaults when not provided (not applicable to path parameters): - Solana: `devnet` - Ethereum: `ropsten`
  network: "ropsten",
  // InputBlockchainIdentifier (optional)
  inputBlockchainIdentifier: {
    blockchainIdentifier: "blockchainIdentifier_example",
  },
};

apiInstance.getNameForBlockchainIdentifier(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputBlockchainIdentifier** | **InputBlockchainIdentifier**|  |
 **blockchain** | [**&#39;ethereum&#39; | &#39;solana&#39;**]**Array<&#39;ethereum&#39; &#124; &#39;solana&#39;>** | The blockchain you want to use  | defaults to undefined
 **network** | [**string**] | The network of the blockchain you selected  - Solana: &#x60;devnet&#x60;, &#x60;mainnet-beta&#x60; - Ethereum: &#x60;ropsten&#x60;, &#x60;mainnet&#x60;  Defaults when not provided (not applicable to path parameters): - Solana: &#x60;devnet&#x60; - Ethereum: &#x60;ropsten&#x60; | defaults to undefined


### Return type

**InputName**

### Authorization

[APIKeyID](README.md#APIKeyID), [APISecretKey](README.md#APISecretKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Invalid input or issue retrieving transaction. See response for details |  -  |
**401** | Invalid API key pair in headers |  -  |
**402** | Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. |  -  |
**404** | Task not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


