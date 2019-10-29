import { Component, OnInit } from '@angular/core';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { gitCliPath, parentPath, vsCodeExtensionsPath } from 'src/app/const';

import { angularUrl, bootstrapUrl, codeUrl, gitGuiUrl, gitUrl, nodeJsUrl } from '../const';
import { gitAnchor } from './const';

@Component({
  selector: 'app-prerequisites',
  templateUrl: './prerequisites.component.html',
  styleUrls: ['./prerequisites.component.scss']
})
export class PrerequisitesComponent implements OnInit {
  nodeJsAnchor = 'NodeJs';
  nodeJsUrl = nodeJsUrl;
  yarnAnchor = 'Yarn';
  yarnUrl = 'https://yarnpkg.com/';
  ideAnchor = 'IDE';
  eclipseUrl = 'http://eclipse.org/';
  netBeansUrl = 'https://netbeans.org/';
  webStormUrl = 'https://www.jetbrains.com/webstorm/';
  codeUrl = codeUrl;
  atomUrl = 'https://atom.io/';
  sublimeUrl = 'https://www.sublimetext.com/';
  vimUrl = 'http://www.vim.org/';
  gitAnchor = gitAnchor;
  gitUrl = gitUrl;
  gitGuiUrl = gitGuiUrl;
  angularAnchor = 'Angular';
  angularUrl = angularUrl;
  bootstrapAnchor = 'Bootstrap';
  bootstrapUrl = bootstrapUrl;
  fontAwesomeAnchor = 'FontAwesome';
  fontAwesomeUrl = 'https://fontawesome.com/';
  fontAwesomeIconsUrl = 'https://fontawesome.com/icons';
  angularFontAwesomeUrl = 'https://github.com/FortAwesome/angular-fontawesome';
  vsCodeExtensionsPath = [parentPath, vsCodeExtensionsPath];
  gitCliPath = [parentPath, gitCliPath];
  faExternalLinkSquareAlt = faExternalLinkSquareAlt;

  constructor() {}

  ngOnInit() {}
}
