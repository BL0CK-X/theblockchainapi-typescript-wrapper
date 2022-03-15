export * from './ATAResponse';
export * from './Account';
export * from './AccountContext';
export * from './AccountIsCandyMachine';
export * from './AccountIsNFT';
export * from './AccountValue';
export * from './AirdropRequest';
export * from './B58PrivateKey';
export * from './BalanceRequest';
export * from './BalanceResponse';
export * from './BuyRequest';
export * from './BuyResponse';
export * from './CandyMachineSearchRequest';
export * from './CreateTestCandyMachineRequest';
export * from './CreateTestCandyMachineResponse';
export * from './DelistRequest';
export * from './DelistResponse';
export * from './DoubleTransferResponse';
export * from './Endpoint';
export * from './EndpointReference';
export * from './FeePayerWallet';
export * from './GeneratePrivateKey';
export * from './GetAllNFTsResponse';
export * from './GetAllNFTsResponseMintedNfts';
export * from './GetAllNFTsResponseUnmintedNfts';
export * from './GetCandyMachineIDRequest';
export * from './GetCandyMachineIDResponse';
export * from './GetCandyMetadataErrorResponse';
export * from './GetCandyMetadataRequest';
export * from './GetCandyMetadataResponse';
export * from './GetCandyMetadataResponseCreators';
export * from './GetFileResponse';
export * from './GetNFTListingResponse';
export * from './GetPublicKeyRequest';
export * from './GetSPLTokenResponse';
export * from './Group';
export * from './ListNFTsResponse';
export * from './ListRequest';
export * from './ListResponse';
export * from './MintNFTErrorResponse';
export * from './MintNFTRequest';
export * from './MintNFTResponse';
export * from './NFT';
export * from './NFTAnalyticsRequest';
export * from './NFTAnalyticsResponse';
export * from './NFTAnalyticsResponseTransactionHistory';
export * from './NFTData';
export * from './NFTMintErrorResponse';
export * from './NFTMintFee';
export * from './NFTMintRequest';
export * from './NFTOwnerResponse';
export * from './NFTSearchRequest';
export * from './NFTSearchResponse';
export * from './NFTTransaction';
export * from './ParameterSpecification';
export * from './PrivateKey';
export * from './Project';
export * from './ProjectCreateRequest';
export * from './ProjectDeploymentURL';
export * from './PublicKey';
export * from './SecretPhrase';
export * from './SecretRecoveryPhrase';
export * from './StatItem';
export * from './Transaction';
export * from './TransactionResult';
export * from './TransferRequest';
export * from './TransferResponse';
export * from './TransferResponseCompiled';
export * from './UploadFileRequest';
export * from './Wallet';

