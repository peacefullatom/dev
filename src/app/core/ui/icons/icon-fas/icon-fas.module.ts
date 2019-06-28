import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { IconFasComponent } from './icon-fas.component';

/** render font awesome icon module with **fas** icons */
@NgModule({
  declarations: [IconFasComponent],
  exports: [IconFasComponent],
  imports: [CommonModule, FontAwesomeModule]
})
export class IconFasModule {
  constructor() {
    library.add(fas);
  }
}
