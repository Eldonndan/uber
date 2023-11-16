import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmarRutaPage } from './armar-ruta.page';

const routes: Routes = [
  {
    path: '',
    component: ArmarRutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmarRutaPageRoutingModule {}
