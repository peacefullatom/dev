import { Component, OnInit } from '@angular/core';
import { codeUrl } from '../const';

@Component({
  selector: 'app-vs-code-extensions',
  templateUrl: './vs-code-extensions.component.html',
  styleUrls: ['./vs-code-extensions.component.scss']
})
export class VsCodeExtensionsComponent implements OnInit {
  codeUrl = codeUrl;
  codeMarketUrl = 'https://marketplace.visualstudio.com/';
  tsLintAnchor = 'TSLint';
  tsLintUrl =
    'https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin';
  typescriptHeroAnchor = 'TypeScriptHero';
  typescriptHeroUrl =
    'https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero';
  prettierAnchor = 'Prettier';
  prettierUrl =
    'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode';
  intelliCodeAnchor = 'IntelliCode';
  intelliCodeUrl =
    'https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode';

  constructor() {}

  ngOnInit() {}
}
