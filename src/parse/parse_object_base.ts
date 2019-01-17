import { Object } from 'parse/node';
export class ParseObjectBase extends Parse.Object {

    public static newObject<T>(parseObj: Parse.Object, parseClass: any): T {
        let obj: any = new parseClass();
        obj._finishFetch(parseObj.toJSON());
        return obj;
    }

    public static newArrayObject<T>(parseObjs: Array<Parse.Object>, parseClass: any): Array<T> {
        let objArr: Array<T> = [];
        for (let i in parseObjs) {
            objArr.push(ParseObjectBase.newObject(parseObjs[i], parseClass));
        }
        return objArr;
    }

    async saveAsync<T>(attrs?: { [key: string]: any } | null, options?: Object.SaveOptions): Promise<T> {
        var data: any = await super.save(attrs, options);
        return data;
    } 

    async fetchAsync(options?: Object.FetchOptions){
        var data: any = await super.fetch(options);
        return data;
    }

    constructor(className?: string, data?: {[key: string]: any}) {
        super(className, data);
        
    }
}