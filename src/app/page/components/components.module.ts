import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IndexModule } from 'src/app/core/ui/index/index.module';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';

@NgModule({
  declarations: [ComponentsComponent],
  exports: [ComponentsComponent],
  imports: [CommonModule, ComponentsRoutingModule, IndexModule]
})
export class ComponentsModule {}
