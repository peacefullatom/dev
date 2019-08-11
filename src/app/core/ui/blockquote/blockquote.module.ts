import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlockquoteComponent } from './blockquote.component';

@NgModule({
  declarations: [BlockquoteComponent],
  exports: [BlockquoteComponent],
  imports: [CommonModule]
})
export class BlockquoteModule {}
