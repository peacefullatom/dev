import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeComponent } from './code.component';

@NgModule({
  declarations: [CodeComponent],
  exports: [CodeComponent],
  imports: [CommonModule]
})
export class CodeModule {}
