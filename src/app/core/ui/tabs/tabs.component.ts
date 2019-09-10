import { Component, Input, OnInit } from '@angular/core';

import { bsActive } from '../../bootstrap.const';
import { tabsTypeButton } from './const';
import { ITabsItem, TabsType } from './types';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  /** tabs definition */
  @Input() tabs: ITabsItem[] = [];
  /** tabs type: anchors or buttons */
  @Input() type: TabsType = tabsTypeButton;
  /** take full width on screen */
  @Input() fill = false;

  readonly active = bsActive;

  constructor() {}

  ngOnInit() {}

  handleClick(event: MouseEvent, tab: ITabsItem): void {
    if (this.type === tabsTypeButton) {
      event.preventDefault();
    }

    if (tab) {
      const { click } = tab;
      if (typeof click === 'function') {
        click(tab);
      }
    }
  }
}
