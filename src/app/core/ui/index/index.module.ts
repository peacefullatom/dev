import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarModule } from '../navbar/navbar.module';
import { IndexComponent } from './index.component';

@NgModule({
  declarations: [IndexComponent],
  exports: [IndexComponent],
  imports: [CommonModule, RouterModule, NavbarModule, FontAwesomeModule]
})
export class IndexModule {}
