import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose";

import { Notification, NotificationDocument } from "./schemas/notif.schemas";

@Injectable()
 export class NotificationRepository {
    findAll() {
        return this.notificationModel.find().exec();
    }
    constructor(@InjectModel(Notification.name) private notificationModel: Model<NotificationDocument>) {} 

    create(Notification: Notification){
        const notification = this.notificationModel.create(Notification)
        return notification
    }

 }