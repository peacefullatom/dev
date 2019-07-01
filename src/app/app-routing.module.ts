import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './const';
import { IntroModule } from './intro/intro.module';

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    IntroModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
