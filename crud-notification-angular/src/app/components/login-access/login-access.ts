import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login';

@Component({
  selector: 'app-login-access',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-access.html',
  styleUrl: './login-access.css'
})

export class LoginAccess {
  constructor(private loginService : LoginService) {}

  login = {username: '', password: ''};

  loginInto() {
    this.loginService.login(this.login.username, this.login.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
  }

}
