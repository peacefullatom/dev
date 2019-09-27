import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonPositiveModule } from 'src/app/core/ui/button-positive/button-positive.module';
import { ButtonModule } from 'src/app/core/ui/button/button.module';
import { CodeModule } from 'src/app/core/ui/code/code.module';
import { ExternalLinkModule } from 'src/app/core/ui/external-link/external-link.module';
import { SourceViewerModule } from 'src/app/core/ui/source-viewer/source-viewer.module';

import { ComponentsButtonRoutingModule } from './components-button-routing.module';
import { ComponentsButtonComponent } from './components-button.component';

@NgModule({
  declarations: [ComponentsButtonComponent],
  exports: [ComponentsButtonComponent],
  imports: [
    ButtonPositiveModule,
    ButtonModule,
    CodeModule,
    CommonModule,
    ComponentsButtonRoutingModule,
    ExternalLinkModule,
    FontAwesomeModule,
    SourceViewerModule
  ]
})
export class ComponentsButtonModule {}
