import { Component, OnInit } from '@angular/core';

import { componentsChildrenRoutes } from './const';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  items = componentsChildrenRoutes.filter(item => !item.skip);

  constructor() {}

  ngOnInit() {}
}
