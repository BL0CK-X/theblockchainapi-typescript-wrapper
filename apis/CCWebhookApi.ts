// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CCWebhook } from '../models/CCWebhook';
import { CCWebhookValidateRequest } from '../models/CCWebhookValidateRequest';

/**
 * no description
 */
export class CCWebhookApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieve the details of a webhook sent to you.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get a webhook 
     * @param projectId The ID of the project. Created and returned when a project is created.
     * @param webhookIdentifier The ID of the webhook. Created and returned when a webhook is sent.
     */
    public async getCCWebhook(projectId: string, webhookIdentifier: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new RequiredError("CCWebhookApi", "getCCWebhook", "projectId");
        }


        // verify required parameter 'webhookIdentifier' is not null or undefined
        if (webhookIdentifier === null || webhookIdentifier === undefined) {
            throw new RequiredError("CCWebhookApi", "getCCWebhook", "webhookIdentifier");
        }


        // Path Params
        const localVarPath = '/webhook/v1/project/{project_id}/webhook/{webhook_identifier}'
            .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)))
            .replace('{' + 'webhook_identifier' + '}', encodeURIComponent(String(webhookIdentifier)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyID"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["APISecretKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List all webhooks sent to you and their respective responses from your server.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * List project's webhooks 
     * @param projectId The ID of the project. Created and returned when a project is created.
     */
    public async listCCProjectWebhooks(projectId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new RequiredError("CCWebhookApi", "listCCProjectWebhooks", "projectId");
        }


        // Path Params
        const localVarPath = '/webhook/v1/project/{project_id}/webhooks'
            .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyID"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["APISecretKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Validate whether a webhook you received was actually sent from us.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Validate a webhook 
     * @param projectId The ID of the project. Created and returned when a project is created.
     * @param webhookIdentifier The ID of the webhook. Created and returned when a webhook is sent.
     * @param cCWebhookValidateRequest 
     */
    public async validateCCWebhook(projectId: string, webhookIdentifier: string, cCWebhookValidateRequest?: CCWebhookValidateRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new RequiredError("CCWebhookApi", "validateCCWebhook", "projectId");
        }


        // verify required parameter 'webhookIdentifier' is not null or undefined
        if (webhookIdentifier === null || webhookIdentifier === undefined) {
            throw new RequiredError("CCWebhookApi", "validateCCWebhook", "webhookIdentifier");
        }



        // Path Params
        const localVarPath = '/webhook/v1/project/{project_id}/webhook/{webhook_identifier}/validate'
            .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)))
            .replace('{' + 'webhook_identifier' + '}', encodeURIComponent(String(webhookIdentifier)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(cCWebhookValidateRequest, "CCWebhookValidateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["APIKeyID"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["APISecretKey"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class CCWebhookApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCCWebhook
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCCWebhook(response: ResponseContext): Promise<CCWebhook > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CCWebhook = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CCWebhook", ""
            ) as CCWebhook;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request (check response message)", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid API key pair in headers", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Rate limited", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CCWebhook = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CCWebhook", ""
            ) as CCWebhook;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCCProjectWebhooks
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listCCProjectWebhooks(response: ResponseContext): Promise<Array<CCWebhook> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<CCWebhook> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CCWebhook>", ""
            ) as Array<CCWebhook>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request (check response message)", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid API key pair in headers", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Rate limited", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<CCWebhook> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CCWebhook>", ""
            ) as Array<CCWebhook>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to validateCCWebhook
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async validateCCWebhook(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad request / invalid webhook (check response message)", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid API key pair in headers", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Rate limited", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
