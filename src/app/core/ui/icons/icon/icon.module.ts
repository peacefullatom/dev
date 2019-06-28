import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { IconComponent } from './icon.component';

/** render font awesome icon module with **all** icons */
@NgModule({
  declarations: [IconComponent],
  exports: [IconComponent],
  imports: [CommonModule, FontAwesomeModule]
})
export class IconModule {
  constructor() {
    library.add(fab, far, fas);
  }
}
