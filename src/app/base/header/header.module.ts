import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from 'src/app/core/ui/navbar/navbar.module';

import { HeaderComponent } from './header.component';

/** header navigation module */
@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, NavbarModule]
})
export class HeaderModule {}
