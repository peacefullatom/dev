import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { bsAlertDanger, bsAlertInfo, bsAlertPrimary, bsAlertSuccess, bsAlertWarning } from '../bootstrap.const';
import { BsAlert } from '../bootstrap.types';
import { IAlert } from '../ui/alerts/types';

@Injectable({ providedIn: 'root' })
export class AlertService {
  $alert = new Subject<IAlert>();

  success(value: string) {
    console.log(value);
    this.$alert.next({ value, type: bsAlertSuccess });
  }

  info(value: string) {
    console.log(value);
    this.$alert.next({ value, type: bsAlertInfo });
  }

  alert(value: string) {
    console.log(value);
    this.$alert.next({ value, type: bsAlertPrimary });
  }

  warning(value: string): void {
    console.warn(value);
    this.$alert.next({ value, type: bsAlertWarning });
  }

  error(value: string) {
    console.error(value);
    this.$alert.next({ value, type: bsAlertDanger });
  }

  custom(value: string, type: BsAlert): void {
    console.log(value);
    this.$alert.next({ value, type });
  }
}
