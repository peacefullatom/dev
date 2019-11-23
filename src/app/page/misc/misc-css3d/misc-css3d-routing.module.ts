import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { miscCss3dComponentRoutes } from './const';

@NgModule({
  imports: [RouterModule.forChild(miscCss3dComponentRoutes)],
  exports: [RouterModule]
})
export class MiscCss3dRoutingModule {}
