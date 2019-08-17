import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CodeModule } from 'src/app/core/ui/code/code.module';
import { ExternalLinkModule } from 'src/app/core/ui/external-link/external-link.module';
import { NoteModule } from 'src/app/core/ui/note/note.module';

import { GitCliRoutingModule } from './git-cli-routing.module';
import { GitCliComponent } from './git-cli.component';

@NgModule({
  declarations: [GitCliComponent],
  exports: [GitCliComponent],
  imports: [
    CommonModule,
    GitCliRoutingModule,
    ExternalLinkModule,
    FontAwesomeModule,
    CodeModule,
    NoteModule
  ]
})
export class GitCliModule {}
