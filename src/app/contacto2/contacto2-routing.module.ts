import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contacto2Page } from './contacto2.page';

const routes: Routes = [
  {
    path: '',
    component: Contacto2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contacto2PageRoutingModule {}
