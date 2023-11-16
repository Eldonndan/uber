import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleRutaPageRoutingModule } from './detalle-ruta-routing.module';

import { DetalleRutaPage } from './detalle-ruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleRutaPageRoutingModule
  ],
  declarations: [DetalleRutaPage]
})
export class DetalleRutaPageModule {}
