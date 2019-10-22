import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockquoteModule } from 'src/app/core/ui/blockquote/blockquote.module';
import { CodeModule } from 'src/app/core/ui/code/code.module';
import { ExternalLinkModule } from 'src/app/core/ui/external-link/external-link.module';

import { UtilitiesConcurrentlyRoutingModule } from './utilities-concurrently-routing.module';
import { UtilitiesConcurrentlyComponent } from './utilities-concurrently.component';

@NgModule({
  declarations: [UtilitiesConcurrentlyComponent],
  exports: [UtilitiesConcurrentlyComponent],
  imports: [
    CommonModule,
    UtilitiesConcurrentlyRoutingModule,
    ExternalLinkModule,
    BlockquoteModule,
    CodeModule
  ]
})
export class UtilitiesConcurrentlyModule {}
