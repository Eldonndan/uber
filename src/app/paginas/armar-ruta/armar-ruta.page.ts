import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as L from 'leaflet';

@Component({
  selector: 'app-armar-ruta',
  templateUrl: './armar-ruta.page.html',
  styleUrls: ['./armar-ruta.page.scss'],
})
export class ArmarRutaPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  ionViewDidEnter() {
    const map = L.map('map').setView([-33.433157, -70.6157], 17);

    this.CrearMapa(map);
  }

  goBack() {
    this.navCtrl.back();
  }

  CrearMapa(map: L.Map | L.LayerGroup<any>) {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  }
}
