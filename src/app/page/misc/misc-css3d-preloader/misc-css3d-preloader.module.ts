import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeModule } from 'src/app/core/ui/code/code.module';
import { ExternalLinkModule } from 'src/app/core/ui/external-link/external-link.module';
import { NoteModule } from 'src/app/core/ui/note/note.module';

import { MiscCss3dPreloaderRoutingModule } from './misc-css3d-preloader-routing.module';
import { MiscCss3dPreloaderComponent } from './misc-css3d-preloader.component';

@NgModule({
  declarations: [MiscCss3dPreloaderComponent],
  imports: [CommonModule, MiscCss3dPreloaderRoutingModule, CodeModule, NoteModule, ExternalLinkModule]
})
export class MiscCss3dPreloaderModule {}
