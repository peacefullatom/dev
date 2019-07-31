import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrerequisitesRoutingModule } from './prerequisites-routing.module';
import { PrerequisitesComponent } from './prerequisites.component';

@NgModule({
  declarations: [PrerequisitesComponent],
  exports: [PrerequisitesComponent],
  imports: [CommonModule, PrerequisitesRoutingModule]
})
export class PrerequisitesModule {}
