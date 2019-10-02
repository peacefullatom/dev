import { Component, OnInit } from '@angular/core';

import { utilitiesChildrenRoutes } from './const';

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss']
})
export class UtilitiesComponent implements OnInit {
  items = utilitiesChildrenRoutes.filter(item => !item.skip);

  constructor() {}

  ngOnInit() {}
}
