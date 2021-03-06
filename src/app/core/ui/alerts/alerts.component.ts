import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from '../../service/alert.service';
import { IdService } from '../../service/id.service';
import { IAlertBlock } from './alert-block/types';
import {
  alertFadeTimeout,
  alertsPositionBaseAlign,
  alertsPositionBaseCenter,
  alertsPositionBaseEnd,
  alertsPositionBaseJustify,
  alertsPositionBaseStart,
  alertsPositionBottom,
  alertsPositionLeft,
  alertsPositionRight,
  alertsPositionTop,
  maxVisibleAlerts
} from './const';
import { AlertsPositionHorizontal, AlertsPositionVertical } from './types';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  @Input() vertical: AlertsPositionVertical;
  @Input() horizontal: AlertsPositionHorizontal;

  readonly alerts: IAlertBlock[] = [];

  private timeout: number;

  constructor(private readonly alert: AlertService, private readonly id: IdService) {}

  ngOnInit() {
    this.alert.$alert.subscribe(data => {
      if (this.alerts.length >= maxVisibleAlerts) {
        this.alerts.shift();
      }

      const block: IAlertBlock = {
        ...data,
        id: this.id.nextId(),
        mouseEnter: this.mouseEnter.bind(this),
        mouseLeave: this.mouseLeave.bind(this),
        close: this.close.bind(this)
      };

      this.alerts.push(block);

      this.reset();
    });
  }

  verticalPosition(): string {
    if (this.vertical === alertsPositionTop) {
      return `${alertsPositionBaseJustify}-${alertsPositionBaseStart}`;
    }

    if (this.vertical === alertsPositionBottom) {
      return `${alertsPositionBaseJustify}-${alertsPositionBaseEnd}`;
    }

    return `${alertsPositionBaseJustify}-${alertsPositionBaseCenter}`;
  }

  horizontalPosition(): string {
    if (this.horizontal === alertsPositionLeft) {
      return `${alertsPositionBaseAlign}-${alertsPositionBaseStart}`;
    }

    if (this.horizontal === alertsPositionRight) {
      return `${alertsPositionBaseAlign}-${alertsPositionBaseEnd}`;
    }

    return `${alertsPositionBaseAlign}-${alertsPositionBaseCenter}`;
  }

  private reset(): void {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }

    this.timeout = window.setTimeout(() => this.fade(), alertFadeTimeout);
  }

  private fade(): void {
    this.alerts.shift();

    if (this.alerts.length) {
      this.reset();
    }
  }

  private close(id: string): void {
    const index = this.alerts.map(alert => alert.id).indexOf(id);

    if (index !== -1) {
      this.alerts.splice(index, 1);
    }
  }

  private mouseEnter(): void {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }
  }

  private mouseLeave(): void {
    this.reset();
  }
}
