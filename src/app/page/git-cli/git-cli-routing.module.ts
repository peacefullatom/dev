import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { emptyPath } from 'src/app/const';
import { GitCliComponent } from './git-cli.component';

const gitCliRoutes: Routes = [{ path: emptyPath, component: GitCliComponent }];

@NgModule({
  imports: [RouterModule.forChild(gitCliRoutes)],
  exports: [RouterModule]
})
export class GitCliRoutingModule {}
