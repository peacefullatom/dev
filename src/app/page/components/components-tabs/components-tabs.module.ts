import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SourceViewerModule } from 'src/app/core/ui/source-viewer/source-viewer.module';

import { ComponentsTabsRoutingModule } from './components-tabs-routing.module';
import { ComponentsTabsComponent } from './components-tabs.component';

@NgModule({
  declarations: [ComponentsTabsComponent],
  exports: [ComponentsTabsComponent],
  imports: [CommonModule, ComponentsTabsRoutingModule, SourceViewerModule]
})
export class ComponentsTabsModule {}
