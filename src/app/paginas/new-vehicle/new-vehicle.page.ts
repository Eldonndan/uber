import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import type { Animation } from '@ionic/angular';

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
    year: 0,
    type: '',
    plate: '',
    seats: 0
  };

  register() {
    this.auth
      .register_vehicle(
        this.vehicle.brand, 
        this.vehicle.model, 
        this.vehicle.year,
        this.vehicle.type,
        this.vehicle.plate,
        this.vehicle.seats)
      .then((res) => {
        if (res) {
          this.estado = 'Vehiculo ya Existe';
        } else {
          this.mensaje = 'Registro Exitoso';
        }
      });
  }
}
