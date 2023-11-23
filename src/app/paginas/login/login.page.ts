import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AuthenticationService } from 'src/app/servicios/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  passwordType: string = 'password';
  passwordIcon: string = 'eye';

  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    this.passwordIcon = this.passwordIcon === 'eye' ? 'eye-off' : 'eye';
  }

  isFormValid(): boolean {
    return !!this.user.email && !!this.user.password;
  }

  user = {
    email: this.email,
    password: this.password,
  };

  login_ls() {
    this.auth.login_ls(this.user.email, this.user.password);
  }

  constructor(
    private location: Location,
    private auth: AuthenticationService
  ) {}

  goBack() {
    this.auth.logout_ls();
    this.location.back();
  }
}
