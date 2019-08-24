import { Component, Input, OnInit } from '@angular/core';
import { IRoute } from 'src/app/types';

import { indexPlacementLeft, indexPlacementRight } from './const';
import { IndexPlacement } from './types';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @Input() placement: IndexPlacement = indexPlacementLeft;
  @Input() items: IRoute[] = [];

  constructor() {}

  ngOnInit() {}

  placementLeft(): boolean {
    return this.hasItems() && this.placement === indexPlacementLeft;
  }

  placementRight(): boolean {
    return this.hasItems() && this.placement === indexPlacementRight;
  }

  hasItems(): boolean {
    return this.items instanceof Array && !!this.items.length;
  }
}
