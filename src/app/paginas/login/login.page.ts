import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

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

  login() {
    this.auth.login(this.user.email, this.user.password).then(async () => {
      const data = await this.storage.get('auth');
      if (data) {
        let navigationExtras: NavigationExtras = {
          state: { user: this.user },
        };
        this.router.navigate(['/options'], navigationExtras);
      }
    });
  }

  constructor(
    private location: Location,
    private auth: AuthenticationService,
    private router: Router,
    private storage: Storage
  ) {}

  goBack() {
    this.auth.logout();
    this.location.back();
  }
}
