export class ResponseListBase<T>{
    page?: number;
    perPage?: number;
    data: Array<T>;

    constructor(page?: number, perPage?: number, data: Array<T> = []){
        this.page = page;
        this.perPage = perPage;
        this.data = data;
    }
}