import { ATAResponse } from './ATAResponse';
import { Account } from './Account';
import { AccountContext } from './AccountContext';
import { AccountIsCandyMachine , AccountIsCandyMachineCandyMachineContractVersionEnum   } from './AccountIsCandyMachine';
import { AccountIsNFT } from './AccountIsNFT';
import { AccountValue } from './AccountValue';
import { AirdropRequest } from './AirdropRequest';
import { B58PrivateKey } from './B58PrivateKey';
import { BalanceRequest , BalanceRequestUnitEnum  , BalanceRequestNetworkEnum    } from './BalanceRequest';
import { BalanceResponse   , BalanceResponseNetworkEnum  , BalanceResponseUnitEnum   } from './BalanceResponse';
import { BuyRequest } from './BuyRequest';
import { BuyResponse } from './BuyResponse';
import { CandyMachineSearchRequest , CandyMachineSearchRequestUpdateAuthoritySearchMethodEnum   , CandyMachineSearchRequestConfigAddressSearchMethodEnum   , CandyMachineSearchRequestUuidSearchMethodEnum   , CandyMachineSearchRequestSymbolSearchMethodEnum    , CandyMachineSearchRequestNftNameSearchMethodEnum  , CandyMachineSearchRequestNetworkEnum  , CandyMachineSearchRequestCandyMachineContractVersionEnum   } from './CandyMachineSearchRequest';
import { CreateTestCandyMachineRequest , CreateTestCandyMachineRequestNetworkEnum  , CreateTestCandyMachineRequestCandyMachineContractVersionEnum    } from './CreateTestCandyMachineRequest';
import { CreateTestCandyMachineResponse } from './CreateTestCandyMachineResponse';
import { DelistRequest } from './DelistRequest';
import { DelistResponse } from './DelistResponse';
import { DoubleTransferResponse } from './DoubleTransferResponse';
import { Endpoint } from './Endpoint';
import { EndpointReference } from './EndpointReference';
import { FeePayerWallet } from './FeePayerWallet';
import { GeneratePrivateKey } from './GeneratePrivateKey';
import { GetAllNFTsResponse } from './GetAllNFTsResponse';
import { GetAllNFTsResponseMintedNfts } from './GetAllNFTsResponseMintedNfts';
import { GetAllNFTsResponseUnmintedNfts } from './GetAllNFTsResponseUnmintedNfts';
import { GetCandyMachineIDRequest , GetCandyMachineIDRequestNetworkEnum   } from './GetCandyMachineIDRequest';
import { GetCandyMachineIDResponse , GetCandyMachineIDResponseCandyMachineContractVersionEnum   } from './GetCandyMachineIDResponse';
import { GetCandyMetadataErrorResponse } from './GetCandyMetadataErrorResponse';
import { GetCandyMetadataRequest   , GetCandyMetadataRequestNetworkEnum  , GetCandyMetadataRequestCandyMachineContractVersionEnum   } from './GetCandyMetadataRequest';
import { GetCandyMetadataResponse } from './GetCandyMetadataResponse';
import { GetCandyMetadataResponseCreators } from './GetCandyMetadataResponseCreators';
import { GetFileResponse } from './GetFileResponse';
import { GetNFTListingResponse, GetNFTListingResponseExchangeEnum        } from './GetNFTListingResponse';
import { GetPublicKeyRequest } from './GetPublicKeyRequest';
import { GetSPLTokenResponse } from './GetSPLTokenResponse';
import { Group } from './Group';
import { ListNFTsResponse } from './ListNFTsResponse';
import { ListRequest } from './ListRequest';
import { ListResponse } from './ListResponse';
import { MintNFTErrorResponse } from './MintNFTErrorResponse';
import { MintNFTRequest  , MintNFTRequestNetworkEnum  , MintNFTRequestCandyMachineContractVersionEnum   } from './MintNFTRequest';
import { MintNFTResponse } from './MintNFTResponse';
import { NFT } from './NFT';
import { NFTAnalyticsRequest } from './NFTAnalyticsRequest';
import { NFTAnalyticsResponse } from './NFTAnalyticsResponse';
import { NFTAnalyticsResponseTransactionHistory } from './NFTAnalyticsResponseTransactionHistory';
import { NFTData } from './NFTData';
import { NFTMintErrorResponse } from './NFTMintErrorResponse';
import { NFTMintFee } from './NFTMintFee';
import { NFTMintRequest      , NFTMintRequestNftUploadMethodEnum        , NFTMintRequestNetworkEnum   } from './NFTMintRequest';
import { NFTOwnerResponse } from './NFTOwnerResponse';
import { NFTSearchRequest , NFTSearchRequestUpdateAuthoritySearchMethodEnum   , NFTSearchRequestMintAddressSearchMethodEnum   , NFTSearchRequestNameSearchMethodEnum   , NFTSearchRequestUriSearchMethodEnum   , NFTSearchRequestSymbolSearchMethodEnum  , NFTSearchRequestNetworkEnum   } from './NFTSearchRequest';
import { NFTSearchResponse } from './NFTSearchResponse';
import { NFTTransaction , NFTTransactionExchangeEnum  , NFTTransactionExchangeReadableEnum   , NFTTransactionOperationEnum      } from './NFTTransaction';
import { ParameterSpecification, ParameterSpecificationTypeEnum      } from './ParameterSpecification';
import { PrivateKey } from './PrivateKey';
import { Project } from './Project';
import { ProjectCreateRequest } from './ProjectCreateRequest';
import { ProjectDeploymentURL } from './ProjectDeploymentURL';
import { PublicKey } from './PublicKey';
import { SecretPhrase } from './SecretPhrase';
import { SecretRecoveryPhrase } from './SecretRecoveryPhrase';
import { StatItem } from './StatItem';
import { Transaction } from './Transaction';
import { TransactionResult } from './TransactionResult';
import { TransferRequest   , TransferRequestNetworkEnum       } from './TransferRequest';
import { TransferResponse } from './TransferResponse';
import { TransferResponseCompiled } from './TransferResponseCompiled';
import { UploadFileRequest, UploadFileRequestUploadMethodEnum   } from './UploadFileRequest';
import { Wallet } from './Wallet';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "AccountIsCandyMachineCandyMachineContractVersionEnum",
    "BalanceRequestUnitEnum",
    "BalanceRequestNetworkEnum",
    "BalanceResponseNetworkEnum",
    "BalanceResponseUnitEnum",
    "CandyMachineSearchRequestUpdateAuthoritySearchMethodEnum",
    "CandyMachineSearchRequestConfigAddressSearchMethodEnum",
    "CandyMachineSearchRequestUuidSearchMethodEnum",
    "CandyMachineSearchRequestSymbolSearchMethodEnum",
    "CandyMachineSearchRequestNftNameSearchMethodEnum",
    "CandyMachineSearchRequestNetworkEnum",
    "CandyMachineSearchRequestCandyMachineContractVersionEnum",
    "CreateTestCandyMachineRequestNetworkEnum",
    "CreateTestCandyMachineRequestCandyMachineContractVersionEnum",
    "GetCandyMachineIDRequestNetworkEnum",
    "GetCandyMachineIDResponseCandyMachineContractVersionEnum",
    "GetCandyMetadataRequestNetworkEnum",
    "GetCandyMetadataRequestCandyMachineContractVersionEnum",
    "GetNFTListingResponseExchangeEnum",
    "MintNFTRequestNetworkEnum",
    "MintNFTRequestCandyMachineContractVersionEnum",
    "NFTMintRequestNftUploadMethodEnum",
    "NFTMintRequestNetworkEnum",
    "NFTSearchRequestUpdateAuthoritySearchMethodEnum",
    "NFTSearchRequestMintAddressSearchMethodEnum",
    "NFTSearchRequestNameSearchMethodEnum",
    "NFTSearchRequestUriSearchMethodEnum",
    "NFTSearchRequestSymbolSearchMethodEnum",
    "NFTSearchRequestNetworkEnum",
    "NFTTransactionExchangeEnum",
    "NFTTransactionExchangeReadableEnum",
    "NFTTransactionOperationEnum",
    "ParameterSpecificationTypeEnum",
    "TransferRequestNetworkEnum",
    "UploadFileRequestUploadMethodEnum",
]);

