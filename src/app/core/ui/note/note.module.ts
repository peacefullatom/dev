import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NoteComponent } from './note.component';

@NgModule({
  declarations: [NoteComponent],
  exports: [NoteComponent],
  imports: [CommonModule]
})
export class NoteModule {}
