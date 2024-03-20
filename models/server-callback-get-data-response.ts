/*
UploadThing REST API

UploadThing is the easiest way to add file uploads to your full stack TypeScript application. Many services have tried to build a \"better S3\", but in our opinion, none found the right compromise of ownership, flexibility and safety.

The version of the OpenAPI document: 6.4.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface ServerCallbackGetDataResponse
 */
export interface ServerCallbackGetDataResponse {
    /**
     * 
     * @type {string}
     * @memberof ServerCallbackGetDataResponse
     */
    'status': ServerCallbackGetDataResponseStatusEnum;
    /**
     * The callback data set by the server by calling the POST /serverCallback route
     * @type {any}
     * @memberof ServerCallbackGetDataResponse
     */
    'callbackData'?: any | null;
}

type ServerCallbackGetDataResponseStatusEnum = 'still waiting' | 'done'


