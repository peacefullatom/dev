import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { IconFarComponent } from './icon-far.component';

/** render font awesome icon module with **far** icons */
@NgModule({
  declarations: [IconFarComponent],
  exports: [IconFarComponent],
  imports: [CommonModule, FontAwesomeModule]
})
export class IconFarModule {
  constructor() {
    library.add(far);
  }
}
