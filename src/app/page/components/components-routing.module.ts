import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { emptyPath } from 'src/app/const';
import { IRoute } from 'src/app/types';

import { ComponentsComponent } from './components.component';
import { componentsChildrenRoutes } from './const';

const componentRoutes: IRoute[] = [
  {
    path: emptyPath,
    component: ComponentsComponent,
    children: componentsChildrenRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(componentRoutes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
