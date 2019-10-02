import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { componentsAlertComponentRoutes } from './const';

@NgModule({
  imports: [RouterModule.forChild(componentsAlertComponentRoutes)],
  exports: [RouterModule]
})
export class ComponentsAlertRoutingModule {}
