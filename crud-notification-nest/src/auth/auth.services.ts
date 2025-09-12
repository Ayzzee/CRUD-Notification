import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}
    
    login(body: { username: string; password: string; }) {
        const user = this.usersService.findOne(body.username);
        if (user && user.password === body.password) {
            return { message: 'Login successful' };
        } else {
            return { message: 'Invalid credentials' };
        }
        
    }

}
