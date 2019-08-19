import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';

@NgModule({
  declarations: [ComponentsComponent],
  exports: [ComponentsComponent],
  imports: [CommonModule, ComponentsRoutingModule]
})
export class ComponentsModule {}
