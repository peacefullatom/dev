import { Component, OnInit } from '@angular/core';
import { componentsPath, rootPath, utilitiesPath } from 'src/app/const';
import { SourceViewer } from 'src/app/core/ui/source-viewer/types';

import { angularUrl, bootstrapUrl, conclusionAnchor, nodeJsUrl } from '../../const';
import { utilitiesConcurrentlyPath } from '../../utilities/const';
import { idServicePath } from '../../utilities/utilities-id/const';
import { componentsTabsPath } from '../const';

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
  readonly componentsTabsPath = [rootPath, componentsPath, componentsTabsPath];
  readonly sourceViewerSources: SourceViewer = [
    { component: 'sourceViewer', active: true },
    { id: 'sourceViewerConstTs' },
    { id: 'sourceViewerTypesTs' }
  ];
  readonly bootstrapUrl = bootstrapUrl;
  readonly addToSourcesJsonCode = `  {
    "buttonPositiveComponentTs": {
      "path": "src/app/core/ui/button-positive/button-positive.component.ts",
    }
  }`;
  readonly sourcesJsonAfterProcessingCode = `  {
    "buttonPositiveComponentTs": {
      "path": "src/app/core/ui/button-positive/button-positive.component.ts",
      "hash": "dqlmuz01"
    }
  }`;
  readonly idServicePath = idServicePath;
  readonly nodeJsUrl = nodeJsUrl;
  readonly buildScriptCode = `"build": "node sources.js && ng build --prod && node copy.js"`;
  readonly angularUrl = angularUrl;
  readonly sourcesJsSources: SourceViewer = { id: 'sourcesJs', active: true };
  readonly sourceViewerSettingsCode = `  readonly sourceViewerSources: SourceViewer = [
    { component: 'sourceViewer', active: true },
    { id: 'sourceViewerConstTs' },
    { id: 'sourceViewerTypesTs' }
  ];`;
  readonly sourceViewerSettingsSampleCode = `{ component: 'sourceViewer', active: true }`;
  readonly sourceViewerImplementationCode = `<app-source-viewer [sources]="sourcesJsSources"></app-source-viewer>`;
  readonly descriptionAnchor = 'description';
  readonly sourcesAnchor = 'sources';
  readonly processingAnchor = 'processing';
  readonly renderingAnchor = 'rendering';
  readonly conclusionAnchor = conclusionAnchor;

  constructor() {}

  ngOnInit() {}
}
