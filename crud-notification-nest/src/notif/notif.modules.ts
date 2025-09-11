import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Notification, NotificationSchema } from "./schemas/notif.schemas";
import { NotificationController } from "./notif.controller";
import { NotificationService } from "./notif.services";
import { NotificationRepository } from "./notif.repository";

@Module({
    imports: [MongooseModule.forFeature([{ name: Notification.name, schema: NotificationSchema}])],
    controllers: [NotificationController],
    providers: [NotificationService, NotificationRepository],
    exports: [MongooseModule]
})
export class NotificationModule {}