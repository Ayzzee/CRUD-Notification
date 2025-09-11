import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationModule } from './notif/notif.modules';

@Module({
  imports: [NotificationModule, MongooseModule.forRoot('mongodb://localhost/demo)')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
