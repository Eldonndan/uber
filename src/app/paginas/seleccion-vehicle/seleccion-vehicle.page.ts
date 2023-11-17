import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

interface Vehicle {
  brand: string;
  model: string;
  year: number;
  type: string;
  plate: string;
  seats: number;
}

@Component({
  selector: 'app-seleccion-vehicle',
  templateUrl: './seleccion-vehicle.page.html',
  styleUrls: ['./seleccion-vehicle.page.scss'],
})
export class SeleccionVehiclePage implements OnInit {
  constructor(private router: Router, private storage: Storage) {}

  private local!: Storage;

  vehiculos: Vehicle[] = [];

  async ngOnInit() {
    await this.buscarautos();
  }

  async buscarautos() {
    const autos = (await this.local?.get('vehicles')) || [];
    if (autos) {
      console.log(autos);
      console.log('si hay');
      //this.vehiculos = JSON.parse(autos);
    }
  }

  register() {
    this.router.navigate(['/new-vehicle']);
  }
}
