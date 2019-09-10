import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CodeModule } from '../code/code.module';
import { TabsModule } from '../tabs/tabs.module';
import { SourceViewerComponent } from './source-viewer.component';

@NgModule({
  declarations: [SourceViewerComponent],
  exports: [SourceViewerComponent],
  imports: [CommonModule, TabsModule, CodeModule]
})
export class SourceViewerModule {}
