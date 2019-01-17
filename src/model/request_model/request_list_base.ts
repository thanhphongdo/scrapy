export interface OrderByInterface {
    field: string;
    asc?: boolean;
}

export class RequestListBase {
    page?: number = 1;
    perPage?: number = 10;
    order?: Array<OrderByInterface>;
    constructor(page?: number, perPage?: number, order?: Array<OrderByInterface>) {
        this.page = page || 1;
        this.perPage = perPage || 10;
        this.order = order || [];
    }
}