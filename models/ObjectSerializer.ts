export * from './ATAResponse';
export * from './Account';
export * from './AccountContext';
export * from './AccountIsCandyMachine';
export * from './AccountIsNFT';
export * from './AccountValue';
export * from './AirdropRequest';
export * from './AvalancheCChainPublicAddress';
export * from './AvalancheXPChainPublicAddress';
export * from './B58PrivateKey';
export * from './BSCPublicAddress';
export * from './BalanceRequest';
export * from './BalanceResponse';
export * from './CCPayment';
export * from './CCPaymentBlockchainPaymentDetails';
export * from './CCProject';
export * from './CCProjectCreateRequest';
export * from './CCProjectCreateRequestCustomerIdToCollect';
export * from './CCProjectCreateRequestPayoutMethod';
export * from './CCWebhook';
export * from './CCWebhookValidateRequest';
export * from './CandyMachineSearchRequest';
export * from './DoubleTransferResponse';
export * from './EthereumPublicAddress';
export * from './EthereumTransaction';
export * from './EthereumTransactionCompiledResponse';
export * from './EthereumTransactionMadeResponse';
export * from './FeePayerWallet';
export * from './GeneralAirdropRequest';
export * from './GeneralB58PrivateKey';
export * from './GeneralBalanceRequest';
export * from './GeneralBalanceResponse';
export * from './GeneralFeePayerWallet';
export * from './GeneralGeneratePrivateKeyResponse';
export * from './GeneralPrivateKey';
export * from './GeneralSecretPhrase';
export * from './GeneralSecretRecoveryPhrase';
export * from './GeneralTransaction';
export * from './GeneralTransactionMadeResponse';
export * from './GeneralTransactionResponse';
export * from './GeneralTransferRequest';
export * from './GeneralWallet';
export * from './GeneratePrivateKey';
export * from './GenerateSeedPhraseRequest';
export * from './GetAllNFTsResponse';
export * from './GetAllNFTsResponseMintedNfts';
export * from './GetAllNFTsResponseUnmintedNfts';
export * from './GetCandyMachineIDRequest';
export * from './GetCandyMachineIDResponse';
export * from './GetCandyMetadataErrorResponse';
export * from './GetCandyMetadataRequest';
export * from './GetCandyMetadataResponse';
export * from './GetCandyMetadataResponseCreators';
export * from './GetPublicKeyRequest';
export * from './GetSPLTokenResponse';
export * from './HexPrivateKey';
export * from './InputBlockchainIdentifier';
export * from './InputName';
export * from './ListNFTsResponse';
export * from './NFT';
export * from './NFTCollection';
export * from './NFTData';
export * from './NFTMintErrorResponse';
export * from './NFTMintFee';
export * from './NFTMintRequest';
export * from './NFTOwnerAdvancedResponse';
export * from './NFTOwnerAdvancedResponseContract';
export * from './NFTOwnerResponse';
export * from './NFTSearchRequest';
export * from './NFTSearchResponse';
export * from './NearPublicKey';
export * from './PrivateKey';
export * from './PublicKey';
export * from './SecretPhrase';
export * from './SecretRecoveryPhrase';
export * from './SolanaPublicKey';
export * from './SolanaTransaction';
export * from './SolanaTransactionCompiledResponse';
export * from './SolanaTransactionMadeResponse';
export * from './SupplyWalletRequest';
export * from './TokenMetadataResponse';
export * from './Transaction';
export * from './TransactionResult';
export * from './TransferRequest';
export * from './TransferResponse';
export * from './TransferResponseCompiled';
export * from './Wallet';
export * from './WalletIdentifiers';

