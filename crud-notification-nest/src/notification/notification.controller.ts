import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { NotificationService } from "./notification.service";

@Controller('notifications')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) {}

    @Post()
    create(@Body() notification: any) {
        return this.notificationService.create(notification);
    }

    @Delete(':id')
    deleteNotifications(@Param('id') id: string) {
        return this.notificationService.delete(id);
    }

    @Get()
    findAll() {
        return this.notificationService.findAll();
    }

    @Patch(':id')
    updateNotification(@Param('id') id: string, @Body() notification: any) {
        return this.notificationService.update(id, notification);
    }
}