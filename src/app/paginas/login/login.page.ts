import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
import { NavigationExtras, Router } from '@angular/router';

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
    return !!this.email && !!this.password;
  }

  user = {
    email: this.email,
    password: this.password,
  };

  login() {
    this.auth.login(this.email, this.password).then(() => {
      if (this.auth.autenticado) {
        let navigationExtras: NavigationExtras = {
          state: { user: this.user },
        };
        this.router.navigate(['/options'], navigationExtras);
      }
    });
    // Aquí puedes agregar la lógica para el inicio de sesión
    console.log('Iniciando sesión...');
    console.log('Correo electrónico:', this.email);
    console.log('Contraseña:', this.password);
  }

  constructor(
    private location: Location,
    private auth: AuthenticationService,
    private router: Router
  ) {}

  goBack() {
    this.location.back();
  }
}
