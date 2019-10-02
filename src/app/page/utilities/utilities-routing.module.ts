import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { emptyPath } from 'src/app/const';
import { IRoute } from 'src/app/types';

import { utilitiesChildrenRoutes } from './const';
import { UtilitiesComponent } from './utilities.component';

const utilitiesRoutes: IRoute[] = [
  {
    path: emptyPath,
    component: UtilitiesComponent,
    children: utilitiesChildrenRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(utilitiesRoutes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule {}
