import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckboxModule } from 'src/app/core/ui/checkbox/checkbox.module';
import { ExternalLinkModule } from 'src/app/core/ui/external-link/external-link.module';
import { SourceViewerModule } from 'src/app/core/ui/source-viewer/source-viewer.module';
import { StepperModule } from 'src/app/core/ui/stepper/stepper.module';

import { MiscCss3dBarsComponent } from './misc-css3d-bars/misc-css3d-bars.component';
import { MiscCss3dRoutingModule } from './misc-css3d-routing.module';
import { MiscCss3dComponent } from './misc-css3d.component';

@NgModule({
  declarations: [MiscCss3dComponent, MiscCss3dBarsComponent],
  exports: [MiscCss3dComponent],
  imports: [CommonModule, MiscCss3dRoutingModule, StepperModule, ExternalLinkModule, SourceViewerModule, CheckboxModule]
})
export class MiscCss3dModule {}
