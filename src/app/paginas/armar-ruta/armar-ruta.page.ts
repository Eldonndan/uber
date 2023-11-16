import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-armar-ruta',
  templateUrl: './armar-ruta.page.html',
  styleUrls: ['./armar-ruta.page.scss'],
})
export class ArmarRutaPage {
  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back(); // O la lógica que utilizas para navegar hacia atrás
  }
}