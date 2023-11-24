import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RutaActual } from 'src/app/models/ruta-actual';

@Component({
  selector: 'app-autos-disponibles',
  templateUrl: './autos-disponibles.page.html',
  styleUrls: ['./autos-disponibles.page.scss'],
})
export class AutosDisponiblesPage implements OnInit {
  constructor(private router: Router, private navCtrl: NavController) {}

  rutasactivas: RutaActual[] = [];

  ngOnInit() {
    this.getRutasActivas();
  }

  goBack() {
    this.navCtrl.back();
  }

  getRutasActivas() {
    const rutas = localStorage.getItem('rutasactuales');

    if (rutas) {
      this.rutasactivas = JSON.parse(rutas);
    }

    console.log(this.rutasactivas);
  }

  getDetallesAsientos(ruta: RutaActual): string[] {
    const detallesAsientos: string[] = [];

    const asientosDisponibles = ruta.asientos - ruta.clientes.length;

    for (let i = 0; i < asientosDisponibles; i++) {
      detallesAsientos.push(`Asiento ${i + 1}`);
    }

    return detallesAsientos;
  }

  enviarRutaSeleccionada(ruta: RutaActual) {
    localStorage.setItem('rutaselected', JSON.stringify(ruta));

    this.router.navigate(['/detalle-conductor']);
  }
}
