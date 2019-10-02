import { Component, Input, OnInit } from '@angular/core';

import { bsActive } from '../../bootstrap.const';
import { IdService } from '../../service/id.service';
import { tabsTypeButton } from './const';
import { ITabsItem, TabsType } from './types';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() id: string;
  /** tabs definition */
  @Input() tabs: ITabsItem[] = [];
  /** tabs type: anchors or buttons */
  @Input() type: TabsType = tabsTypeButton;
  /** take full width on screen */
  @Input() fill = false;

  readonly active = bsActive;

  constructor(private readonly idService: IdService) {}

  ngOnInit() {
    this.id = this.id || this.idService.nextId();
  }

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
