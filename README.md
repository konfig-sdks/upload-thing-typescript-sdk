<div align="left">

[![Visit Uploadthing](./header.png)](https://uploadthing.com)

# [Uploadthing](https://uploadthing.com)<a id="uploadthing"></a>

UploadThing is the easiest way to add file uploads to your full stack TypeScript application. Many services have tried to build a "better S3", but in our opinion, none found the right compromise of ownership, flexibility and safety.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`uploadthing.callback.markUploadFailed`](#uploadthingcallbackmarkuploadfailed)
  * [`uploadthing.file.getFileUrls`](#uploadthingfilegetfileurls)
  * [`uploadthing.file.listFiles`](#uploadthingfilelistfiles)
  * [`uploadthing.file.markForDeletion`](#uploadthingfilemarkfordeletion)
  * [`uploadthing.file.renameFiles`](#uploadthingfilerenamefiles)
  * [`uploadthing.file.requestPresignedUrl`](#uploadthingfilerequestpresignedurl)
  * [`uploadthing.file.requestPresignedUrls`](#uploadthingfilerequestpresignedurls)
  * [`uploadthing.file.updateFileName`](#uploadthingfileupdatefilename)
  * [`uploadthing.multipart.completeUpload`](#uploadthingmultipartcompleteupload)
  * [`uploadthing.serverCallback.getData`](#uploadthingservercallbackgetdata)
  * [`uploadthing.serverCallback.setData`](#uploadthingservercallbacksetdata)
  * [`uploadthing.upload.requestPresignedUrls`](#uploadthinguploadrequestpresignedurls)
  * [`uploadthing.usageInfo.getUsageInfo`](#uploadthingusageinfogetusageinfo)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=UploadThing&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { UploadThing } from "upload-thing-typescript-sdk";

const uploadthing = new UploadThing({
  // Defining the base path is optional and defaults to https://uploadthing.com/api
  // basePath: "https://uploadthing.com/api",
  apiKey: "API_KEY",
});

const markUploadFailedResponse = await uploadthing.callback.markUploadFailed({
  xUploadthingVersion: "6.4.0",
  xUploadthingFePackage: "@uploadthing/react",
  xUploadthingBeAdapter: "express",
  fileKey: "fileKey_example",
});

console.log(markUploadFailedResponse);
```

## Reference<a id="reference"></a>


### `uploadthing.callback.markUploadFailed`<a id="uploadthingcallbackmarkuploadfailed"></a>

Mark an upload as failed, or abort a multipart upload. This will free up resources and revert the storage quota.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const markUploadFailedResponse = await uploadthing.callback.markUploadFailed({
  xUploadthingVersion: "6.4.0",
  xUploadthingFePackage: "@uploadthing/react",
  xUploadthingBeAdapter: "express",
  fileKey: "fileKey_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileKey: `string`<a id="filekey-string"></a>

##### xUploadthingVersion: `string`<a id="xuploadthingversion-string"></a>

##### uploadId: `string`<a id="uploadid-string"></a>

The uploadId, only applicable for multipart uploads.

##### xUploadthingFePackage: `string`<a id="xuploadthingfepackage-string"></a>

##### xUploadthingBeAdapter: `string`<a id="xuploadthingbeadapter-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CallbackMarkUploadFailedResponse](./models/callback-mark-upload-failed-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/failureCallback` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `uploadthing.file.getFileUrls`<a id="uploadthingfilegetfileurls"></a>

Get a list of URLs for given file keys. This API is deprecated, use `https://utfs.io/f/FILE_KEY`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFileUrlsResponse = await uploadthing.file.getFileUrls({
  xUploadthingVersion: "6.4.0",
  xUploadthingFePackage: "@uploadthing/react",
  xUploadthingBeAdapter: "express",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xUploadthingVersion: `string`<a id="xuploadthingversion-string"></a>

##### files: `string`[]<a id="files-string"></a>

##### fileKeys: `string`[]<a id="filekeys-string"></a>

##### customIds: `string`[]<a id="customids-string"></a>

##### xUploadthingFePackage: `string`<a id="xuploadthingfepackage-string"></a>

##### xUploadthingBeAdapter: `string`<a id="xuploadthingbeadapter-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[FileGetFileUrlsResponse](./models/file-get-file-urls-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/getFileUrl` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `uploadthing.file.listFiles`<a id="uploadthingfilelistfiles"></a>

List files for the current app. Response is paginated.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFilesResponse = await uploadthing.file.listFiles({
  xUploadthingVersion: "6.4.0",
  xUploadthingFePackage: "@uploadthing/react",
  xUploadthingBeAdapter: "express",
  limit: 500,
  offset: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of files to retrieve.

##### offset: `number`<a id="offset-number"></a>

The number of files to skip.

##### xUploadthingVersion: `string`<a id="xuploadthingversion-string"></a>

##### xUploadthingFePackage: `string`<a id="xuploadthingfepackage-string"></a>

##### xUploadthingBeAdapter: `string`<a id="xuploadthingbeadapter-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[FileListFilesResponse](./models/file-list-files-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/listFiles` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `uploadthing.file.markForDeletion`<a id="uploadthingfilemarkfordeletion"></a>

Mark files for deletion. The files will be deleted at the storage provider shortly after.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const markForDeletionResponse = await uploadthing.file.markForDeletion({
  xUploadthingVersion: "6.4.0",
  xUploadthingFePackage: "@uploadthing/react",
  xUploadthingBeAdapter: "express",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xUploadthingVersion: `string`<a id="xuploadthingversion-string"></a>

##### files: `string`[]<a id="files-string"></a>

##### fileKeys: `string`[]<a id="filekeys-string"></a>

##### customIds: `string`[]<a id="customids-string"></a>

##### xUploadthingFePackage: `string`<a id="xuploadthingfepackage-string"></a>

##### xUploadthingBeAdapter: `string`<a id="xuploadthingbeadapter-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[FileMarkForDeletionResponse](./models/file-mark-for-deletion-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/deleteFile` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `uploadthing.file.renameFiles`<a id="uploadthingfilerenamefiles"></a>

Rename files.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const renameFilesResponse = await uploadthing.file.renameFiles({
  xUploadthingVersion: "6.4.0",
  xUploadthingFePackage: "@uploadthing/react",
  xUploadthingBeAdapter: "express",
  updates: [
    {
      newName: "newName_example",
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### updates: [`FileRenameFilesRequestUpdatesInner`](./models/file-rename-files-request-updates-inner.ts)[]<a id="updates-filerenamefilesrequestupdatesinnermodelsfile-rename-files-request-updates-innerts"></a>

##### xUploadthingVersion: `string`<a id="xuploadthingversion-string"></a>

##### xUploadthingFePackage: `string`<a id="xuploadthingfepackage-string"></a>

##### xUploadthingBeAdapter: `string`<a id="xuploadthingbeadapter-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[FileRenameFilesResponse](./models/file-rename-files-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/renameFiles` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `uploadthing.file.requestPresignedUrl`<a id="uploadthingfilerequestpresignedurl"></a>

Request a presigned GET url for a private file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestPresignedUrlResponse = await uploadthing.file.requestPresignedUrl({
  xUploadthingVersion: "6.4.0",
  xUploadthingFePackage: "@uploadthing/react",
  xUploadthingBeAdapter: "express",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xUploadthingVersion: `string`<a id="xuploadthingversion-string"></a>

##### fileKey: `string`<a id="filekey-string"></a>

##### customId: `string`<a id="customid-string"></a>

##### expiresIn: `number`<a id="expiresin-number"></a>

##### xUploadthingFePackage: `string`<a id="xuploadthingfepackage-string"></a>

##### xUploadthingBeAdapter: `string`<a id="xuploadthingbeadapter-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[FileRequestPresignedUrlResponse](./models/file-request-presigned-url-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/requestFileAccess` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `uploadthing.file.requestPresignedUrls`<a id="uploadthingfilerequestpresignedurls"></a>

Request presigned URLs for file uploads without file routes. NOTE: This spec complies with SDK versions ^6.4. Response may vary for older versions.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestPresignedUrlsResponse =
  await uploadthing.file.requestPresignedUrls({
    xUploadthingVersion: "6.4.0",
    xUploadthingFePackage: "@uploadthing/react",
    xUploadthingBeAdapter: "express",
    files: [
      {
        name: "name_example",
        size: 0,
        type: "type_example",
      },
    ],
    acl: "public-read",
    contentDisposition: "inline",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### files: [`FileRequestPresignedUrlsRequestFilesInner`](./models/file-request-presigned-urls-request-files-inner.ts)[]<a id="files-filerequestpresignedurlsrequestfilesinnermodelsfile-request-presigned-urls-request-files-innerts"></a>

##### contentDisposition: `string`<a id="contentdisposition-string"></a>

##### xUploadthingVersion: `string`<a id="xuploadthingversion-string"></a>

##### acl: `string`<a id="acl-string"></a>

##### metadata: `any`<a id="metadata-any"></a>

##### xUploadthingFePackage: `string`<a id="xuploadthingfepackage-string"></a>

##### xUploadthingBeAdapter: `string`<a id="xuploadthingbeadapter-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[FileRequestPresignedUrlsResponse](./models/file-request-presigned-urls-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/uploadFiles` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `uploadthing.file.updateFileName`<a id="uploadthingfileupdatefilename"></a>

Use /renameFiles instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFileNameResponse = await uploadthing.file.updateFileName({
  xUploadthingVersion: "6.4.0",
  xUploadthingFePackage: "@uploadthing/react",
  xUploadthingBeAdapter: "express",
  updates: [
    {
      newName: "newName_example",
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### updates: [`FileRenameFilesRequestUpdatesInner`](./models/file-rename-files-request-updates-inner.ts)[]<a id="updates-filerenamefilesrequestupdatesinnermodelsfile-rename-files-request-updates-innerts"></a>

##### xUploadthingVersion: `string`<a id="xuploadthingversion-string"></a>

##### xUploadthingFePackage: `string`<a id="xuploadthingfepackage-string"></a>

##### xUploadthingBeAdapter: `string`<a id="xuploadthingbeadapter-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[FileUpdateFileNameResponse](./models/file-update-file-name-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/renameFile` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `uploadthing.multipart.completeUpload`<a id="uploadthingmultipartcompleteupload"></a>

Complete a multipart upload. This will finalize the upload and make the file available for download.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const completeUploadResponse = await uploadthing.multipart.completeUpload({
  xUploadthingVersion: "6.4.0",
  xUploadthingFePackage: "@uploadthing/react",
  xUploadthingBeAdapter: "express",
  fileKey: "fileKey_example",
  uploadId: "uploadId_example",
  etags: [
    {
      tag: "tag_example",
      partNumber: 3.14,
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileKey: `string`<a id="filekey-string"></a>

##### uploadId: `string`<a id="uploadid-string"></a>

##### etags: [`MultipartCompleteUploadRequestEtagsInner`](./models/multipart-complete-upload-request-etags-inner.ts)[]<a id="etags-multipartcompleteuploadrequestetagsinnermodelsmultipart-complete-upload-request-etags-innerts"></a>

##### xUploadthingVersion: `string`<a id="xuploadthingversion-string"></a>

##### xUploadthingFePackage: `string`<a id="xuploadthingfepackage-string"></a>

##### xUploadthingBeAdapter: `string`<a id="xuploadthingbeadapter-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MultipartCompleteUploadResponse](./models/multipart-complete-upload-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/completeMultipart` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `uploadthing.serverCallback.getData`<a id="uploadthingservercallbackgetdata"></a>

Poll for server callback data. This is used to retrieve the data returned from `onUploadComplete` callback.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDataResponse = await uploadthing.serverCallback.getData({
  authorization: "authorization_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization: `string`<a id="authorization-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ServerCallbackGetDataResponse](./models/server-callback-get-data-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/serverCallback` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `uploadthing.serverCallback.setData`<a id="uploadthingservercallbacksetdata"></a>

Set server callback data. This is used to set the data returned from `onUploadComplete` callback.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setDataResponse = await uploadthing.serverCallback.setData({
  xUploadthingVersion: "6.4.0",
  xUploadthingFePackage: "@uploadthing/react",
  xUploadthingBeAdapter: "express",
  fileKey: "fileKey_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileKey: `string`<a id="filekey-string"></a>

##### xUploadthingVersion: `string`<a id="xuploadthingversion-string"></a>

##### callbackData: `any`<a id="callbackdata-any"></a>

##### xUploadthingFePackage: `string`<a id="xuploadthingfepackage-string"></a>

##### xUploadthingBeAdapter: `string`<a id="xuploadthingbeadapter-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ServerCallbackSetDataResponse](./models/server-callback-set-data-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/serverCallback` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `uploadthing.upload.requestPresignedUrls`<a id="uploadthinguploadrequestpresignedurls"></a>

Request presigned URLs for file uploads through based on your file router. NOTE: This spec complies with SDK versions ^6.4. Response may vary for older versions.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestPresignedUrlsResponse =
  await uploadthing.upload.requestPresignedUrls({
    xUploadthingVersion: "6.4.0",
    xUploadthingFePackage: "@uploadthing/react",
    xUploadthingBeAdapter: "express",
    callbackUrl: "callbackUrl_example",
    callbackSlug: "callbackSlug_example",
    files: [
      {
        name: "name_example",
        size: 0,
      },
    ],
    routeConfig: ["string_example"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### callbackUrl: `string`<a id="callbackurl-string"></a>

##### callbackSlug: `string`<a id="callbackslug-string"></a>

##### files: [`UploadRequestPresignedUrlsRequestFilesInner`](./models/upload-request-presigned-urls-request-files-inner.ts)[]<a id="files-uploadrequestpresignedurlsrequestfilesinnermodelsupload-request-presigned-urls-request-files-innerts"></a>

##### routeConfig: [`RouteConfig`](./models/route-config.ts)<a id="routeconfig-routeconfigmodelsroute-configts"></a>

##### xUploadthingVersion: `string`<a id="xuploadthingversion-string"></a>

##### metadata: `any`<a id="metadata-any"></a>

##### xUploadthingFePackage: `string`<a id="xuploadthingfepackage-string"></a>

##### xUploadthingBeAdapter: `string`<a id="xuploadthingbeadapter-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UploadRequestPresignedUrlsResponseInner](./models/upload-request-presigned-urls-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/prepareUpload` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `uploadthing.usageInfo.getUsageInfo`<a id="uploadthingusageinfogetusageinfo"></a>

Retrieve usage info for the app associated with the provided API key.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUsageInfoResponse = await uploadthing.usageInfo.getUsageInfo({
  xUploadthingVersion: "6.4.0",
  xUploadthingFePackage: "@uploadthing/react",
  xUploadthingBeAdapter: "express",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xUploadthingVersion: `string`<a id="xuploadthingversion-string"></a>

##### xUploadthingFePackage: `string`<a id="xuploadthingfepackage-string"></a>

##### xUploadthingBeAdapter: `string`<a id="xuploadthingbeadapter-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsageInfoGetUsageInfoResponse](./models/usage-info-get-usage-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/getUsageInfo` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
