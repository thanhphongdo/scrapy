import { Object } from 'parse/node';

export class User extends Parse.User {
    constructor() {
        super();
    }

    get email(): string | undefined {
        return this.getEmail();
    }

    set email(value: string | undefined) {
        if (value) {
            this.setEmail(value);
        }
    }

    get firstName(): string{
        return this.get('firstName');
    }

    set firstName(value: string){
        this.set('firstName', value);
    }

    get lastName(): string{
        return this.get('lastName');
    }

    set lastName(value: string){
        this.set('lastName', value);
    }
}