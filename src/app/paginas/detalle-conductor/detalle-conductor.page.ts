import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-conductor',
  templateUrl: './detalle-conductor.page.html',
  styleUrls: ['./detalle-conductor.page.scss'],
})
export class DetalleConductorPage { // Cambiado el nombre del componente
  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back(); // O la lógica que utilizas para navegar hacia atrás
  }
}
