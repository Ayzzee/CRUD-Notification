import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationListComponent } from './components/notification-list/notification-list';
import { LoginAccess } from './components/login-access/login-access';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NotificationListComponent,LoginAccess,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isLoggedIn = false;

  onLoginSuccess() {
    this.isLoggedIn = true;
  }
}
