# theblockchainapi.WalletApi

All URIs are relative to *https://api.blockchainapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**derivePrivateKey**](WalletApi.md#derivePrivateKey) | **POST** /{blockchain}/wallet/private_key | Derive private key
[**deriveWalletIdentifier**](WalletApi.md#deriveWalletIdentifier) | **POST** /{blockchain}/wallet/identifier | Derive wallet identifier
[**generatePrivateKey**](WalletApi.md#generatePrivateKey) | **POST** /{blockchain}/wallet/generate/private_key | Generate private key
[**generateSeedPhrase**](WalletApi.md#generateSeedPhrase) | **POST** /{blockchain}/wallet/generate/secret_recovery_phrase | Generate seed phrase
[**getAirdrop**](WalletApi.md#getAirdrop) | **POST** /{blockchain}/wallet/airdrop | Get an airdrop
[**getBalance**](WalletApi.md#getBalance) | **POST** /{blockchain}/wallet/balance | Get wallet&#39;s balance of X
[**transfer**](WalletApi.md#transfer) | **POST** /{blockchain}/wallet/transfer | Transfer crypto, a token, or an NFT to another wallet


# **derivePrivateKey**
> GeneralGeneratePrivateKeyResponse derivePrivateKey(supplyWalletRequest)

<a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/derive-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely derive a private key for a wallet.   For example, if you have a seed phrase and want to derive the corresponding private key, use this endpoint.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.WalletApi(configuration);

let body:theblockchainapi.WalletApiDerivePrivateKeyRequest = {
  // 'avalanche' | 'binance_smart_chain' | 'ethereum' | 'near' | 'solana' | The blockchain you want to use 
  blockchain: "avalanche",
  // SupplyWalletRequest
  supplyWalletRequest: null,
};

apiInstance.derivePrivateKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplyWalletRequest** | **SupplyWalletRequest**|  |
 **blockchain** | [**&#39;avalanche&#39; | &#39;binance_smart_chain&#39; | &#39;ethereum&#39; | &#39;near&#39; | &#39;solana&#39;**]**Array<&#39;avalanche&#39; &#124; &#39;binance_smart_chain&#39; &#124; &#39;ethereum&#39; &#124; &#39;near&#39; &#124; &#39;solana&#39;>** | The blockchain you want to use  | defaults to undefined


### Return type

**GeneralGeneratePrivateKeyResponse**

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

# **deriveWalletIdentifier**
> WalletIdentifiers deriveWalletIdentifier(supplyWalletRequest)

<a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/derive-wallet-identifier\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Derive the identifier for a wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.WalletApi(configuration);

let body:theblockchainapi.WalletApiDeriveWalletIdentifierRequest = {
  // 'avalanche' | 'binance_smart_chain' | 'ethereum' | 'near' | 'solana' | The blockchain you want to use 
  blockchain: "avalanche",
  // SupplyWalletRequest
  supplyWalletRequest: null,
};

apiInstance.deriveWalletIdentifier(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supplyWalletRequest** | **SupplyWalletRequest**|  |
 **blockchain** | [**&#39;avalanche&#39; | &#39;binance_smart_chain&#39; | &#39;ethereum&#39; | &#39;near&#39; | &#39;solana&#39;**]**Array<&#39;avalanche&#39; &#124; &#39;binance_smart_chain&#39; &#124; &#39;ethereum&#39; &#124; &#39;near&#39; &#124; &#39;solana&#39;>** | The blockchain you want to use  | defaults to undefined


### Return type

**WalletIdentifiers**

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

# **generatePrivateKey**
> GeneralGeneratePrivateKeyResponse generatePrivateKey()

<a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/generate-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a private key for a wallet.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.WalletApi(configuration);

let body:theblockchainapi.WalletApiGeneratePrivateKeyRequest = {
  // 'avalanche' | 'binance_smart_chain' | 'ethereum' | 'near' | 'solana' | The blockchain you want to use 
  blockchain: "avalanche",
};

apiInstance.generatePrivateKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | [**&#39;avalanche&#39; | &#39;binance_smart_chain&#39; | &#39;ethereum&#39; | &#39;near&#39; | &#39;solana&#39;**]**Array<&#39;avalanche&#39; &#124; &#39;binance_smart_chain&#39; &#124; &#39;ethereum&#39; &#124; &#39;near&#39; &#124; &#39;solana&#39;>** | The blockchain you want to use  | defaults to undefined


### Return type

**GeneralGeneratePrivateKeyResponse**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **generateSeedPhrase**
> GeneralSecretPhrase generateSeedPhrase()

<a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/generate-secret-phrase\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a seed phrase for a wallet.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.WalletApi(configuration);

let body:theblockchainapi.WalletApiGenerateSeedPhraseRequest = {
  // 'avalanche' | 'binance_smart_chain' | 'ethereum' | 'near' | 'solana' | The blockchain you want to use 
  blockchain: "avalanche",
  // GenerateSeedPhraseRequest (optional)
  generateSeedPhraseRequest: null,
};

apiInstance.generateSeedPhrase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateSeedPhraseRequest** | **GenerateSeedPhraseRequest**|  |
 **blockchain** | [**&#39;avalanche&#39; | &#39;binance_smart_chain&#39; | &#39;ethereum&#39; | &#39;near&#39; | &#39;solana&#39;**]**Array<&#39;avalanche&#39; &#124; &#39;binance_smart_chain&#39; &#124; &#39;ethereum&#39; &#124; &#39;near&#39; &#124; &#39;solana&#39;>** | The blockchain you want to use  | defaults to undefined


### Return type

**GeneralSecretPhrase**

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

# **getAirdrop**
> GeneralTransactionMadeResponse getAirdrop()

<a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/get-airdrop\" target=\"_blank\">See examples (Python, JavaScript)</a>.      - Ethereum: Receive an airdrop of 0.001 ETH on Ropsten (not real ETH).  - Solana: Use this endpoint to get an airdrop of SOL on the devnet (not real SOL). Amount of 0.015, which is the minimum amount of SOL you need to mint an NFT and then transfer it to another wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.WalletApi(configuration);

let body:theblockchainapi.WalletApiGetAirdropRequest = {
  // 'ethereum' | 'solana' | The blockchain you want to use 
  blockchain: "ethereum",
  // GeneralAirdropRequest (optional)
  generalAirdropRequest: {
    recipientBlockchainIdentifier: "recipientBlockchainIdentifier_example",
  },
};

apiInstance.getAirdrop(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generalAirdropRequest** | **GeneralAirdropRequest**|  |
 **blockchain** | [**&#39;ethereum&#39; | &#39;solana&#39;**]**Array<&#39;ethereum&#39; &#124; &#39;solana&#39;>** | The blockchain you want to use  | defaults to undefined


### Return type

**GeneralTransactionMadeResponse**

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

# **getBalance**
> GeneralBalanceResponse getBalance()

<a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/get-wallet-balance\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the balance of a wallet in the native blockchain currency (e.g., ETH, SOL) or any token (e.g., ERC-20, NFTs, SPL, etc.).  To get the balance of a specific token, supply the `token_blockchain_identifier` of the token.   You can also use this endpoint to see whether or not a person owns an NFT. Just supply the `token_blockchain_identifier` of the NFT. A balance of \"1\" means the person owns the NFT, and a balance of \"0\" means the person does not own the NFT.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.WalletApi(configuration);

let body:theblockchainapi.WalletApiGetBalanceRequest = {
  // 'ethereum' | 'solana' | The blockchain you want to use 
  blockchain: "ethereum",
  // GeneralBalanceRequest (optional)
  generalBalanceRequest: {
    blockchainIdentifier: "blockchainIdentifier_example",
    unit: "unit_example",
    network: "network_example",
    tokenBlockchainIdentifier: "null",
  },
};

apiInstance.getBalance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generalBalanceRequest** | **GeneralBalanceRequest**|  |
 **blockchain** | [**&#39;ethereum&#39; | &#39;solana&#39;**]**Array<&#39;ethereum&#39; &#124; &#39;solana&#39;>** | The blockchain you want to use  | defaults to undefined


### Return type

**GeneralBalanceResponse**

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

# **transfer**
> GeneralTransactionResponse transfer()

<a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/transfer-crypto-token-or-nft\" target=\"_blank\">See transfer ETH/SOL/crypto example (Python, JavaScript)</a>.  <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/transfer-crypto-token-or-nft\" target=\"_blank\">See transfer NFT/token example (Python, JavaScript)</a>.  This is a powerful function. It might be slightly confusing because there are several optional parameters, so take some time to review it.   This function can send - The native currency of the selected blockchain (e.g., SOL, ETH, BNB, etc.) - A token (e.g., an SPL token, ERC-20 token, etc.) - An NFT  You can sign and submit the transaction for confirmation; and you can select to simply return the compiled transaction so that you can submit it to the user for signing (e.g., via Phantom or Metamask; no private keys required in this case).  If you're transferring an NFT or a token, supply its respective `token_blockchain_identifier`.  SENDER: Note that the wallet information is used to authorize the sending of the tokens and identifies the source of the tokens. If `return_compiled_transaction = false`, we sign and submit the transaction (`wallet` is required in this case; do not provide a value for `sender_blockchain_identifier`). If `return_compiled_transaction = true`, we compile the transaction (`sender_blockchain_identifier` is required in this case; do not provide `wallet`).  RECIPIENT: `recipient_blockchain_identifier` identifies the receiver. This is entirely separate from the information used for the SENDER above. So, in this API call, there are two wallets involved, but only one (namely, the SENDER) is needed to authorize the transaction (if you want us to sign and submitting it).  FEE_PAYER (Solana only): The fee payer of the transaction defaults to `wallet` (or `sender_blockchain_identifier`). To set a different fee payer, provide a value for `fee_payer_wallet`.  `Cost: 2 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.WalletApi(configuration);

let body:theblockchainapi.WalletApiTransferRequest = {
  // 'ethereum' | 'solana' | The blockchain you want to use 
  blockchain: "ethereum",
  // GeneralTransferRequest (optional)
  generalTransferRequest: {
    recipientBlockchainIdentifier: "recipientBlockchainIdentifier_example",
    wallet: null,
    tokenBlockchainIdentifier: "tokenBlockchainIdentifier_example",
    network: "network_example",
    amount: "1",
    returnCompiledTransaction: false,
    senderBlockchainIdentifier: "null",
    feePayerWallet: null,
  },
};

apiInstance.transfer(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generalTransferRequest** | **GeneralTransferRequest**|  |
 **blockchain** | [**&#39;ethereum&#39; | &#39;solana&#39;**]**Array<&#39;ethereum&#39; &#124; &#39;solana&#39;>** | The blockchain you want to use  | defaults to undefined


### Return type

**GeneralTransactionResponse**

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


