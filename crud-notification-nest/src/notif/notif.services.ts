import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "./notif.repository";

@Injectable()
export class NotificationService {
    findAll() {
        return this.notificationRepository.findAll();
    }
    constructor(private readonly notificationRepository: NotificationRepository) {}
    create(notification: any) {
        return this.notificationRepository.create(notification);
    }
}