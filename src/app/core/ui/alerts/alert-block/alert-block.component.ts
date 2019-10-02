import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Input, OnInit } from '@angular/core';

import { IAlertBlock } from './types';

@Component({
  selector: 'app-alert-block',
  templateUrl: './alert-block.component.html',
  styleUrls: ['./alert-block.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate('300ms'))
    ])
  ]
})
export class AlertBlockComponent implements OnInit {
  @Input() settings: IAlertBlock;

  @HostListener('mouseenter') mouseEnter(): void {
    const { mouseEnter } = this.settings;
    if (typeof mouseEnter === 'function') {
      mouseEnter();
    }
  }

  @HostListener('mouseleave') mouseLeave(): void {
    const { mouseLeave } = this.settings;
    if (typeof mouseLeave === 'function') {
      mouseLeave();
    }
  }

  constructor() {}

  ngOnInit() {
    if (!this.settings.id) {
      throw new Error('no id for the alert was provided');
    }

    const { value } = this.settings;

    this.settings.value =
      typeof value === 'string' ? value : JSON.stringify(value);
  }

  click() {
    const { close } = this.settings;
    if (typeof close === 'function') {
      close(this.settings.id);
    }
  }
}
