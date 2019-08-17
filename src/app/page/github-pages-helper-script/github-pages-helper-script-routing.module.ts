import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { emptyPath } from 'src/app/const';

import { GithubPagesHelperScriptComponent } from './github-pages-helper-script.component';

const githubPagesHelperScriptRoutes: Routes = [
  { path: emptyPath, component: GithubPagesHelperScriptComponent }
];

@NgModule({
  imports: [RouterModule.forChild(githubPagesHelperScriptRoutes)],
  exports: [RouterModule]
})
export class GithubPagesHelperScriptRoutingModule {}
