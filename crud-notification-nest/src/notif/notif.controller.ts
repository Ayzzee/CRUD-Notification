import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { NotificationService } from "./notif.services";

 @Controller('notifications')
 export class NotificationController {
   constructor(private readonly notificationService: NotificationService) {}
 
   @Post()

    create(@Body() notification: any) {
        return this.notificationService.create(notification);
 }

    @Delete(':id')
    delete(@Param('id') id : string) {
        return this.notificationService.delete(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() notification: any) {
        console.log('PATCH reçu :', { id, notification });
        return  this.notificationService.update(id, notification);
    }

    @Get()
    findAll() {
        return this.notificationService.findAll(); 
    }
 }

 