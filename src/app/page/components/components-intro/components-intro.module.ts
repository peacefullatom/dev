import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsIntroRoutingModule } from './components-intro-routing.module';
import { ComponentsIntroComponent } from './components-intro.component';

@NgModule({
  declarations: [ComponentsIntroComponent],
  exports: [ComponentsIntroComponent],
  imports: [CommonModule, ComponentsIntroRoutingModule]
})
export class ComponentsIntroModule {}
