import { Component } from '@angular/core';

import { appRoutes } from './const';
import { alertsPositionRight, alertsPositionTop } from './core/ui/alerts/const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly title = '[DEV]';
  readonly routes = appRoutes;
  readonly horizontal = alertsPositionRight;
  readonly vertical = alertsPositionTop;
}
