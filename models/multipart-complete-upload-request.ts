/*
UploadThing REST API

UploadThing is the easiest way to add file uploads to your full stack TypeScript application. Many services have tried to build a \"better S3\", but in our opinion, none found the right compromise of ownership, flexibility and safety.

The version of the OpenAPI document: 6.4.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MultipartCompleteUploadRequestEtagsInner } from './multipart-complete-upload-request-etags-inner';

/**
 * 
 * @export
 * @interface MultipartCompleteUploadRequest
 */
export interface MultipartCompleteUploadRequest {
    /**
     * 
     * @type {string}
     * @memberof MultipartCompleteUploadRequest
     */
    'fileKey': string;
    /**
     * 
     * @type {string}
     * @memberof MultipartCompleteUploadRequest
     */
    'uploadId': string;
    /**
     * 
     * @type {Array<MultipartCompleteUploadRequestEtagsInner>}
     * @memberof MultipartCompleteUploadRequest
     */
    'etags': Array<MultipartCompleteUploadRequestEtagsInner>;
}

