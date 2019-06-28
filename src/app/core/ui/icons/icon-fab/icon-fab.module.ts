import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { IconFabComponent } from './icon-fab.component';

/** render font awesome icon module with **fab** icons */
@NgModule({
  declarations: [IconFabComponent],
  exports: [IconFabComponent],
  imports: [CommonModule, FontAwesomeModule]
})
export class IconFabModule {
  constructor() {
    library.add(fab);
  }
}
