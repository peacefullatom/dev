import { Component, OnInit } from '@angular/core';

import { miscChildrenRoutes } from './const';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent implements OnInit {
  items = miscChildrenRoutes.filter(item => !item.skip);

  constructor() {}

  ngOnInit() {}
}
