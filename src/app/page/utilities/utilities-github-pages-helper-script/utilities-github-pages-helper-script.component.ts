import { Component, OnInit } from '@angular/core';
import { SourceViewer } from 'src/app/core/ui/source-viewer/types';

import { nodeJsUrl } from '../../const';

@Component({
  selector: 'app-utilities-github-pages-helper-script',
  templateUrl: './utilities-github-pages-helper-script.component.html',
  styleUrls: ['./utilities-github-pages-helper-script.component.scss']
})
export class UtilitiesGithubPagesHelperScriptComponent implements OnInit {
  readonly angularCliGhPagesUrl =
    'https://github.com/angular-schule/angular-cli-ghpages';
  readonly copySources: SourceViewer = { id: 'copyJs', active: true };
  readonly packageJson = `
  ...
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build --prod && node copy.js",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  ...
  `;
  readonly nodeJsUrl = nodeJsUrl;

  constructor() {}

  ngOnInit() {}
}
