import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeModule } from 'src/app/core/ui/code/code.module';
import { ExternalLinkModule } from 'src/app/core/ui/external-link/external-link.module';
import { NoteModule } from 'src/app/core/ui/note/note.module';
import { SourceViewerModule } from 'src/app/core/ui/source-viewer/source-viewer.module';

import { ComponentsSourceCodeRoutingModule } from './components-source-code-routing.module';
import { ComponentsSourceCodeComponent } from './components-source-code.component';

@NgModule({
  declarations: [ComponentsSourceCodeComponent],
  exports: [ComponentsSourceCodeComponent],
  imports: [
    CommonModule,
    ComponentsSourceCodeRoutingModule,
    SourceViewerModule,
    ExternalLinkModule,
    CodeModule,
    NoteModule
  ]
})
export class ComponentsSourceCodeModule {}
