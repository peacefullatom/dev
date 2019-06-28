import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

/** render font awesome icon component with **far** icons */
@Component({
  selector: 'app-icon-far',
  templateUrl: '../icon/icon.component.html',
  styleUrls: ['../icon/icon.component.scss']
})
export class IconFarComponent extends IconComponent {
  constructor() {
    super();
  }
}
