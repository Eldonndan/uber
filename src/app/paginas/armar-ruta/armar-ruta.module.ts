import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmarRutaPageRoutingModule } from './armar-ruta-routing.module';

import { ArmarRutaPage } from './armar-ruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmarRutaPageRoutingModule
  ],
  declarations: [ArmarRutaPage]
})
export class ArmarRutaPageModule {}
