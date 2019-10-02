import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IndexModule } from 'src/app/core/ui/index/index.module';

import { UtilitiesRoutingModule } from './utilities-routing.module';
import { UtilitiesComponent } from './utilities.component';

@NgModule({
  declarations: [UtilitiesComponent],
  exports: [UtilitiesComponent],
  imports: [CommonModule, IndexModule, UtilitiesRoutingModule]
})
export class UtilitiesModule {}
