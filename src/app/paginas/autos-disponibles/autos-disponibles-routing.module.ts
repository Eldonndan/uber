import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutosDisponiblesPage } from './autos-disponibles.page';

const routes: Routes = [
  {
    path: '',
    component: AutosDisponiblesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutosDisponiblesPageRoutingModule {}
