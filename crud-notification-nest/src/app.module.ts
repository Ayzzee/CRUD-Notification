import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationModule } from './notif/notif.modules';
import { UsersService } from './users/users.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.services';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [NotificationModule, MongooseModule.forRoot('mongodb://localhost/demo)'), AuthModule],
  controllers: [AppController, AuthController],
  providers: [AppService, UsersService, AuthService],
})
export class AppModule {}
