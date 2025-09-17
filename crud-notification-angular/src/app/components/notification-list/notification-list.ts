import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationService, Notification } from '../../services/notification';

@Component({
  selector: 'app-notification-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notification-list.html'
})

export class NotificationListComponent implements OnInit {
  notifications: Notification[] = [];
  newNotif: Notification = { title: '', message: '', createdAt: new Date().toISOString() };

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
  this.notificationService.getAll().subscribe(data => {
    this.notifications = data;
  });
  }


  loadNotifications() {
    this.notificationService.getAll().subscribe({
      next: (data) => {
        this.notifications = data;
      }
    });
  }

  addNotification() {

    this.notificationService.create(this.newNotif).subscribe({
      next: () => {
        this.loadNotifications();
        this.newNotif = { title: '', message: '', createdAt: new Date().toISOString() };
      },
    });
  }

  deleteNotification(id: number) {

    this.notificationService.delete(id).subscribe({
      next: () => {
        this.loadNotifications();
      }
    });
  }
}
