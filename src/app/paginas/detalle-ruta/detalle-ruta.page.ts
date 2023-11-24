import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RutaActual } from 'src/app/models/ruta-actual';

@Component({
  selector: 'app-detalle-ruta',
  templateUrl: './detalle-ruta.page.html',
  styleUrls: ['./detalle-ruta.page.scss'],
})
export class DetalleRutaPage implements OnInit {
  constructor(private navCtrl: NavController, private router: Router) {}

  rutaactual!: RutaActual;

  ngOnInit() {
    this.getRutaActual();
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

  viajar() {
    this.router.navigate(['/viaje']);
  }
}
