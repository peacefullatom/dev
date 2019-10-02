import { Component, Input, OnInit } from '@angular/core';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { IRoute } from 'src/app/types';

import { bsBgLight } from '../../bootstrap.const';
import { ActivatedRouteService } from '../../service/activated-route.service';
import { IdService } from '../../service/id.service';
import { indexPlacementLeft, indexPlacementRight } from './const';
import { IndexPlacement } from './types';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ActivatedRouteService]
})
export class IndexComponent implements OnInit {
  @Input() id: string;
  @Input() placement: IndexPlacement = indexPlacementLeft;
  @Input() items: IRoute[] = [];

  readonly bsBgLight = bsBgLight;
  readonly bgDark = false;
  readonly faChevronCircleRight = faChevronCircleRight;
  readonly faChevronCircleLeft = faChevronCircleLeft;

  get previousLink(): string {
    const link = this.items[this.itemIndex - 1];
    return link ? link.path : '#';
  }

  get previousLabel(): string {
    const link = this.items[this.itemIndex - 1];
    return link && link.data ? link.data.label : 'previous';
  }

  get nextLink(): string {
    const link = this.items[this.itemIndex + 1];
    return link ? link.path : '#';
  }

  get nextLabel(): string {
    const link = this.items[this.itemIndex + 1];
    return link && link.data ? link.data.label : 'next';
  }

  private get itemIndex(): number {
    return this.items.findIndex(
      item =>
        item.data && item.data.label === this.activatedRoute.firstChild.label
    );
  }

  constructor(
    public readonly activatedRoute: ActivatedRouteService,
    private readonly idService: IdService
  ) {}

  ngOnInit() {
    this.id = this.id || this.idService.nextId();
  }

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

  showPrevious(): boolean {
    return this.itemIndex > 0;
  }

  showNext(): boolean {
    return this.itemIndex < this.items.length - 1;
  }
}
