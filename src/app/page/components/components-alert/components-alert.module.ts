import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsAlertRoutingModule } from './components-alert-routing.module';
import { ComponentsAlertComponent } from './components-alert.component';

@NgModule({
  declarations: [ComponentsAlertComponent],
  exports: [ComponentsAlertComponent],
  imports: [CommonModule, ComponentsAlertRoutingModule]
})
export class ComponentsAlertModule {}
