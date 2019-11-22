import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import { stepperMax, stepperMin, stepperStep } from './const';
import { IStepperComponentSettings } from './types';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  @Input() settings: IStepperComponentSettings;
  @Input() value = 0;
  @Output() valueChange = new EventEmitter<number>();

  readonly decrementTitle = 'decrement';
  readonly incrementTitle = 'increment';
  readonly valueTitle = 'value';
  readonly faMinus = faMinus;
  readonly faPlus = faPlus;

  get min(): number {
    return this.settings ? this.settings.min : stepperMin;
  }

  get max(): number {
    return this.settings ? this.settings.max : stepperMax;
  }

  get step(): number {
    return this.settings ? this.settings.step : stepperStep;
  }

  constructor() {}

  ngOnInit() {}

  decrement(): void {
    this.value = this.value - this.step;
    if (this.value < this.min) {
      this.value = this.min;
    }
    this.valueChange.next(this.value);
  }

  increment(): void {
    this.value = this.value + this.step;
    if (this.value > this.max) {
      this.value = this.max;
    }
    this.valueChange.next(this.value);
  }
}
