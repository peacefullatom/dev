import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeModule } from 'src/app/core/ui/code/code.module';
import { ExternalLinkModule } from 'src/app/core/ui/external-link/external-link.module';
import { NoteModule } from 'src/app/core/ui/note/note.module';
import { SourceViewerModule } from 'src/app/core/ui/source-viewer/source-viewer.module';

import { UtilitiesGithubPagesHelperScriptRoutingModule } from './utilities-github-pages-helper-script-routing.module';
import { UtilitiesGithubPagesHelperScriptComponent } from './utilities-github-pages-helper-script.component';

@NgModule({
  declarations: [UtilitiesGithubPagesHelperScriptComponent],
  exports: [UtilitiesGithubPagesHelperScriptComponent],
  imports: [
    CommonModule,
    UtilitiesGithubPagesHelperScriptRoutingModule,
    ExternalLinkModule,
    NoteModule,
    CodeModule,
    SourceViewerModule
  ]
})
export class UtilitiesGithubPagesHelperScriptModule {}
