import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutosDisponiblesPageRoutingModule } from './autos-disponibles-routing.module';

import { AutosDisponiblesPage } from './autos-disponibles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutosDisponiblesPageRoutingModule
  ],
  declarations: [AutosDisponiblesPage]
})
export class AutosDisponiblesPageModule {}
