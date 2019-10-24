import { Component, OnInit } from '@angular/core';
import { rootPath, utilitiesPath } from 'src/app/const';
import { ISourceViewer } from 'src/app/core/ui/source-viewer/types';

import { utilitiesConcurrentlyPath } from '../../utilities/const';

@Component({
  selector: 'app-components-source-code',
  templateUrl: './components-source-code.component.html',
  styleUrls: ['./components-source-code.component.scss']
})
export class ComponentsSourceCodeComponent implements OnInit {
  readonly utilitiesConcurrentlyPath = [
    rootPath,
    utilitiesPath,
    utilitiesConcurrentlyPath
  ];
  readonly sourceViewerSources: ISourceViewer[] = [
    { component: 'sourceViewer', active: true },
    { id: 'sourceViewerConstTs' },
    { id: 'sourceViewerTypesTs' }
  ];

  constructor() {}

  ngOnInit() {}
}