import { ATAResponse } from './ATAResponse';
import { Account } from './Account';
import { AccountContext } from './AccountContext';
import { AccountIsCandyMachine , AccountIsCandyMachineCandyMachineContractVersionEnum   } from './AccountIsCandyMachine';
import { AccountIsNFT } from './AccountIsNFT';
import { AccountValue } from './AccountValue';
import { AirdropRequest } from './AirdropRequest';
import { AvalancheCChainPublicAddress } from './AvalancheCChainPublicAddress';
import { AvalancheXPChainPublicAddress } from './AvalancheXPChainPublicAddress';
import { B58PrivateKey } from './B58PrivateKey';
import { BSCPublicAddress } from './BSCPublicAddress';
import { BalanceRequest , BalanceRequestUnitEnum  , BalanceRequestNetworkEnum    } from './BalanceRequest';
import { BalanceResponse   , BalanceResponseNetworkEnum  , BalanceResponseUnitEnum   } from './BalanceResponse';
import { CCPayment } from './CCPayment';
import { CCPaymentBlockchainPaymentDetails, CCPaymentBlockchainPaymentDetailsChainEnum        } from './CCPaymentBlockchainPaymentDetails';
import { CCProject } from './CCProject';
import { CCProjectCreateRequest } from './CCProjectCreateRequest';
import { CCProjectCreateRequestCustomerIdToCollect, CCProjectCreateRequestCustomerIdToCollectIdTypeEnum      } from './CCProjectCreateRequestCustomerIdToCollect';
import { CCProjectCreateRequestPayoutMethod } from './CCProjectCreateRequestPayoutMethod';
import { CCWebhook } from './CCWebhook';
import { CCWebhookValidateRequest } from './CCWebhookValidateRequest';
import { CandyMachineSearchRequest , CandyMachineSearchRequestUpdateAuthoritySearchMethodEnum   , CandyMachineSearchRequestConfigAddressSearchMethodEnum   , CandyMachineSearchRequestUuidSearchMethodEnum   , CandyMachineSearchRequestSymbolSearchMethodEnum    , CandyMachineSearchRequestNftNameSearchMethodEnum  , CandyMachineSearchRequestNetworkEnum  , CandyMachineSearchRequestCandyMachineContractVersionEnum   } from './CandyMachineSearchRequest';
import { DoubleTransferResponse } from './DoubleTransferResponse';
import { EthereumPublicAddress } from './EthereumPublicAddress';
import { EthereumTransaction } from './EthereumTransaction';
import { EthereumTransactionCompiledResponse } from './EthereumTransactionCompiledResponse';
import { EthereumTransactionMadeResponse } from './EthereumTransactionMadeResponse';
import { FeePayerWallet } from './FeePayerWallet';
import { GeneralAirdropRequest } from './GeneralAirdropRequest';
import { GeneralB58PrivateKey } from './GeneralB58PrivateKey';
import { GeneralBalanceRequest } from './GeneralBalanceRequest';
import { GeneralBalanceResponse } from './GeneralBalanceResponse';
import { GeneralFeePayerWallet } from './GeneralFeePayerWallet';
import { GeneralGeneratePrivateKeyResponse } from './GeneralGeneratePrivateKeyResponse';
import { GeneralPrivateKey } from './GeneralPrivateKey';
import { GeneralSecretPhrase } from './GeneralSecretPhrase';
import { GeneralSecretRecoveryPhrase } from './GeneralSecretRecoveryPhrase';
import { GeneralTransaction } from './GeneralTransaction';
import { GeneralTransactionMadeResponse } from './GeneralTransactionMadeResponse';
import { GeneralTransactionResponse } from './GeneralTransactionResponse';
import { GeneralTransferRequest } from './GeneralTransferRequest';
import { GeneralWallet } from './GeneralWallet';
import { GeneratePrivateKey } from './GeneratePrivateKey';
import { GenerateSeedPhraseRequest } from './GenerateSeedPhraseRequest';
import { GetAllNFTsResponse } from './GetAllNFTsResponse';
import { GetAllNFTsResponseMintedNfts } from './GetAllNFTsResponseMintedNfts';
import { GetAllNFTsResponseUnmintedNfts } from './GetAllNFTsResponseUnmintedNfts';
import { GetCandyMachineIDRequest , GetCandyMachineIDRequestNetworkEnum   } from './GetCandyMachineIDRequest';
import { GetCandyMachineIDResponse , GetCandyMachineIDResponseCandyMachineContractVersionEnum   } from './GetCandyMachineIDResponse';
import { GetCandyMetadataErrorResponse } from './GetCandyMetadataErrorResponse';
import { GetCandyMetadataRequest   , GetCandyMetadataRequestNetworkEnum  , GetCandyMetadataRequestCandyMachineContractVersionEnum   } from './GetCandyMetadataRequest';
import { GetCandyMetadataResponse } from './GetCandyMetadataResponse';
import { GetCandyMetadataResponseCreators } from './GetCandyMetadataResponseCreators';
import { GetPublicKeyRequest } from './GetPublicKeyRequest';
import { GetSPLTokenResponse } from './GetSPLTokenResponse';
import { HexPrivateKey } from './HexPrivateKey';
import { InputBlockchainIdentifier } from './InputBlockchainIdentifier';
import { InputName } from './InputName';
import { ListNFTsResponse } from './ListNFTsResponse';
import { NFT } from './NFT';
import { NFTCollection } from './NFTCollection';
import { NFTData } from './NFTData';
import { NFTMintErrorResponse } from './NFTMintErrorResponse';
import { NFTMintFee } from './NFTMintFee';
import { NFTMintRequest     , NFTMintRequestUploadMethodEnum           , NFTMintRequestNetworkEnum   } from './NFTMintRequest';
import { NFTOwnerAdvancedResponse   , NFTOwnerAdvancedResponseStateEnum   } from './NFTOwnerAdvancedResponse';
import { NFTOwnerAdvancedResponseContract, NFTOwnerAdvancedResponseContractContractTypeEnum      } from './NFTOwnerAdvancedResponseContract';
import { NFTOwnerResponse } from './NFTOwnerResponse';
import { NFTSearchRequest , NFTSearchRequestUpdateAuthoritySearchMethodEnum   , NFTSearchRequestMintAddressSearchMethodEnum   , NFTSearchRequestNameSearchMethodEnum   , NFTSearchRequestUriSearchMethodEnum   , NFTSearchRequestSymbolSearchMethodEnum  , NFTSearchRequestNetworkEnum   } from './NFTSearchRequest';
import { NFTSearchResponse } from './NFTSearchResponse';
import { NearPublicKey } from './NearPublicKey';
import { PrivateKey } from './PrivateKey';
import { PublicKey } from './PublicKey';
import { SecretPhrase } from './SecretPhrase';
import { SecretRecoveryPhrase } from './SecretRecoveryPhrase';
import { SolanaPublicKey } from './SolanaPublicKey';
import { SolanaTransaction } from './SolanaTransaction';
import { SolanaTransactionCompiledResponse } from './SolanaTransactionCompiledResponse';
import { SolanaTransactionMadeResponse } from './SolanaTransactionMadeResponse';
import { SupplyWalletRequest } from './SupplyWalletRequest';
import { TokenMetadataResponse } from './TokenMetadataResponse';
import { Transaction } from './Transaction';
import { TransactionResult } from './TransactionResult';
import { TransferRequest    , TransferRequestNetworkEnum       } from './TransferRequest';
import { TransferResponse } from './TransferResponse';
import { TransferResponseCompiled } from './TransferResponseCompiled';
import { Wallet } from './Wallet';
import { WalletIdentifiers } from './WalletIdentifiers';

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
    "CCPaymentBlockchainPaymentDetailsChainEnum",
    "CCProjectCreateRequestCustomerIdToCollectIdTypeEnum",
    "CandyMachineSearchRequestUpdateAuthoritySearchMethodEnum",
    "CandyMachineSearchRequestConfigAddressSearchMethodEnum",
    "CandyMachineSearchRequestUuidSearchMethodEnum",
    "CandyMachineSearchRequestSymbolSearchMethodEnum",
    "CandyMachineSearchRequestNftNameSearchMethodEnum",
    "CandyMachineSearchRequestNetworkEnum",
    "CandyMachineSearchRequestCandyMachineContractVersionEnum",
    "GetCandyMachineIDRequestNetworkEnum",
    "GetCandyMachineIDResponseCandyMachineContractVersionEnum",
    "GetCandyMetadataRequestNetworkEnum",
    "GetCandyMetadataRequestCandyMachineContractVersionEnum",
    "NFTMintRequestUploadMethodEnum",
    "NFTMintRequestNetworkEnum",
    "NFTOwnerAdvancedResponseStateEnum",
    "NFTOwnerAdvancedResponseContractContractTypeEnum",
    "NFTSearchRequestUpdateAuthoritySearchMethodEnum",
    "NFTSearchRequestMintAddressSearchMethodEnum",
    "NFTSearchRequestNameSearchMethodEnum",
    "NFTSearchRequestUriSearchMethodEnum",
    "NFTSearchRequestSymbolSearchMethodEnum",
    "NFTSearchRequestNetworkEnum",
    "TransferRequestNetworkEnum",
]);

