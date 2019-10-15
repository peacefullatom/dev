import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'src/app/core/ui/button/button.module';
import { CodeModule } from 'src/app/core/ui/code/code.module';
import { SourceViewerModule } from 'src/app/core/ui/source-viewer/source-viewer.module';

import { ComponentsAlertRoutingModule } from './components-alert-routing.module';
import { ComponentsAlertComponent } from './components-alert.component';

@NgModule({
  declarations: [ComponentsAlertComponent],
  exports: [ComponentsAlertComponent],
  imports: [
    CommonModule,
    ComponentsAlertRoutingModule,
    ButtonModule,
    SourceViewerModule,
    CodeModule
  ]
})
export class ComponentsAlertModule {}
