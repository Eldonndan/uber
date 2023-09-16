import { Component } from '@angular/core';
import { Location } from '@angular/common';

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

  login() {
    // Aquí puedes agregar la lógica para el inicio de sesión
    console.log('Iniciando sesión...');
    console.log('Correo electrónico:', this.email);
    console.log('Contraseña:', this.password);
  }

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
