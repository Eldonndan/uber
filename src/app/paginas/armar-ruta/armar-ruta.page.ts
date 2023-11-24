import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as L from 'leaflet';
import { RutaActual } from 'src/app/models/ruta-actual';
import { User } from 'src/app/models/user';
import { Vehicle } from 'src/app/models/vehicle';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-armar-ruta',
  templateUrl: './armar-ruta.page.html',
  styleUrls: ['./armar-ruta.page.scss'],
})
export class ArmarRutaPage implements OnInit {
  constructor(private navCtrl: NavController, private router: Router) {}

  latf!: number;
  lonf!: number;
  comuna!: string;
  tarifa!: number;
  actualUser!: User;
  patente!: string;
  rutasactivas: RutaActual[] = [];
  vehiculos: Vehicle[] = [];
  carroactual!: Vehicle;
  alat!: number;
  alon!: number;

  ngOnInit() {
    this.obtnerUbicacion();
  }

  async obtnerUbicacion() {
    this.getActualUser();

    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.alat = coordinates.coords.latitude;
      this.alon = coordinates.coords.longitude;
      console.log('Ubicación actual:', this.alat, this.alon);

      // Después de obtener la ubicación, crea el mapa
      const map = L.map('map').setView([this.alat, this.alon], 17);

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

        marker = L.marker([e.latlng.lat, e.latlng.lng], markerOptions).addTo(
          map
        );

        if (marker) {
          const markerLatLng = marker.getLatLng();
          this.latf = markerLatLng.lat;
          this.lonf = markerLatLng.lng;
        }
      });
    } catch (error) {
      console.error('Error al obtener la ubicación', error);
    }
  }

  goBack() {
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

  getActualCar() {
    const actual = localStorage.getItem('vehicles');

    if (actual) {
      this.vehiculos = JSON.parse(actual);
    } else {
    }

    this.vehiculos.forEach((car) => {
      if ((car.plate = this.patente)) {
        this.carroactual = car;
        return;
      }
    });
  }

  guardar() {
    const rutas = localStorage.getItem('rutasactuales');

    if (rutas) {
      this.rutasactivas = JSON.parse(rutas);
    } else {
    }

    const patente = localStorage.getItem('actualvehicle');

    if (patente) {
      this.patente = JSON.parse(patente);
    } else {
      console.log('no deberia verse esto tampoco');
    }

    this.getActualCar();

    if (this.comuna && this.latf && this.lonf && this.tarifa) {
      const ruta: RutaActual = {
        email: this.actualUser.email,
        conductor: this.actualUser.name,
        comuna: this.comuna,
        tarifa: this.tarifa,
        lat: this.latf,
        lon: this.lonf,
        clientes: [],
        patente: this.patente,
        asientos: this.carroactual.seats,
      };

      this.rutasactivas.push(ruta);

      localStorage.setItem('rutasactuales', JSON.stringify(this.rutasactivas));
      localStorage.removeItem('actualvehicle');

      this.router.navigate(['/detalle-ruta']);
    }
  }

  CrearMapa(map: L.Map | L.LayerGroup<any>) {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }
}
