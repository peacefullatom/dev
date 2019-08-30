import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockquoteModule } from 'src/app/core/ui/blockquote/blockquote.module';
import { NoteModule } from 'src/app/core/ui/note/note.module';

import { ComponentsIntroRoutingModule } from './components-intro-routing.module';
import { ComponentsIntroComponent } from './components-intro.component';

@NgModule({
  declarations: [ComponentsIntroComponent],
  exports: [ComponentsIntroComponent],
  imports: [
    CommonModule,
    ComponentsIntroRoutingModule,
    NoteModule,
    BlockquoteModule
  ]
})
export class ComponentsIntroModule {}
