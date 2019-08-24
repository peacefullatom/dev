import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IndexVerticalComponent } from './index-vertical/index-vertical.component';
import { IndexComponent } from './index.component';
import { IndexHorizontalComponent } from './index-horizontal/index-horizontal.component';

@NgModule({
  declarations: [IndexComponent, IndexVerticalComponent, IndexHorizontalComponent],
  exports: [IndexComponent],
  imports: [CommonModule, RouterModule]
})
export class IndexModule {}
