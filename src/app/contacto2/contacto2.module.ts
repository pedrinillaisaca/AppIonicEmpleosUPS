import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contacto2PageRoutingModule } from './contacto2-routing.module';

import { Contacto2Page } from './contacto2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contacto2PageRoutingModule
  ],
  declarations: [Contacto2Page]
})
export class Contacto2PageModule {}
