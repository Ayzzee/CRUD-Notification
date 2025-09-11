import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "./notif.repository";

@Injectable()
export class NotificationService {
    update(id: string, notification: any) {
        return this.notificationRepository.update(id, notification);
    }
    delete(id: string) {
        return   this.notificationRepository.delete(id);
    }

    findAll() {
        return this.notificationRepository.findAll();
    }
    constructor(private readonly notificationRepository: NotificationRepository) {}
    create(notification: any) {
        return this.notificationRepository.create(notification);
    }
}