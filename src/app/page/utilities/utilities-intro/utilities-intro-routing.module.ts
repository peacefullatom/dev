import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { utilitiesIntroComponentRoutes } from './const';

@NgModule({
  imports: [RouterModule.forChild(utilitiesIntroComponentRoutes)],
  exports: [RouterModule]
})
export class UtilitiesIntroRoutingModule {}
