import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.services';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.modules';

@Module({
    imports: [UsersModule],
    providers: [AuthService],
    controllers: [AuthController],
    exports: [AuthService]
})
export class AuthModule {}
