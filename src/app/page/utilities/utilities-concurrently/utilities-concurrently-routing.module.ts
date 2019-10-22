import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { utilitiesConcurrentlyComponentRoutes } from './const';

@NgModule({
  imports: [RouterModule.forChild(utilitiesConcurrentlyComponentRoutes)],
  exports: [RouterModule]
})
export class UtilitiesConcurrentlyRoutingModule {}
