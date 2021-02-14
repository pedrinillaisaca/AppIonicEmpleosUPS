import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiculoCrearPage } from './vehiculo-crear.page';

const routes: Routes = [
  {
    path: '',
    component: VehiculoCrearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculoCrearPageRoutingModule {}
