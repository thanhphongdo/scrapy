export interface ConfigInterface{
    parseServer: {
        appName?: string;
        databaseURI?: string;
        cloud?: string;
        appId?: string;
        masterKey?: string;
        port?: number;
        serverURL?: string;
        publicServerURL?: string;
        liveQuery?: {
            classNames: string[];
        },
        maxUploadSize?: string;
    };
    [key: string]: any;
}