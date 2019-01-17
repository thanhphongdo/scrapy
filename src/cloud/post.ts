import { CloudFunctionBase } from '../parse/index';
import { RequestPost, RequestListPost, ResponseListBase, Post } from '../model/index';
import { ParseQueryBase } from '../parse';

export class PostCloud extends CloudFunctionBase {
    constructor() {
        super();
        this.defineCloud(this.addPost);
        this.defineCloud(this.listPost);
    }

    async addPost(params: RequestPost, request: Parse.Cloud.FunctionRequest): Promise<Post> {
        if (!request.user) {
            throw CloudFunctionBase.unauthorized;
        }
        var post = new Post();
        post.message = params.message;
        post.like = params.like;
        post.user = request.user;
        return await post.saveAsync<Post>(null, { useMasterKey: true });
    }

    async listPost(params: RequestListPost, request: Parse.Cloud.FunctionRequest): Promise<ResponseListBase<Post>> {
        let postQuery = new ParseQueryBase(Post);
        params.perPage = params.perPage || 10;
        params.page = params.page || 1;
        postQuery.limit(params.perPage);
        postQuery.skip(params.perPage * (params.page - 1));
        return new ResponseListBase<Post>(1, 10, await postQuery.findAsync<Post>({ useMasterKey: true }));
    }
}