import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { emptyPath } from 'src/app/const';
import { VsCodeExtensionsComponent } from './vs-code-extensions.component';

const prerequisitesRoutes: Routes = [
  { path: emptyPath, component: VsCodeExtensionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(prerequisitesRoutes)],
  exports: [RouterModule]
})
export class VsCodeExtensionsRoutingModule {}
