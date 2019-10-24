import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { componentsSourceCodeComponentRoutes } from './const';

@NgModule({
  imports: [RouterModule.forChild(componentsSourceCodeComponentRoutes)],
  exports: [RouterModule]
})
export class ComponentsSourceCodeRoutingModule {}
