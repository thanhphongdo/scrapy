// import * as Parse from 'parse-server/node';
export interface LogsDataInterface { }

export interface CloundFunction {
    (params: any, request: Parse.Cloud.FunctionRequest): Promise<any>;
}

export interface CloudFunctionInterface<T> {
    call(params: any, request: Parse.Cloud.FunctionRequest): Promise<T>;
}

export class CloudFunctionBase {
    static unauthorized = {
        code: Parse.ErrorCode.INVALID_SESSION_TOKEN,
        message: 'unauthorized'
    }

    static success(data: any, logsData?: LogsDataInterface) {
        return data;
    }

    static error(data: any, logsData?: LogsDataInterface) {
        return new Parse.Error(data.code || Parse.ErrorCode.INTERNAL_SERVER_ERROR, data.message || 'internal server error');
    }

    async defineCloud(cloudFunction: CloundFunction) {
        Parse.Cloud.define(cloudFunction.name, async function (req: Parse.Cloud.FunctionRequest, res: any) {
            try {
                var result = await cloudFunction(req.params, req);
                return result;
            } catch (err) {
                throw CloudFunctionBase.error(err);
            }
        });
    }
}