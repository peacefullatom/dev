import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { utilitiesGithubPagesHelperScriptRoutes } from './const';

@NgModule({
  imports: [RouterModule.forChild(utilitiesGithubPagesHelperScriptRoutes)],
  exports: [RouterModule]
})
export class UtilitiesGithubPagesHelperScriptRoutingModule {}
