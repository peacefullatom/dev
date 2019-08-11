import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BodyComponent } from './body.component';

/** body module */
@NgModule({
  declarations: [BodyComponent],
  exports: [BodyComponent],
  imports: [CommonModule, RouterModule]
})
export class BodyModule {}
