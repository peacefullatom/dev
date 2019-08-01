import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { emptyPath } from 'src/app/const';
import { VsCodeExtensionsComponent } from './vs-code-extensions.component';

const vsCodeExtensionsRoutes: Routes = [
  { path: emptyPath, component: VsCodeExtensionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(vsCodeExtensionsRoutes)],
  exports: [RouterModule]
})
export class VsCodeExtensionsRoutingModule {}
