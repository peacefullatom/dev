import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UtilitiesIntroRoutingModule } from './utilities-into-routing.module';
import { UtilitiesIntoComponent } from './utilities-into.component';

@NgModule({
  declarations: [UtilitiesIntoComponent],
  exports: [UtilitiesIntoComponent],
  imports: [CommonModule, UtilitiesIntroRoutingModule]
})
export class UtilitiesIntoModule {}
