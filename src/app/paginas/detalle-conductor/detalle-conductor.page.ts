import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RutaActual } from 'src/app/models/ruta-actual';
import { Vehicle } from 'src/app/models/vehicle';
import * as L from 'leaflet';
import { User } from 'src/app/models/user';
import { UserSeat } from 'src/app/models/user-seat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-conductor',
  templateUrl: './detalle-conductor.page.html',
  styleUrls: ['./detalle-conductor.page.scss'],
})
export class DetalleConductorPage implements OnInit {
  constructor(private navCtrl: NavController, private router: Router) {}

  rutaactual!: RutaActual;
  vehiculos: Vehicle[] = [];
  auto!: Vehicle;
  user!: User;

  latf!: number;
  lonf!: number;

  ngOnInit() {
    this.getRutaActual();
    this.getvehicle();
  }

  ionViewDidEnter() {
    const map = L.map('map').setView([-33.433157, -70.6157], 17);

    this.CrearMapa(map);

    let marker: L.Marker | null = null;

    const CustomIcon = L.icon({
      iconUrl: '../../../assets/icon/location.png',
      iconSize: [40, 40],
    });

    const markerOptions = {
      icon: CustomIcon,
      draggable: true,
    };

    map.on('click', (e) => {
      if (marker) {
        map.removeLayer(marker);
      }

      marker = L.marker([e.latlng.lat, e.latlng.lng], markerOptions).addTo(map);

      if (marker) {
        const markerLatLng = marker.getLatLng();
        this.latf = markerLatLng.lat;
        this.lonf = markerLatLng.lng;
      }
    });
  }

  goBack() {
    this.navCtrl.back(); // O la lógica que utilizas para navegar hacia atrás
  }

  getRutaActual() {
    const ruta = localStorage.getItem('rutaselected');
    if (ruta) {
      this.rutaactual = JSON.parse(ruta);
    }
  }

  getvehicle() {
    const autos = localStorage.getItem('vehicles');

    if (autos) {
      this.vehiculos = JSON.parse(autos);
    }

    this.vehiculos.forEach((car) => {
      if (car.plate == this.rutaactual.patente) {
        this.auto = car;
        return;
      }
    });
  }

  formatPatente(patente: string): string {
    return (
      patente.slice(0, 2) + '·' + patente.slice(2, 4) + '·' + patente.slice(4)
    );
  }

  CrearMapa(map: L.Map | L.LayerGroup<any>) {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }

  guardar() {
    if (this.latf && this.lonf) {
      const actualuser = localStorage.getItem('actualuser');

      if (actualuser) {
        this.user = JSON.parse(actualuser);
      }

      const User: UserSeat = {
        email: this.user.email,
        name: this.user.name,
        password: this.user.password,
        lat: this.latf,
        lon: this.lonf,
      };

      this.rutaactual.clientes.push(User);

      localStorage.removeItem('rutaselected');
      localStorage.setItem('rutaselected', JSON.stringify(this.rutaactual));

      this.router.navigate(['/detalle-ruta']);
    }
  }
}
