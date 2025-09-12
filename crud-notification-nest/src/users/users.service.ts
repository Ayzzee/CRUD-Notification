import { Injectable } from '@nestjs/common';


export type User = {
    username: string;
    password: string;
}

const users: User[] = [
    {username: 'admin', password: 'admin'}
];


@Injectable()
export class UsersService {
    findOne(username: string): User | undefined {
        return users.find(user => user.username === username); 
    }
}
