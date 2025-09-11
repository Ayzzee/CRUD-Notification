import { Controller, Get, Post } from "@nestjs/common";
import { NotificationService } from "./notification.service";

@Controller('notifications')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) {}

    @Post()
    create() {
        const notification = {
            title: "new notification",
            message: "this is a test",
            date: new Date()
        };
        return this.notificationService.create(notification);
    }

    @Get()
    findAll() {
        return this.notificationService.findAll();
    }
}