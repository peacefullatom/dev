import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { emptyPath } from 'src/app/const';
import { IRoute } from 'src/app/types';

import { miscChildrenRoutes } from './const';
import { MiscComponent } from './misc.component';

const miscRoutes: IRoute[] = [
  {
    path: emptyPath,
    component: MiscComponent,
    children: miscChildrenRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(miscRoutes)],
  exports: [RouterModule]
})
export class MiscRoutingModule {}
