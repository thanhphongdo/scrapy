export class ParseQueryBase extends Parse.Query {
    objClass: any;
    constructor(objClass: any) {
        super(objClass.name);
        this.objClass = objClass
    }

    async findAsync<T>(options?: Parse.Query.FindOptions): Promise<Array<T>> {
        var data = await super.find(options);
        return this.objClass.newArrayObject(data, this.objClass);
    }

    async firstAsync<T>(options?: Parse.Query.FindOptions): Promise<T> {
        var data = await super.first(options);
        return this.objClass.newObject(data, this.objClass);
    }

    async getAsync<T>(objectId: string, options?: Parse.Query.FindOptions): Promise<T> {
        var data = await super.get(objectId, options);
        return this.objClass.newObject(data, this.objClass);
    }
}