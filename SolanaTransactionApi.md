# theblockchainapi.SolanaTransactionApi

All URIs are relative to *https://api.theblockchainapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**solanaGetTransaction**](SolanaTransactionApi.md#solanaGetTransaction) | **GET** /solana/transaction/{network}/{tx_signature} | Get the details of a transaction made on Solana


# **solanaGetTransaction**
> Transaction solanaGetTransaction()

<a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-transaction/get-transaction\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the details of a transaction made on Solana.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.SolanaTransactionApi(configuration);

let body:theblockchainapi.SolanaTransactionApiSolanaGetTransactionRequest = {
  // string | The network ID (devnet, mainnet-beta)
  network: "mainnet-beta",
  // string | The transaction signature of the transaction
  txSignature: "5wHu1qwD7q5ifaN5nwdcDqNFo53GJqa7nLp2BeeEpcHCusb4GzARz4GjgzsEHMkBMgCJMGa6GSQ1VG96Exv8kt2W",
};

apiInstance.solanaGetTransaction(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | [**string**] | The network ID (devnet, mainnet-beta) | defaults to undefined
 **txSignature** | [**string**] | The transaction signature of the transaction | defaults to undefined


### Return type

**Transaction**

### Authorization

[APIKeyID](README.md#APIKeyID), [APISecretKey](README.md#APISecretKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transaction found. Details in response. Click \&quot;Expand All\&quot; in the documentation sidebar to the right to view an example. |  -  |
**400** | Invalid input or issue retrieving transaction. See response for details |  -  |
**401** | Invalid API key pair in headers |  -  |
**402** | Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. |  -  |
**404** | Task not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


