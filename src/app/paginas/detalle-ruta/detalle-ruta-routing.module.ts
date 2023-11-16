import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleRutaPage } from './detalle-ruta.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleRutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleRutaPageRoutingModule {}
