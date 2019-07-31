import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { emptyPath } from 'src/app/const';
import { PrerequisitesComponent } from './prerequisites.component';

const prerequisitesRoutes: Routes = [
  { path: emptyPath, component: PrerequisitesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(prerequisitesRoutes)],
  exports: [RouterModule]
})
export class PrerequisitesRoutingModule {}
