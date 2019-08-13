import { Component, OnInit } from '@angular/core';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { gitCliPath, parentPath, vsCodeExtensionsPath } from 'src/app/const';

import { codeUrl, gitGuiUrl, gitUrl } from '../const';
import { gitAnchor } from './const';

@Component({
  selector: 'app-prerequisites',
  templateUrl: './prerequisites.component.html',
  styleUrls: ['./prerequisites.component.scss']
})
export class PrerequisitesComponent implements OnInit {
  nodeJsAnchor = 'NodeJs';
  nodeJsUrl = 'https://nodejs.org';
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
  angularUrl = 'https://angular.io';
  bootstrapAnchor = 'Bootstrap';
  bootstrapUrl = 'https://getbootstrap.com/';
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
