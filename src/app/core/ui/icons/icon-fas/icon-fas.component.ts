import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

/** render font awesome icon component with **fas** icons */
@Component({
  selector: 'app-icon-fas',
  templateUrl: '../icon/icon.component.html',
  styleUrls: ['../icon/icon.component.scss']
})
export class IconFasComponent extends IconComponent {
  constructor() {
    super();
  }
}
