import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {
  constructor() {}

  alat!: number;
  alon!: number;

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
}
