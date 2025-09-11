import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Notification, NotificationDocument } from './schemas/notification.schema';

@Injectable()
export class NotificationRepository {
    constructor(@InjectModel(Notification.name) private notificationModel : Model<NotificationDocument>) {}

    create(notification: Notification) {
        const newNotification = this.notificationModel.create(notification);
        return newNotification;
    }
    findAll() {
        return this.notificationModel.find().exec();
    }
}

