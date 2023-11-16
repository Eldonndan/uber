import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/servicios/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  public estado: String = '';
  public mensaje = '';

  constructor(private auth: AuthenticationService) {}

  user = {
    name: '',
    password: '',
    email: '',
  };

  register() {
    this.auth
      .register_user(this.user.password, this.user.email, this.user.name)
      .then((res) => {
        if (res) {
          this.estado = 'Usuario ya Existe';
        } else {
          this.mensaje = 'Registro Exitoso';
        }
      });
  }
}
