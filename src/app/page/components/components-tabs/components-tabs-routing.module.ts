import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { componentsTabsComponentRoutes } from './const';

@NgModule({
  imports: [RouterModule.forChild(componentsTabsComponentRoutes)],
  exports: [RouterModule]
})
export class ComponentsTabsRoutingModule {}
