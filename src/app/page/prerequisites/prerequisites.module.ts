import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExternalLinkModule } from 'src/app/core/ui/external-link/external-link.module';
import { PrerequisitesRoutingModule } from './prerequisites-routing.module';
import { PrerequisitesComponent } from './prerequisites.component';

@NgModule({
  declarations: [PrerequisitesComponent],
  exports: [PrerequisitesComponent],
  imports: [CommonModule, PrerequisitesRoutingModule, ExternalLinkModule]
})
export class PrerequisitesModule {}
