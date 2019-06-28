import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconFabModule } from 'src/app/core/ui/icons/icon-fab/icon-fab.module';
import { FooterComponent } from './footer.component';

/** footer module */
@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [CommonModule, RouterModule, IconFabModule]
})
export class FooterModule {}
