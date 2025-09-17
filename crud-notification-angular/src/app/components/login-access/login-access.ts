import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login';

@Component({
  selector: 'app-login-access',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-access.html',
  styleUrls: ['./login-access.css']  // <-- avec un S et en tableau
})

export class LoginAccess {
  invalidMDP : string | null = null;

  constructor(private loginService : LoginService) {}

  login = {username: '', password: ''};

  @Output() loginSuccess = new EventEmitter<void>();

  loginInto() {
    this.loginService.login(this.login.username, this.login.password).subscribe({
      next: (response : string) => {
        if (response === 'token-pass') {
          this.invalidMDP = null;
          this.loginSuccess.emit();
          console.log('Login successful', response);
        } else {
          this.invalidMDP = 'Login failed: Invalid credentials';
        }
      },
      error: (error) => {
        this.invalidMDP = 'Erreur serveur';
        console.error('Login failed:', error);
      }
    });
  }
}

