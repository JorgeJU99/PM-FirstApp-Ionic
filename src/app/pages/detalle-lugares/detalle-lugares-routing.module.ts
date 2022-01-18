import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleLugaresPage } from './detalle-lugares.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleLugaresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleLugaresPageRoutingModule {}
