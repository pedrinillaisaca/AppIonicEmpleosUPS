import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalizacionPageRoutingModule } from './localizacion-routing.module';

import { LocalizacionPage } from './localizacion.page';
import { ComponenteMapaComponent } from '../componente-mapa/componente-mapa.component';


import { AgmCoreModule } from '@agm/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalizacionPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  declarations: [LocalizacionPage,ComponenteMapaComponent]
})
export class LocalizacionPageModule {}
