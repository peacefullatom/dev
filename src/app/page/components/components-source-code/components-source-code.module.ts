import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SourceViewerModule } from 'src/app/core/ui/source-viewer/source-viewer.module';

import { ComponentsSourceCodeRoutingModule } from './components-source-code-routing.module';
import { ComponentsSourceCodeComponent } from './components-source-code.component';

@NgModule({
  declarations: [ComponentsSourceCodeComponent],
  exports: [ComponentsSourceCodeComponent],
  imports: [CommonModule, ComponentsSourceCodeRoutingModule, SourceViewerModule]
})
export class ComponentsSourceCodeModule {}
