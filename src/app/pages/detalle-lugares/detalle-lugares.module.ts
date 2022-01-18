import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleLugaresPageRoutingModule } from './detalle-lugares-routing.module';

import { DetalleLugaresPage } from './detalle-lugares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleLugaresPageRoutingModule
  ],
  declarations: [DetalleLugaresPage]
})
export class DetalleLugaresPageModule {}