let typeMap: {[index: string]: any} = {
    "ATAResponse": ATAResponse,
    "Account": Account,
    "AccountContext": AccountContext,
    "AccountIsCandyMachine": AccountIsCandyMachine,
    "AccountIsNFT": AccountIsNFT,
    "AccountValue": AccountValue,
    "AirdropRequest": AirdropRequest,
    "AvalancheCChainPublicAddress": AvalancheCChainPublicAddress,
    "AvalancheXPChainPublicAddress": AvalancheXPChainPublicAddress,
    "B58PrivateKey": B58PrivateKey,
    "BSCPublicAddress": BSCPublicAddress,
    "BalanceRequest": BalanceRequest,
    "BalanceResponse": BalanceResponse,
    "CCPayment": CCPayment,
    "CCPaymentBlockchainPaymentDetails": CCPaymentBlockchainPaymentDetails,
    "CCProject": CCProject,
    "CCProjectCreateRequest": CCProjectCreateRequest,
    "CCProjectCreateRequestCustomerIdToCollect": CCProjectCreateRequestCustomerIdToCollect,
    "CCProjectCreateRequestPayoutMethod": CCProjectCreateRequestPayoutMethod,
    "CCWebhook": CCWebhook,
    "CCWebhookValidateRequest": CCWebhookValidateRequest,
    "CandyMachineSearchRequest": CandyMachineSearchRequest,
    "DoubleTransferResponse": DoubleTransferResponse,
    "EthereumPublicAddress": EthereumPublicAddress,
    "EthereumTransaction": EthereumTransaction,
    "EthereumTransactionCompiledResponse": EthereumTransactionCompiledResponse,
    "EthereumTransactionMadeResponse": EthereumTransactionMadeResponse,
    "FeePayerWallet": FeePayerWallet,
    "GeneralAirdropRequest": GeneralAirdropRequest,
    "GeneralB58PrivateKey": GeneralB58PrivateKey,
    "GeneralBalanceRequest": GeneralBalanceRequest,
    "GeneralBalanceResponse": GeneralBalanceResponse,
    "GeneralFeePayerWallet": GeneralFeePayerWallet,
    "GeneralGeneratePrivateKeyResponse": GeneralGeneratePrivateKeyResponse,
    "GeneralPrivateKey": GeneralPrivateKey,
    "GeneralSecretPhrase": GeneralSecretPhrase,
    "GeneralSecretRecoveryPhrase": GeneralSecretRecoveryPhrase,
    "GeneralTransaction": GeneralTransaction,
    "GeneralTransactionMadeResponse": GeneralTransactionMadeResponse,
    "GeneralTransactionResponse": GeneralTransactionResponse,
    "GeneralTransferRequest": GeneralTransferRequest,
    "GeneralWallet": GeneralWallet,
    "GeneratePrivateKey": GeneratePrivateKey,
    "GenerateSeedPhraseRequest": GenerateSeedPhraseRequest,
    "GetAllNFTsResponse": GetAllNFTsResponse,
    "GetAllNFTsResponseMintedNfts": GetAllNFTsResponseMintedNfts,
    "GetAllNFTsResponseUnmintedNfts": GetAllNFTsResponseUnmintedNfts,
    "GetCandyMachineIDRequest": GetCandyMachineIDRequest,
    "GetCandyMachineIDResponse": GetCandyMachineIDResponse,
    "GetCandyMetadataErrorResponse": GetCandyMetadataErrorResponse,
    "GetCandyMetadataRequest": GetCandyMetadataRequest,
    "GetCandyMetadataResponse": GetCandyMetadataResponse,
    "GetCandyMetadataResponseCreators": GetCandyMetadataResponseCreators,
    "GetPublicKeyRequest": GetPublicKeyRequest,
    "GetSPLTokenResponse": GetSPLTokenResponse,
    "HexPrivateKey": HexPrivateKey,
    "InputBlockchainIdentifier": InputBlockchainIdentifier,
    "InputName": InputName,
    "ListNFTsResponse": ListNFTsResponse,
    "NFT": NFT,
    "NFTCollection": NFTCollection,
    "NFTData": NFTData,
    "NFTMintErrorResponse": NFTMintErrorResponse,
    "NFTMintFee": NFTMintFee,
    "NFTMintRequest": NFTMintRequest,
    "NFTOwnerAdvancedResponse": NFTOwnerAdvancedResponse,
    "NFTOwnerAdvancedResponseContract": NFTOwnerAdvancedResponseContract,
    "NFTOwnerResponse": NFTOwnerResponse,
    "NFTSearchRequest": NFTSearchRequest,
    "NFTSearchResponse": NFTSearchResponse,
    "NearPublicKey": NearPublicKey,
    "PrivateKey": PrivateKey,
    "PublicKey": PublicKey,
    "SecretPhrase": SecretPhrase,
    "SecretRecoveryPhrase": SecretRecoveryPhrase,
    "SolanaPublicKey": SolanaPublicKey,
    "SolanaTransaction": SolanaTransaction,
    "SolanaTransactionCompiledResponse": SolanaTransactionCompiledResponse,
    "SolanaTransactionMadeResponse": SolanaTransactionMadeResponse,
    "SupplyWalletRequest": SupplyWalletRequest,
    "TokenMetadataResponse": TokenMetadataResponse,
    "Transaction": Transaction,
    "TransactionResult": TransactionResult,
    "TransferRequest": TransferRequest,
    "TransferResponse": TransferResponse,
    "TransferResponseCompiled": TransferResponseCompiled,
    "Wallet": Wallet,
    "WalletIdentifiers": WalletIdentifiers,
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
