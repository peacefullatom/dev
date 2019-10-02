import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeModule } from 'src/app/core/ui/code/code.module';
import { SourceViewerModule } from 'src/app/core/ui/source-viewer/source-viewer.module';

import { UtilitiesIdRoutingModule } from './utilities-id-routing.module';
import { UtilitiesIdComponent } from './utilities-id.component';

@NgModule({
  declarations: [UtilitiesIdComponent],
  exports: [UtilitiesIdComponent],
  imports: [
    CommonModule,
    UtilitiesIdRoutingModule,
    SourceViewerModule,
    CodeModule
  ]
})
export class UtilitiesIdModule {}
