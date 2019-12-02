import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { miscCss3dPreloaderComponentRoutes } from './const';

@NgModule({
  imports: [RouterModule.forChild(miscCss3dPreloaderComponentRoutes)],
  exports: [RouterModule]
})
export class MiscCss3dPreloaderRoutingModule {}
