type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/failureCallback-POST': {
        parameters: [
            {
                name: 'fileKey'
            },
            {
                name: 'x-uploadthing-version'
            },
            {
                name: 'uploadId'
            },
            {
                name: 'x-uploadthing-fe-package'
            },
            {
                name: 'x-uploadthing-be-adapter'
            },
        ]
    },
    '/getFileUrl-POST': {
        parameters: [
            {
                name: 'x-uploadthing-version'
            },
            {
                name: 'files'
            },
            {
                name: 'fileKeys'
            },
            {
                name: 'customIds'
            },
            {
                name: 'x-uploadthing-fe-package'
            },
            {
                name: 'x-uploadthing-be-adapter'
            },
        ]
    },
    '/listFiles-POST': {
        parameters: [
            {
                name: 'limit'
            },
            {
                name: 'offset'
            },
            {
                name: 'x-uploadthing-version'
            },
            {
                name: 'x-uploadthing-fe-package'
            },
            {
                name: 'x-uploadthing-be-adapter'
            },
        ]
    },
    '/deleteFile-POST': {
        parameters: [
            {
                name: 'x-uploadthing-version'
            },
            {
                name: 'files'
            },
            {
                name: 'fileKeys'
            },
            {
                name: 'customIds'
            },
            {
                name: 'x-uploadthing-fe-package'
            },
            {
                name: 'x-uploadthing-be-adapter'
            },
        ]
    },
    '/renameFiles-POST': {
        parameters: [
            {
                name: 'updates'
            },
            {
                name: 'x-uploadthing-version'
            },
            {
                name: 'x-uploadthing-fe-package'
            },
            {
                name: 'x-uploadthing-be-adapter'
            },
        ]
    },
    '/requestFileAccess-POST': {
        parameters: [
            {
                name: 'x-uploadthing-version'
            },
            {
                name: 'fileKey'
            },
            {
                name: 'customId'
            },
            {
                name: 'expiresIn'
            },
            {
                name: 'x-uploadthing-fe-package'
            },
            {
                name: 'x-uploadthing-be-adapter'
            },
        ]
    },
    '/uploadFiles-POST': {
        parameters: [
            {
                name: 'files'
            },
            {
                name: 'contentDisposition'
            },
            {
                name: 'x-uploadthing-version'
            },
            {
                name: 'acl'
            },
            {
                name: 'metadata'
            },
            {
                name: 'x-uploadthing-fe-package'
            },
            {
                name: 'x-uploadthing-be-adapter'
            },
        ]
    },
    '/renameFile-POST': {
        parameters: [
            {
                name: 'updates'
            },
            {
                name: 'x-uploadthing-version'
            },
            {
                name: 'x-uploadthing-fe-package'
            },
            {
                name: 'x-uploadthing-be-adapter'
            },
        ]
    },
    '/completeMultipart-POST': {
        parameters: [
            {
                name: 'fileKey'
            },
            {
                name: 'uploadId'
            },
            {
                name: 'etags'
            },
            {
                name: 'x-uploadthing-version'
            },
            {
                name: 'x-uploadthing-fe-package'
            },
            {
                name: 'x-uploadthing-be-adapter'
            },
        ]
    },
    '/serverCallback-GET': {
        parameters: [
            {
                name: 'authorization'
            },
        ]
    },
    '/serverCallback-POST': {
        parameters: [
            {
                name: 'fileKey'
            },
            {
                name: 'x-uploadthing-version'
            },
            {
                name: 'callbackData'
            },
            {
                name: 'x-uploadthing-fe-package'
            },
            {
                name: 'x-uploadthing-be-adapter'
            },
        ]
    },
    '/prepareUpload-POST': {
        parameters: [
            {
                name: 'callbackUrl'
            },
            {
                name: 'callbackSlug'
            },
            {
                name: 'files'
            },
            {
                name: 'routeConfig'
            },
            {
                name: 'x-uploadthing-version'
            },
            {
                name: 'metadata'
            },
            {
                name: 'x-uploadthing-fe-package'
            },
            {
                name: 'x-uploadthing-be-adapter'
            },
        ]
    },
    '/getUsageInfo-POST': {
        parameters: [
            {
                name: 'x-uploadthing-version'
            },
            {
                name: 'x-uploadthing-fe-package'
            },
            {
                name: 'x-uploadthing-be-adapter'
            },
        ]
    },
}