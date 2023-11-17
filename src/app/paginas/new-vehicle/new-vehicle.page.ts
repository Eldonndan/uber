import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/servicios/authentication.service';

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.page.html',
  styleUrls: ['./new-vehicle.page.scss'],
})
export class NewVehiclePage {
  public estado: String = '';
  public mensaje = '';

  constructor(private auth: AuthenticationService) {}

  vehicle = {
    brand: '',
    model: '',
    year: '',
    type: '',
    plate: '',
    seats: '',
  };

  register() {
    this.auth
      .register_vehicle(
        this.vehicle.brand,
        this.vehicle.model,
        +this.vehicle.year,
        this.vehicle.type,
        this.vehicle.plate,
        +this.vehicle.seats
      )
      .then((res) => {
        if (res) {
          this.estado = 'Vehiculo ya Existe';
        } else {
          this.mensaje = 'Registro Exitoso';
        }
      });
  }

  soloNumeros(event: any) {
    const tecla = event.key;
    if (
      !/^[0-9]$/.test(tecla) &&
      tecla !== 'Backspace' &&
      tecla !== 'Delete' &&
      tecla !== 'ArrowLeft' &&
      tecla !== 'ArrowRight' &&
      tecla !== 'Tab'
    ) {
      event.preventDefault();
    }
  }
}
