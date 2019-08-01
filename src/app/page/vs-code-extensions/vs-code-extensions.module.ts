import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VsCodeExtensionsRoutingModule } from './vs-code-extensions-routing.module';
import { VsCodeExtensionsComponent } from './vs-code-extensions.component';

@NgModule({
  declarations: [VsCodeExtensionsComponent],
  exports: [VsCodeExtensionsComponent],
  imports: [CommonModule, VsCodeExtensionsRoutingModule]
})
export class VsCodeExtensionsModule {}
