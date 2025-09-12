import { Injectable, Post } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';


type AuthEntry = {username: string, password: string};
type AuthResponse = {access_token: string};

@Injectable()
export class AuthService {
    constructor(private userService : UsersService) {}
    validateUser(authEntry: AuthEntry): AuthResponse | null {
        if (this.userService.findOne(authEntry.username)?.password === authEntry.password) {
            return {access_token: 'valid_token'};
        }
        return null;
    }
    authenticate( input : AuthEntry ): string {
        const user = this.validateUser(input);
        if (user) {
            return "token-pass";
        }
        return "token-fail";

    }
}
