# theblockchainapi.CCWebhookApi

All URIs are relative to *https://api.blockchainapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCCWebhook**](CCWebhookApi.md#getCCWebhook) | **POST** /webhook/v1/project/{project_id}/webhook/{webhook_identifier} | Get a webhook 
[**listCCProjectWebhooks**](CCWebhookApi.md#listCCProjectWebhooks) | **POST** /webhook/v1/project/{project_id}/webhooks | List project&#39;s webhooks 
[**validateCCWebhook**](CCWebhookApi.md#validateCCWebhook) | **POST** /webhook/v1/project/{project_id}/webhook/{webhook_identifier}/validate | Validate a webhook 


# **getCCWebhook**
> CCWebhook getCCWebhook()

Retrieve the details of a webhook sent to you.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.CCWebhookApi(configuration);

let body:theblockchainapi.CCWebhookApiGetCCWebhookRequest = {
  // string | The ID of the project. Created and returned when a project is created.
  projectId: "project_WDQskRIfHQxj53N5mk5K",
  // string | The ID of the webhook. Created and returned when a webhook is sent.
  webhookIdentifier: "webhook/payment.received/payment_EyfDL6CsvFinpUnXgBXaUuqq3hCXa0",
};

apiInstance.getCCWebhook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | The ID of the project. Created and returned when a project is created. | defaults to undefined
 **webhookIdentifier** | [**string**] | The ID of the webhook. Created and returned when a webhook is sent. | defaults to undefined


### Return type

**CCWebhook**

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

# **listCCProjectWebhooks**
> Array<CCWebhook> listCCProjectWebhooks()

List all webhooks sent to you and their respective responses from your server.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.CCWebhookApi(configuration);

let body:theblockchainapi.CCWebhookApiListCCProjectWebhooksRequest = {
  // string | The ID of the project. Created and returned when a project is created.
  projectId: "project_WDQskRIfHQxj53N5mk5K",
};

apiInstance.listCCProjectWebhooks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | The ID of the project. Created and returned when a project is created. | defaults to undefined


### Return type

**Array<CCWebhook>**

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

# **validateCCWebhook**
> void validateCCWebhook()

Validate whether a webhook you received was actually sent from us.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.CCWebhookApi(configuration);

let body:theblockchainapi.CCWebhookApiValidateCCWebhookRequest = {
  // string | The ID of the project. Created and returned when a project is created.
  projectId: "project_WDQskRIfHQxj53N5mk5K",
  // string | The ID of the webhook. Created and returned when a webhook is sent.
  webhookIdentifier: "webhook/payment.received/payment_EyfDL6CsvFinpUnXgBXaUuqq3hCXa0",
  // CCWebhookValidateRequest (optional)
  cCWebhookValidateRequest: {
    webhookId: "webhook/payment.received/payment_2nFvUIGAsczBHSgiIz5JMenEiiJZet",
    webhookSignature: {},
    timeSent: 1651018365,
  },
};

apiInstance.validateCCWebhook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cCWebhookValidateRequest** | **CCWebhookValidateRequest**|  |
 **projectId** | [**string**] | The ID of the project. Created and returned when a project is created. | defaults to undefined
 **webhookIdentifier** | [**string**] | The ID of the webhook. Created and returned when a webhook is sent. | defaults to undefined


### Return type

**void**

### Authorization

[APIKeyID](README.md#APIKeyID), [APISecretKey](README.md#APISecretKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Valid Webhook |  -  |
**400** | Bad request / invalid webhook (check response message) |  -  |
**401** | Invalid API key pair in headers |  -  |
**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


