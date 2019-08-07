import { Component, OnInit } from '@angular/core';
import { bsTextCenter } from 'src/app/core/const/bootstrap';
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
  gitLensAnchor = 'GitLens';
  gitLensUrl =
    'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens';
  intelliSenseForCssAnchor = 'IntelliSenseForCss';
  intelliSenseForCssUrl =
    'https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion';
  debuggerForChromeAnchor = 'DebuggerForChrome';
  debuggerForChromeUrl =
    'https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome';
  bracketPairColorizerAnchor = 'BracketPairColorizer';
  bracketPairColorizerUrl =
    'https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer';
  spellCheckerAnchor = 'SpellChecker';
  spellCheckerUrl =
    'https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker';
  settingsSyncAnchor = 'SettingsSync';
  settingsSyncUrl =
    'https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync';

  constructor() {}

  ngOnInit() {}
}
