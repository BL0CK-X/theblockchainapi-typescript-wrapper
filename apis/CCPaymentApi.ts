// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CCPayment } from '../models/CCPayment';

/**
 * no description
 */
export class CCPaymentApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieve a specific payment, either by its `payment_id` or `payment_validation_code`.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * Get a payment 
     * @param projectId The ID of the project. Created and returned when a project is created.
     * @param paymentIdentifier You can supply either &#x60;payment_id&#x60; or &#x60;payment_validation_code&#x60;.  The &#x60;payment_id&#x60; is only visible by you and uniquely identifies a payment.  The &#x60;payment_validation_code&#x60; is shown exclusively to the customer and the owner of the project. It can be used to redeem a payment. You can verify a payment by pulling the payment with the &#x60;payment_validation_code&#x60;.
     */
    public async getCCPayment(projectId: string, paymentIdentifier: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new RequiredError("CCPaymentApi", "getCCPayment", "projectId");
        }


        // verify required parameter 'paymentIdentifier' is not null or undefined
        if (paymentIdentifier === null || paymentIdentifier === undefined) {
            throw new RequiredError("CCPaymentApi", "getCCPayment", "paymentIdentifier");
        }


        // Path Params
        const localVarPath = '/checkout/v1/project/{project_id}/payment/{payment_identifier}'
            .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)))
            .replace('{' + 'payment_identifier' + '}', encodeURIComponent(String(paymentIdentifier)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
     * List all payments associated with your account (across all projects).  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * List all payments  
     */
    public async listAllCCPayments(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/checkout/v1/payments';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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
     * List all payments associated with a project.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * List a project's payments 
     * @param projectId The ID of the project. Created and returned when a project is created.
     * @param UNKNOWN_PARAMETER_NAME Filter payments by a user&#39;s wallet identifier (i.e., Solana public key) 
     */
    public async listCCProjectPayments(projectId: string, UNKNOWN_PARAMETER_NAME?: , _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'projectId' is not null or undefined
        if (projectId === null || projectId === undefined) {
            throw new RequiredError("CCPaymentApi", "listCCProjectPayments", "projectId");
        }



        // Path Params
        const localVarPath = '/checkout/v1/project/{project_id}/payments'
            .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (UNKNOWN_PARAMETER_NAME !== undefined) {
            requestContext.setQueryParam("blockchain_identifier", ObjectSerializer.serialize(UNKNOWN_PARAMETER_NAME, "", ""));
        }


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

export class CCPaymentApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCCPayment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCCPayment(response: ResponseContext): Promise<CCPayment > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CCPayment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CCPayment", ""
            ) as CCPayment;
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
            const body: CCPayment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CCPayment", ""
            ) as CCPayment;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAllCCPayments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listAllCCPayments(response: ResponseContext): Promise<Array<CCPayment> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<CCPayment> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CCPayment>", ""
            ) as Array<CCPayment>;
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
            const body: Array<CCPayment> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CCPayment>", ""
            ) as Array<CCPayment>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCCProjectPayments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listCCProjectPayments(response: ResponseContext): Promise<Array<CCPayment> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<CCPayment> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CCPayment>", ""
            ) as Array<CCPayment>;
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
            const body: Array<CCPayment> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CCPayment>", ""
            ) as Array<CCPayment>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
