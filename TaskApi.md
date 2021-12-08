# theblockchainapi.TaskApi

All URIs are relative to *https://api.theblockchainapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTask**](TaskApi.md#getTask) | **GET** /task/{task_id} | Get the result of a task


# **getTask**
> Task getTask()

<a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/mint-from-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the result of a task. Replace `task_id` with the ID of your task.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)

### Example


```typescript
import { theblockchainapi } from 'theblockchainapi';
import * as fs from 'fs';

const configuration = theblockchainapi.createConfiguration();
const apiInstance = new theblockchainapi.TaskApi(configuration);

let body:theblockchainapi.TaskApiGetTaskRequest = {
  // string | The ID of the task
  taskId: "task_id_example",
};

apiInstance.getTask(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | [**string**] | The ID of the task | defaults to undefined


### Return type

**Task**

### Authorization

[APIKeyID](README.md#APIKeyID), [APISecretKey](README.md#APISecretKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Task completed. Does *NOT* indicate that the task was successful. Check the response data for details. |  -  |
**202** | Task in Progress. Check back again in a bit! |  -  |
**401** | Invalid API key pair in headers |  -  |
**402** | Payment required. Occurs when you run out of API requests. Upgrade &lt;a href&#x3D;\&quot;https://dashboard.theblockchainapi.com/billing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. |  -  |
**404** | Task not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


