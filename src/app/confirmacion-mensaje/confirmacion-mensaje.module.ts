import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionMensajePageRoutingModule } from './confirmacion-mensaje-routing.module';

import { ConfirmacionMensajePage } from './confirmacion-mensaje.page';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionMensajePageRoutingModule
  ],
  // providers:[
  //   ActivatedRouteSnapshot
  // ],
  declarations: [ConfirmacionMensajePage]
})
export class ConfirmacionMensajePageModule {}
