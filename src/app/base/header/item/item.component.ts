import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { routeActive } from 'src/app/const';
import { IRoute } from 'src/app/types';

@Component({
  selector: 'app-header-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class HeaderItemComponent implements OnInit {
  @Input() item: IRoute;
  @Output() itemClick = new EventEmitter<void>();

  active = routeActive;

  constructor() {}

  ngOnInit() {}

  click(): void {
    this.itemClick.next();
  }
}
