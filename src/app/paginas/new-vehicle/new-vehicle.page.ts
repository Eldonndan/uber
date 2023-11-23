import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
import { NavController } from '@ionic/angular';

interface User {
  email: string;
  password: string;
  name: string;
}

@Component({
  selector: 'app-new-vehicle',
  templateUrl: './new-vehicle.page.html',
  styleUrls: ['./new-vehicle.page.scss'],
})
export class NewVehiclePage implements OnInit {
  public estado: String = '';
  public mensaje = '';
  actualUser!: User;

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private navCtrl: NavController
  ) {}

  vehicle = {
    brand: '',
    model: '',
    year: '',
    type: '',
    plate: '',
    seats: '',
    owner: '',
  };

  ngOnInit() {
    this.getActualUser();
  }

  register() {
    this.auth.register_vehicle_ls(
      this.vehicle.brand,
      this.vehicle.model,
      +this.vehicle.year,
      this.vehicle.type,
      this.vehicle.plate,
      +this.vehicle.seats,
      (this.vehicle.owner = this.actualUser.email)
    );

    this.navCtrl.back();
  }

  getActualUser() {
    const actual = localStorage.getItem('actualuser');

    if (actual) {
      this.actualUser = JSON.parse(actual);
    } else {
      console.log('no se debería ver este mensaje por ningun motivo');
    }
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
