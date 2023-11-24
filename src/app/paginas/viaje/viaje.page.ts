import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {
  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    const map = L.map('map').setView([-33.433157, -70.6157], 17);

    this.CrearMapa(map);
  }

  CrearMapa(map: L.Map | L.LayerGroup<any>) {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }
}
