import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ExternalLinkComponent } from './external-link.component';

@NgModule({
  declarations: [ExternalLinkComponent],
  exports: [ExternalLinkComponent],
  imports: [CommonModule, FontAwesomeModule]
})
export class ExternalLinkModule {}
