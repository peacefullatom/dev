import { Component, Input, OnInit } from '@angular/core';
import { IRoute } from 'src/app/types';

import { bsBgLight } from '../../const/bootstrap';
import { ActivatedRouteService } from '../../service/activated-route.service';
import { indexPlacementLeft, indexPlacementRight } from './const';
import { IndexPlacement } from './types';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ActivatedRouteService]
})
export class IndexComponent implements OnInit {
  @Input() placement: IndexPlacement = indexPlacementLeft;
  @Input() items: IRoute[] = [];

  bsBgLight = bsBgLight;
  bgDark = false;

  constructor(public readonly activatedRoute: ActivatedRouteService) {}

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

  showFooter(): boolean {
    return this.hasItems() && this.items.length > 1;
  }
}
