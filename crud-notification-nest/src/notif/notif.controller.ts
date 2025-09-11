import { Body, Controller, Get, Post } from "@nestjs/common";
import { NotificationService } from "./notif.services";

 @Controller('notifications')
 export class NotificationController {
   constructor(private readonly notificationService: NotificationService) {}
 
   @Post()

    create(@Body() notification: any) {
        return this.notificationService.create(notification);
 }

    @Get()
    findAll() {
        return this.notificationService.findAll();
    }
 }
 