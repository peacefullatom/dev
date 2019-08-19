import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { HeaderItemComponent } from './item/item.component';

/** header navigation module */
@NgModule({
  declarations: [HeaderComponent, HeaderItemComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, RouterModule]
})
export class HeaderModule {}
