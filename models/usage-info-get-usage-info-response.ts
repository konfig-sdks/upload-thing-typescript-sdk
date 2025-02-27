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
 * @interface UsageInfoGetUsageInfoResponse
 */
export interface UsageInfoGetUsageInfoResponse {
    /**
     * Total bytes used counting towards the quota. For free apps this means the total bytes used by all free apps, for paid apps this will be the same as `appTotalBytes`.
     * @type {number}
     * @memberof UsageInfoGetUsageInfoResponse
     */
    'totalBytes': number;
    /**
     * Total bytes used by this app.
     * @type {number}
     * @memberof UsageInfoGetUsageInfoResponse
     */
    'appTotalBytes': number;
    /**
     * Total number of files uploaded by this app.
     * @type {number}
     * @memberof UsageInfoGetUsageInfoResponse
     */
    'filesUploaded': number;
    /**
     * The allocated storage quota for the app in bytes.
     * @type {number}
     * @memberof UsageInfoGetUsageInfoResponse
     */
    'limitBytes': number;
}

