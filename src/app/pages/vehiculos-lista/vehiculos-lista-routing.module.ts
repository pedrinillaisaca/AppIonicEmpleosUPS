import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiculosListaPage } from './vehiculos-lista.page';

const routes: Routes = [
  {
    path: '',
    component: VehiculosListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculosListaPageRoutingModule {}
