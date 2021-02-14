import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiculosListaPageRoutingModule } from './vehiculos-lista-routing.module';

import { VehiculosListaPage } from './vehiculos-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiculosListaPageRoutingModule
  ],
  declarations: [VehiculosListaPage]
})
export class VehiculosListaPageModule {}
