// typings for btoa are incorrect
import { RequestContext } from "../http/http";

/**
 * Interface authentication schemes.
 */
export interface SecurityAuthentication {
    /*
     * @return returns the name of the security authentication as specified in OAI
     */
    getName(): string;

    /**
     * Applies the authentication scheme to the request context
     *
     * @params context the request context which should use this authentication scheme
     */
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}

export interface TokenProvider {
  getToken(): Promise<string> | string;
}

/**
 * Applies apiKey authentication to the request context.
 */
export class APIKeyIDAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "APIKeyID";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("APIKeyID", this.apiKey);
    }
}

/**
 * Applies apiKey authentication to the request context.
 */
export class APISecretKeyAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "APISecretKey";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("APISecretKey", this.apiKey);
    }
}


export type AuthMethods = {
    "APIKeyID"?: SecurityAuthentication,
    "APISecretKey"?: SecurityAuthentication
}

export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = { "username": string, "password": string };
export type HttpBearerConfiguration = { tokenProvider: TokenProvider };
export type OAuth2Configuration = { accessToken: string };

export type AuthMethodsConfiguration = {
    "APIKeyID"?: ApiKeyConfiguration,
    "APISecretKey"?: ApiKeyConfiguration
}

/**
 * Creates the authentication methods from a swagger description.
 *
 */
export function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods {
    let authMethods: AuthMethods = {}

    if (!config) {
        return authMethods;
    }

    if (config["APIKeyID"]) {
        authMethods["APIKeyID"] = new APIKeyIDAuthentication(
            config["APIKeyID"]
        );
    }

    if (config["APISecretKey"]) {
        authMethods["APISecretKey"] = new APISecretKeyAuthentication(
            config["APISecretKey"]
        );
    }

    return authMethods;
}