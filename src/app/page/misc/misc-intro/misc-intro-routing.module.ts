import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { miscIntroComponentRoutes } from './const';

@NgModule({
  imports: [RouterModule.forChild(miscIntroComponentRoutes)],
  exports: [RouterModule]
})
export class MiscIntroRoutingModule {}
