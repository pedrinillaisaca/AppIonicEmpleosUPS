import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacionMensajePage } from './confirmacion-mensaje.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacionMensajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacionMensajePageRoutingModule {}
