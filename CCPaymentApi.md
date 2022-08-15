# theblockchainapi.CCPaymentApi

All URIs are relative to *https://api.blockchainapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCCPayment**](CCPaymentApi.md#getCCPayment) | **GET** /checkout/v1/project/{project_id}/payment/{payment_identifier} | Get a payment 
[**listAllCCPayments**](CCPaymentApi.md#listAllCCPayments) | **GET** /checkout/v1/payments | List all payments  
[**listCCProjectPayments**](CCPaymentApi.md#listCCProjectPayments) | **GET** /checkout/v1/project/{project_id}/payments | List a project&#39;s payments 


# **getCCPayment**
> CCPayment getCCPayment()

Retrieve a specific payment, either by its `payment_id` or `payment_validation_code`.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.CCPaymentApi(configuration);

let body:theblockchainapi.CCPaymentApiGetCCPaymentRequest = {
  // string | The ID of the project. Created and returned when a project is created.
  projectId: "project_WDQskRIfHQxj53N5mk5K",
  // string | You can supply either `payment_id` or `payment_validation_code`.  The `payment_id` is only visible by you and uniquely identifies a payment.  The `payment_validation_code` is shown exclusively to the customer and the owner of the project. It can be used to redeem a payment. You can verify a payment by pulling the payment with the `payment_validation_code`.
  paymentIdentifier: "["payment_97jA1szpVjrSI5EvOb5zxNQFq5CfrC"]",
};

apiInstance.getCCPayment(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | The ID of the project. Created and returned when a project is created. | defaults to undefined
 **paymentIdentifier** | [**string**] | You can supply either &#x60;payment_id&#x60; or &#x60;payment_validation_code&#x60;.  The &#x60;payment_id&#x60; is only visible by you and uniquely identifies a payment.  The &#x60;payment_validation_code&#x60; is shown exclusively to the customer and the owner of the project. It can be used to redeem a payment. You can verify a payment by pulling the payment with the &#x60;payment_validation_code&#x60;. | defaults to undefined


### Return type

**CCPayment**

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
**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAllCCPayments**
> Array<CCPayment> listAllCCPayments()

List all payments associated with your account (across all projects).  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.CCPaymentApi(configuration);

let body:any = {};

apiInstance.listAllCCPayments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<CCPayment>**

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
**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCCProjectPayments**
> Array<CCPayment> listCCProjectPayments()

List all payments associated with a project.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.CCPaymentApi(configuration);

let body:theblockchainapi.CCPaymentApiListCCProjectPaymentsRequest = {
  // string | The ID of the project. Created and returned when a project is created.
  projectId: "project_WDQskRIfHQxj53N5mk5K",
  //  | Filter payments by a user's wallet identifier (i.e., Solana public key)  (optional)
  UNKNOWN_PARAMETER_NAME: ,
};

apiInstance.listCCProjectPayments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UNKNOWN_PARAMETER_NAME** | ****| Filter payments by a user&#39;s wallet identifier (i.e., Solana public key)  |
 **projectId** | [**string**] | The ID of the project. Created and returned when a project is created. | defaults to undefined


### Return type

**Array<CCPayment>**

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
**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


