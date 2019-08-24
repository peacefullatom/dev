import { Component, Input, OnInit } from '@angular/core';
import { routeActive } from 'src/app/const';
import { IRoute } from 'src/app/types';

@Component({
  selector: 'app-index-vertical',
  templateUrl: './index-vertical.component.html',
  styleUrls: ['./index-vertical.component.scss']
})
export class IndexVerticalComponent implements OnInit {
  @Input() items: IRoute[] = [];

  active = routeActive;

  constructor() {}

  ngOnInit() {}
}
