import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { introPath } from './const';
import { IntroComponent } from './intro/intro.component';
import { IntroModule } from './intro/intro.module';

const routes: Routes = [
  { path: introPath, component: IntroComponent },
  { path: '', redirectTo: introPath, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), IntroModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
