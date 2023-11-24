import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Geolocation } from '@capacitor/geolocation';
import 'leaflet-routing-machine';
import { RutaActual } from 'src/app/models/ruta-actual';
import { withJsonpSupport } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {
  constructor(private router: Router) {}

  alat!: number;
  alon!: number;
  waypoints: L.LatLng[] = [];
  map: any;
  rutona!: RutaActual;
  rutas: RutaActual[] = [];
  coordenadas: number[][] = [];

  ngOnInit() {
    this.obtenerUbicacion(); // Llama a obtenerUbicacion en ngOnInit
  }

  async obtenerUbicacion() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.alat = coordinates.coords.latitude;
      this.alon = coordinates.coords.longitude;
      console.log('Ubicación actual:', this.alat, this.alon);

      // Después de obtener la ubicación, crea el mapa
      const map = L.map('map').setView([this.alat, this.alon], 17);

      this.CrearMapa(map);
      this.coordenadas.push([this.alat, this.alon]);
      this.getcoords();

      this.waypoints = this.coordenadas.map((coord) =>
        L.latLng(coord[0], coord[1])
      );

      // Crea la capa de la ruta
      L.Routing.control({
        waypoints: this.waypoints,
      }).addTo(map);

      var elementos = document.getElementsByClassName(
        'leaflet-routing-alternatives-container'
      );

      // Itera sobre los elementos y cambia su estilo
      for (var i = 0; i < elementos.length; i++) {
        // Usa 'as HTMLElement' para indicar a TypeScript que estos elementos son de tipo HTMLElement
        var elemento = elementos[i] as HTMLElement;

        // Cambia el estilo según tus necesidades
        elemento.style.display = 'none';
        // Agrega más propiedades de estilo según sea necesario
      }
    } catch (error) {
      console.error('Error al obtener la ubicación', error);
    }
  }

  CrearMapa(map: L.Map | L.LayerGroup<any>) {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Agregar un marcador en la ubicación actual
    const marker = L.marker([this.alat, this.alon]).addTo(map);
  }

  getcoords() {
    const ruta = localStorage.getItem('rutaselected');

    if (ruta) {
      this.rutona = JSON.parse(ruta);
    }

    this.rutona.clientes.forEach((cliente) => {
      console.log(cliente);

      this.coordenadas.push([cliente.lat, cliente.lon]);
    });

    this.coordenadas.push([this.rutona.lat, this.rutona.lon]);
  }

  finalizar() {
    const ruta = localStorage.getItem('rutaselected');

    if (ruta) {
      this.rutona = JSON.parse(ruta);
    }

    const rutas = localStorage.getItem('rutasactuales');

    if (rutas) {
      this.rutas = JSON.parse(rutas);

      const nuevasRutas = this.rutas.filter(
        (caminito) =>
          !(
            caminito.lat === this.rutona.lat && caminito.lon === this.rutona.lon
          )
      );
      localStorage.removeItem('rutaselected');

      localStorage.setItem('rutasactuales', JSON.stringify(nuevasRutas));

      this.router.navigate(['/options']);
    }
  }
}
