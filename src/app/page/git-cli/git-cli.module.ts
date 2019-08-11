import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GitCliRoutingModule } from './git-cli-routing.module';
import { GitCliComponent } from './git-cli.component';

@NgModule({
  declarations: [GitCliComponent],
  exports: [GitCliComponent],
  imports: [CommonModule, GitCliRoutingModule]
})
export class GitCliModule {}
