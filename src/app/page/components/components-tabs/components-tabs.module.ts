import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsTabsRoutingModule } from './components-tabs-routing.module';
import { ComponentsTabsComponent } from './components-tabs.component';

@NgModule({
  declarations: [ComponentsTabsComponent],
  exports: [ComponentsTabsComponent],
  imports: [CommonModule, ComponentsTabsRoutingModule]
})
export class ComponentsTabsModule {}
