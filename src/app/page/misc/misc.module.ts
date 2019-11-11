import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IndexModule } from 'src/app/core/ui/index/index.module';

import { MiscRoutingModule } from './misc-routing.module';
import { MiscComponent } from './misc.component';

@NgModule({
  declarations: [MiscComponent],
  exports: [MiscComponent],
  imports: [CommonModule, MiscRoutingModule, IndexModule]
})
export class MiscModule {}
