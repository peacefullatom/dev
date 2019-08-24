import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { componentsIntroComponentRoutes } from './const';

@NgModule({
  imports: [RouterModule.forChild(componentsIntroComponentRoutes)],
  exports: [RouterModule]
})
export class ComponentsIntroRoutingModule {}
