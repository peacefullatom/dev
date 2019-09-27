import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { componentsButtonComponentRoutes } from './const';

@NgModule({
  imports: [RouterModule.forChild(componentsButtonComponentRoutes)],
  exports: [RouterModule]
})
export class ComponentsButtonRoutingModule {}
