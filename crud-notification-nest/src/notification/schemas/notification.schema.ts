import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


export type NotificationDocument = Notification & Document;  

@Schema()
export class Notification {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    message: string;

    @Prop({ default: Date.now })
    createdAt: Date;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);  //Transform the class to Mongoose schema
