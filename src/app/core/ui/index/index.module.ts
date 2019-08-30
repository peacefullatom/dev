import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarModule } from '../navbar/navbar.module';
import { IndexComponent } from './index.component';

@NgModule({
  declarations: [IndexComponent],
  exports: [IndexComponent],
  imports: [CommonModule, NavbarModule]
})
export class IndexModule {}
