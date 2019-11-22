import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StepperComponent } from './stepper.component';

@NgModule({
  declarations: [StepperComponent],
  exports: [StepperComponent],
  imports: [CommonModule, FontAwesomeModule]
})
export class StepperModule {}
