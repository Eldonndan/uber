import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionVehiclePage } from './seleccion-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionVehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionVehiclePageRoutingModule {}
