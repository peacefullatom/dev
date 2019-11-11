import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MiscIntroRoutingModule } from './misc-intro-routing.module';
import { MiscIntroComponent } from './misc-intro.component';

@NgModule({
  declarations: [MiscIntroComponent],
  exports: [MiscIntroComponent],
  imports: [CommonModule, MiscIntroRoutingModule]
})
export class MiscIntroModule {}
