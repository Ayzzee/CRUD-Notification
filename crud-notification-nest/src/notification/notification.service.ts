import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "./notification.repository";

@Injectable()
export class NotificationService {

    constructor(private readonly notificationRepository: NotificationRepository) {}

    create(notification: any) {
        return this.notificationRepository.create(notification);
    }

    findAll() {
        return this.notificationRepository.findAll();
    }

    delete(id: string) {
        return this.notificationRepository.delete(id);
    }

    update(id: string, notification: any) {
        return this.notificationRepository.update(id, notification);
    }
}
