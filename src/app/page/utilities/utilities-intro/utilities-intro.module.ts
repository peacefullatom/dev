import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UtilitiesIntroRoutingModule } from './utilities-intro-routing.module';
import { UtilitiesIntroComponent } from './utilities-intro.component';

@NgModule({
  declarations: [UtilitiesIntroComponent],
  exports: [UtilitiesIntroComponent],
  imports: [CommonModule, UtilitiesIntroRoutingModule]
})
export class UtilitiesIntoModule {}
