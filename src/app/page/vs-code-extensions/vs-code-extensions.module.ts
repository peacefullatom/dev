import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExternalLinkModule } from 'src/app/core/ui/external-link/external-link.module';
import { VsCodeExtensionsRoutingModule } from './vs-code-extensions-routing.module';
import { VsCodeExtensionsComponent } from './vs-code-extensions.component';

@NgModule({
  declarations: [VsCodeExtensionsComponent],
  exports: [VsCodeExtensionsComponent],
  imports: [CommonModule, VsCodeExtensionsRoutingModule, ExternalLinkModule]
})
export class VsCodeExtensionsModule {}
