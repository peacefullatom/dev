import { Component, OnInit } from '@angular/core';
import { SourceViewer } from 'src/app/core/ui/source-viewer/types';

import { conclusionAnchor } from '../../const';

@Component({
  selector: 'app-components-tabs',
  templateUrl: './components-tabs.component.html',
  styleUrls: ['./components-tabs.component.scss']
})
export class ComponentsTabsComponent implements OnInit {
  readonly tabsSources: SourceViewer = [
    { component: 'tabs', active: true },
    { id: 'tabsConstTs' },
    { id: 'tabsTypesTs' }
  ];
  readonly descriptionAnchor = 'description';
  readonly componentAnchor = 'component';
  readonly conclusionAnchor = conclusionAnchor;

  constructor() {}

  ngOnInit() {}
}
