/* tslint:disable */
/* eslint-disable */
/*
UploadThing REST API

UploadThing is the easiest way to add file uploads to your full stack TypeScript application. Many services have tried to build a \"better S3\", but in our opinion, none found the right compromise of ownership, flexibility and safety.

The version of the OpenAPI document: 6.4.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrBadRequest } from '../models';
// @ts-ignore
import { ErrInternalServerError } from '../models';
// @ts-ignore
import { ErrUnauthorized } from '../models';
// @ts-ignore
import { ServerCallbackGetDataResponse } from '../models';
// @ts-ignore
import { ServerCallbackSetDataRequest } from '../models';
// @ts-ignore
import { ServerCallbackSetDataResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ServerCallbackApi - axios parameter creator
 * @export
 */
export const ServerCallbackApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Poll for server callback data. This is used to retrieve the data returned from `onUploadComplete` callback.
         * @param {string} authorization 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getData: async (authorization: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('getData', 'authorization', authorization)
            const localVarPath = `/serverCallback`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-uploadthing-api-key", keyParamName: "apiKeyAuth", configuration })
            if (authorization != null) {
                localVarHeaderParameter['authorization'] = String(authorization);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/serverCallback',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Set server callback data. This is used to set the data returned from `onUploadComplete` callback.
         * @param {string} xUploadthingVersion 
         * @param {string} [xUploadthingFePackage] 
         * @param {string} [xUploadthingBeAdapter] 
         * @param {ServerCallbackSetDataRequest} [serverCallbackSetDataRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setData: async (xUploadthingVersion: string, xUploadthingFePackage?: string, xUploadthingBeAdapter?: string, serverCallbackSetDataRequest?: ServerCallbackSetDataRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'xUploadthingVersion' is not null or undefined
            assertParamExists('setData', 'xUploadthingVersion', xUploadthingVersion)
            const localVarPath = `/serverCallback`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "x-uploadthing-api-key", keyParamName: "apiKeyAuth", configuration })
            if (xUploadthingVersion != null) {
                localVarHeaderParameter['x-uploadthing-version'] = String(xUploadthingVersion);
            }

            if (xUploadthingFePackage != null) {
                localVarHeaderParameter['x-uploadthing-fe-package'] = String(xUploadthingFePackage);
            }

            if (xUploadthingBeAdapter != null) {
                localVarHeaderParameter['x-uploadthing-be-adapter'] = String(xUploadthingBeAdapter);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: serverCallbackSetDataRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/serverCallback',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(serverCallbackSetDataRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ServerCallbackApi - functional programming interface
 * @export
 */
export const ServerCallbackApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ServerCallbackApiAxiosParamCreator(configuration)
    return {
        /**
         * Poll for server callback data. This is used to retrieve the data returned from `onUploadComplete` callback.
         * @param {ServerCallbackApiGetDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getData(requestParameters: ServerCallbackApiGetDataRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServerCallbackGetDataResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getData(requestParameters.authorization, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Set server callback data. This is used to set the data returned from `onUploadComplete` callback.
         * @param {ServerCallbackApiSetDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setData(requestParameters: ServerCallbackApiSetDataRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServerCallbackSetDataResponse>> {
            const serverCallbackSetDataRequest: ServerCallbackSetDataRequest = {
                fileKey: requestParameters.fileKey,
                callbackData: requestParameters.callbackData
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.setData(requestParameters.xUploadthingVersion, requestParameters.xUploadthingFePackage, requestParameters.xUploadthingBeAdapter, serverCallbackSetDataRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ServerCallbackApi - factory interface
 * @export
 */
export const ServerCallbackApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ServerCallbackApiFp(configuration)
    return {
        /**
         * Poll for server callback data. This is used to retrieve the data returned from `onUploadComplete` callback.
         * @param {ServerCallbackApiGetDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getData(requestParameters: ServerCallbackApiGetDataRequest, options?: AxiosRequestConfig): AxiosPromise<ServerCallbackGetDataResponse> {
            return localVarFp.getData(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Set server callback data. This is used to set the data returned from `onUploadComplete` callback.
         * @param {ServerCallbackApiSetDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setData(requestParameters: ServerCallbackApiSetDataRequest, options?: AxiosRequestConfig): AxiosPromise<ServerCallbackSetDataResponse> {
            return localVarFp.setData(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getData operation in ServerCallbackApi.
 * @export
 * @interface ServerCallbackApiGetDataRequest
 */
export type ServerCallbackApiGetDataRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof ServerCallbackApiGetData
    */
    readonly authorization: string
    
}

/**
 * Request parameters for setData operation in ServerCallbackApi.
 * @export
 * @interface ServerCallbackApiSetDataRequest
 */
export type ServerCallbackApiSetDataRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof ServerCallbackApiSetData
    */
    readonly xUploadthingVersion: string
    
    /**
    * 
    * @type {string}
    * @memberof ServerCallbackApiSetData
    */
    readonly xUploadthingFePackage?: string
    
    /**
    * 
    * @type {string}
    * @memberof ServerCallbackApiSetData
    */
    readonly xUploadthingBeAdapter?: string
    
} & ServerCallbackSetDataRequest

/**
 * ServerCallbackApiGenerated - object-oriented interface
 * @export
 * @class ServerCallbackApiGenerated
 * @extends {BaseAPI}
 */
export class ServerCallbackApiGenerated extends BaseAPI {
    /**
     * Poll for server callback data. This is used to retrieve the data returned from `onUploadComplete` callback.
     * @param {ServerCallbackApiGetDataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServerCallbackApiGenerated
     */
    public getData(requestParameters: ServerCallbackApiGetDataRequest, options?: AxiosRequestConfig) {
        return ServerCallbackApiFp(this.configuration).getData(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Set server callback data. This is used to set the data returned from `onUploadComplete` callback.
     * @param {ServerCallbackApiSetDataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ServerCallbackApiGenerated
     */
    public setData(requestParameters: ServerCallbackApiSetDataRequest, options?: AxiosRequestConfig) {
        return ServerCallbackApiFp(this.configuration).setData(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
