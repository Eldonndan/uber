import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

interface Vehicle {
  brand: string;
  model: string;
  year: number;
  type: string;
  plate: string;
  seats: number;
  owner: string;
}

interface User {
  email: string;
  password: string;
  name: string;
}

@Component({
  selector: 'app-seleccion-vehicle',
  templateUrl: './seleccion-vehicle.page.html',
  styleUrls: ['./seleccion-vehicle.page.scss'],
})
export class SeleccionVehiclePage implements OnInit {
  constructor(private router: Router, private navCtrl: NavController) {}

  vehicles: Vehicle[] = [];
  myvehicles: Vehicle[] = [];
  actualUser!: User;

  ngOnInit() {
    this.buscarautos_ls();
    this.getActualUser();
    this.filtrarAutos();
  }

  filtrarAutos() {
    this.vehicles.forEach((car) => {
      if (car.owner == this.actualUser.email) {
        this.myvehicles.push(car);
      }
    });

    console.log(this.myvehicles);
  }

  getActualUser() {
    const actual = localStorage.getItem('actualuser');

    if (actual) {
      this.actualUser = JSON.parse(actual);
    } else {
      console.log('no se debería ver este mensaje por ningun motivo');
    }
  }

  buscarautos_ls() {
    const vehicles = localStorage.getItem('vehicles');

    if (vehicles) {
      this.vehicles = JSON.parse(vehicles);
      console.log(this.vehicles);
    } else {
      this.vehicles = [];
    }
  }

  formatPatente(patente: string): string {
    return (
      patente.slice(0, 2) + '·' + patente.slice(2, 4) + '·' + patente.slice(4)
    );
  }

  selectVehicle(carplate: string) {
    localStorage.setItem('actualvehicle', JSON.stringify(carplate));
    this.router.navigate(['/armar-ruta']);
  }

  register() {
    this.router.navigate(['/new-vehicle']);
  }

  goBack() {
    this.navCtrl.back();
  }
}
