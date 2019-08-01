import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExternalLinkComponent } from './external-link.component';

@NgModule({
  declarations: [ExternalLinkComponent],
  exports: [ExternalLinkComponent],
  imports: [CommonModule]
})
export class ExternalLinkModule {}
