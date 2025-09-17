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

  ngOnInit(): void {
    this.loadNotifications();
  }

  loadNotifications() {
  this.notificationService.getAll().subscribe({
    next: (data) => {
      console.log("Notifications reçues :", data); 
      this.notifications = data;
    },
    error: (err) => {
      console.error('Erreur de chargement des notifications', err);
    }
  });
  }

  addNotification() {
    console.log("Ajout en cours :", this.newNotif); 

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
      },
      error: (err) => console.error("Erreur suppression :", err)
    });
  }

}
