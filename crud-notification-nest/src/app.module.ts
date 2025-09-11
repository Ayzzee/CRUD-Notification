import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [NotificationModule, MongooseModule.forRoot('mongodb://localhost/demo')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
