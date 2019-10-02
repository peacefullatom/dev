import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { utilitiesIdComponentRoutes } from './const';

@NgModule({
  imports: [RouterModule.forChild(utilitiesIdComponentRoutes)],
  exports: [RouterModule]
})
export class UtilitiesIdRoutingModule {}
