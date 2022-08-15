# theblockchainapi.CCProjectApi

All URIs are relative to *https://api.blockchainapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCCProject**](CCProjectApi.md#createCCProject) | **POST** /checkout/v1/project | Create a project 
[**deleteCCProject**](CCProjectApi.md#deleteCCProject) | **DELETE** /checkout/v1/project/{project_id} | Delete a project 
[**getCCProject**](CCProjectApi.md#getCCProject) | **GET** /checkout/v1/project/{project_id} | Get a project 
[**listCCProjects**](CCProjectApi.md#listCCProjects) | **GET** /checkout/v1/projects | List projects 
[**updateCCProject**](CCProjectApi.md#updateCCProject) | **PUT** /checkout/v1/project/{project_id} | Update a project 


# **createCCProject**
> CCProject createCCProject()

A project represents that project or company that is accepting payments.  A project can have products, which can have multiple plans (prices) each.  To create a project, you just need to supply a name and a Solana public key to receive payments.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.CCProjectApi(configuration);

let body:theblockchainapi.CCProjectApiCreateCCProjectRequest = {
  // CCProjectCreateRequest (optional)
  cCProjectCreateRequest: {
    name: "name_example",
    description: "description_example",
    webhook: "webhook_example",
    website: "website_example",
    discordWebhook: "discordWebhook_example",
    logoUrl: "logoUrl_example",
    customerIdToCollect: {
      idType: "misc",
      name: "name_example",
      description: "",
      required: false,
    },
    successUrl: "successUrl_example",
    payoutMethod: {
      blockchainIdentifier: "blockchainIdentifier_example",
    },
  },
};

apiInstance.createCCProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cCProjectCreateRequest** | **CCProjectCreateRequest**|  |


### Return type

**CCProject**

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
**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteCCProject**
> void deleteCCProject()

Delete a project.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.CCProjectApi(configuration);

let body:theblockchainapi.CCProjectApiDeleteCCProjectRequest = {
  // string | The ID of the project. Created and returned when a project is created.
  projectId: "project_WDQskRIfHQxj53N5mk5K",
};

apiInstance.deleteCCProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | The ID of the project. Created and returned when a project is created. | defaults to undefined


### Return type

**void**

### Authorization

[APIKeyID](README.md#APIKeyID), [APISecretKey](README.md#APISecretKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Bad request (check response message) |  -  |
**401** | Invalid API key pair in headers |  -  |
**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCCProject**
> CCProject getCCProject()

Retrieve a project.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.CCProjectApi(configuration);

let body:theblockchainapi.CCProjectApiGetCCProjectRequest = {
  // string | The ID of the project. Created and returned when a project is created.
  projectId: "project_WDQskRIfHQxj53N5mk5K",
};

apiInstance.getCCProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | [**string**] | The ID of the project. Created and returned when a project is created. | defaults to undefined


### Return type

**CCProject**

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

# **listCCProjects**
> Array<CCProject> listCCProjects()

List all projects associated with an account.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.CCProjectApi(configuration);

let body:any = {};

apiInstance.listCCProjects(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<CCProject>**

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

# **updateCCProject**
> CCProject updateCCProject()

Retrieve a project.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.CCProjectApi(configuration);

let body:theblockchainapi.CCProjectApiUpdateCCProjectRequest = {
  // string | The ID of the project. Created and returned when a project is created.
  projectId: "project_WDQskRIfHQxj53N5mk5K",
  // CCProject (optional)
  cCProject: {
    projectId: "projectId_example",
    name: "name_example",
    description: "description_example",
    webhook: "webhook_example",
    website: "website_example",
    discordWebhook: "discordWebhook_example",
    logoUrl: "logoUrl_example",
    customerIdToCollect: {
      idType: "misc",
      name: "name_example",
      description: "",
      required: false,
    },
    successUrl: "successUrl_example",
    payoutMethod: {
      blockchainIdentifier: "blockchainIdentifier_example",
    },
  },
};

apiInstance.updateCCProject(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cCProject** | **CCProject**|  |
 **projectId** | [**string**] | The ID of the project. Created and returned when a project is created. | defaults to undefined


### Return type

**CCProject**

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
**429** | Rate limited |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


