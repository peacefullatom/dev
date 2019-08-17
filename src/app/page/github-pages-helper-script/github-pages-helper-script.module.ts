import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeModule } from 'src/app/core/ui/code/code.module';
import { ExternalLinkModule } from 'src/app/core/ui/external-link/external-link.module';
import { NoteModule } from 'src/app/core/ui/note/note.module';

import { GithubPagesHelperScriptRoutingModule } from './github-pages-helper-script-routing.module';
import { GithubPagesHelperScriptComponent } from './github-pages-helper-script.component';

@NgModule({
  declarations: [GithubPagesHelperScriptComponent],
  exports: [GithubPagesHelperScriptComponent],
  imports: [
    CommonModule,
    GithubPagesHelperScriptRoutingModule,
    ExternalLinkModule,
    NoteModule,
    CodeModule
  ]
})
export class GithubPagesHelperScriptModule {}
