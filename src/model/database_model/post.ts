import { ParseObjectBase } from '../../parse';
import { User } from './user';


export class Post extends ParseObjectBase {
    constructor() {
        super(Post.name);
    }

    get message(): string {
        return this.get('message');
    }

    set message(value: string) {
        this.set('message', value);
    }

    get like(): number {
        return this.get('like');
    }

    set like(value: number) {
        this.set('like', value);
    }

    get user(): any {
        return this.get('user');
    }

    set user(value: any) {
        this.set('user', value);
    }
}