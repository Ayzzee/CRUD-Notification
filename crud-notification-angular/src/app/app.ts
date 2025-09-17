import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationListComponent } from './components/notification-list/notification-list';
import { LoginAccess } from './components/login-access/login-access';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NotificationListComponent,LoginAccess],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('crud-notification-angular');
}
