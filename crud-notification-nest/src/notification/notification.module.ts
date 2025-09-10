import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Notification, NotificationSchema } from './schemas/notification.schema';
import { NotificationService } from './notification.service';
import { NotificationRepository } from './notification.repository';
import { NotificationController } from './notification.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: Notification.name, schema: NotificationSchema }])], //Add the schema to the module
    controllers: [NotificationController],
    providers: [NotificationService, NotificationRepository],
})
export class NotificationModule {}