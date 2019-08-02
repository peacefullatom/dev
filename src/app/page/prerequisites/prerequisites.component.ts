import { Component, OnInit } from '@angular/core';
import { gitCliPath, parentPath, vsCodeExtensionsPath } from 'src/app/const';

@Component({
  selector: 'app-prerequisites',
  templateUrl: './prerequisites.component.html',
  styleUrls: ['./prerequisites.component.scss']
})
export class PrerequisitesComponent implements OnInit {
  nodeJsUrl = 'https://nodejs.org';
  yarnUrl = 'https://yarnpkg.com/';
  eclipseUrl = 'http://eclipse.org/';
  netBeansUrl = 'https://netbeans.org/';
  webStormUrl = 'https://www.jetbrains.com/webstorm/';
  codeUrl = 'https://code.visualstudio.com/';
  atomUrl = 'https://atom.io/';
  sublimeUrl = 'https://www.sublimetext.com/';
  vimUrl = 'http://www.vim.org/';
  gitUrl = 'https://git-scm.com/';
  gitGuiUrl = 'https://git-scm.com/downloads/guis';
  bootstrapUrl = 'https://getbootstrap.com/';
  fontAwesomeUrl = 'https://fontawesome.com/';
  fontAwesomeIconsUrl = 'https://fontawesome.com/icons';
  angularFontAwesomeUrl = 'https://github.com/FortAwesome/angular-fontawesome';
  vsCodeExtensionsPath = [parentPath, vsCodeExtensionsPath];
  gitCliPath = [parentPath, gitCliPath];

  constructor() {}

  ngOnInit() {}
}
