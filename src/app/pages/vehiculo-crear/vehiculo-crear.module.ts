import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiculoCrearPageRoutingModule } from './vehiculo-crear-routing.module';

import { VehiculoCrearPage } from './vehiculo-crear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiculoCrearPageRoutingModule
  ],
  declarations: [VehiculoCrearPage]
})
export class VehiculoCrearPageModule {}