let typeMap: {[index: string]: any} = {
    "ATAResponse": ATAResponse,
    "Account": Account,
    "AccountContext": AccountContext,
    "AccountIsCandyMachine": AccountIsCandyMachine,
    "AccountIsNFT": AccountIsNFT,
    "AccountValue": AccountValue,
    "AirdropRequest": AirdropRequest,
    "B58PrivateKey": B58PrivateKey,
    "BalanceRequest": BalanceRequest,
    "BalanceResponse": BalanceResponse,
    "BuyRequest": BuyRequest,
    "BuyResponse": BuyResponse,
    "CandyMachineSearchRequest": CandyMachineSearchRequest,
    "CreateTestCandyMachineRequest": CreateTestCandyMachineRequest,
    "CreateTestCandyMachineResponse": CreateTestCandyMachineResponse,
    "DelistRequest": DelistRequest,
    "DelistResponse": DelistResponse,
    "DoubleTransferResponse": DoubleTransferResponse,
    "Endpoint": Endpoint,
    "EndpointReference": EndpointReference,
    "FeePayerWallet": FeePayerWallet,
    "GeneratePrivateKey": GeneratePrivateKey,
    "GetAllNFTsResponse": GetAllNFTsResponse,
    "GetAllNFTsResponseMintedNfts": GetAllNFTsResponseMintedNfts,
    "GetAllNFTsResponseUnmintedNfts": GetAllNFTsResponseUnmintedNfts,
    "GetCandyMachineIDRequest": GetCandyMachineIDRequest,
    "GetCandyMachineIDResponse": GetCandyMachineIDResponse,
    "GetCandyMetadataErrorResponse": GetCandyMetadataErrorResponse,
    "GetCandyMetadataRequest": GetCandyMetadataRequest,
    "GetCandyMetadataResponse": GetCandyMetadataResponse,
    "GetCandyMetadataResponseCreators": GetCandyMetadataResponseCreators,
    "GetFileResponse": GetFileResponse,
    "GetNFTListingResponse": GetNFTListingResponse,
    "GetPublicKeyRequest": GetPublicKeyRequest,
    "GetSPLTokenResponse": GetSPLTokenResponse,
    "Group": Group,
    "ListNFTsResponse": ListNFTsResponse,
    "ListRequest": ListRequest,
    "ListResponse": ListResponse,
    "MintNFTErrorResponse": MintNFTErrorResponse,
    "MintNFTRequest": MintNFTRequest,
    "MintNFTResponse": MintNFTResponse,
    "NFT": NFT,
    "NFTAnalyticsRequest": NFTAnalyticsRequest,
    "NFTAnalyticsResponse": NFTAnalyticsResponse,
    "NFTAnalyticsResponseTransactionHistory": NFTAnalyticsResponseTransactionHistory,
    "NFTData": NFTData,
    "NFTMintErrorResponse": NFTMintErrorResponse,
    "NFTMintFee": NFTMintFee,
    "NFTMintRequest": NFTMintRequest,
    "NFTOwnerResponse": NFTOwnerResponse,
    "NFTSearchRequest": NFTSearchRequest,
    "NFTSearchResponse": NFTSearchResponse,
    "NFTTransaction": NFTTransaction,
    "ParameterSpecification": ParameterSpecification,
    "PrivateKey": PrivateKey,
    "Project": Project,
    "ProjectCreateRequest": ProjectCreateRequest,
    "ProjectDeploymentURL": ProjectDeploymentURL,
    "PublicKey": PublicKey,
    "SecretPhrase": SecretPhrase,
    "SecretRecoveryPhrase": SecretRecoveryPhrase,
    "StatItem": StatItem,
    "Transaction": Transaction,
    "TransactionResult": TransactionResult,
    "TransferRequest": TransferRequest,
    "TransferResponse": TransferResponse,
    "TransferResponseCompiled": TransferResponseCompiled,
    "UploadFileRequest": UploadFileRequest,
    "Wallet": Wallet,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
