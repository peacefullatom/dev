import { Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

/** render font awesome icon component with **fab** icons */
@Component({
  selector: 'app-icon-fab',
  templateUrl: '../icon/icon.component.html',
  styleUrls: ['../icon/icon.component.scss']
})
export class IconFabComponent extends IconComponent {
  constructor() {
    super();
  }
}
