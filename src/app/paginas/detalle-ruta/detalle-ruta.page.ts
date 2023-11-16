import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-ruta',
  templateUrl: './detalle-ruta.page.html',
  styleUrls: ['./detalle-ruta.page.scss'],
})
export class DetalleRutaPage {
  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back(); // O la lógica que utilizas para navegar hacia atrás
  }
}
  



