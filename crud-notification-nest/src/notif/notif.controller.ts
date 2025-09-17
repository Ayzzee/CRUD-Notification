import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { NotificationService } from "./notif.services";
import { Notification } from "./schemas/notif.schemas";

 @Controller('notifications')
 export class NotificationController {
     static update(id: string, updatedNotification: Partial<Notification>) {
         throw new Error('Method not implemented.');
     }
     static delete(id: string) {
         throw new Error('Method not implemented.');
     }
     static create(fakeNotification: Notification) {
         throw new Error('Method not implemented.');
     }
     static findAll() {
         throw new Error('Method not implemented.');
     }
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

 