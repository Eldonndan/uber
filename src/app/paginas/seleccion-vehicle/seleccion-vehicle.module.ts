import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionVehiclePageRoutingModule } from './seleccion-vehicle-routing.module';

import { SeleccionVehiclePage } from './seleccion-vehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionVehiclePageRoutingModule
  ],
  declarations: [SeleccionVehiclePage]
})
export class SeleccionVehiclePageModule {}
