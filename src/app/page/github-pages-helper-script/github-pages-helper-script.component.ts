import { Component, OnInit } from '@angular/core';
import sources from 'src/sources.json';

@Component({
  selector: 'app-github-pages-helper-script',
  templateUrl: './github-pages-helper-script.component.html',
  styleUrls: ['./github-pages-helper-script.component.scss']
})
export class GithubPagesHelperScriptComponent implements OnInit {
  angularCliGhPagesUrl =
    'https://github.com/angular-schule/angular-cli-ghpages';
  copyJs: string;
  packageJson = `
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

  constructor() {}

  ngOnInit() {
    fetch(`assets/sources/${sources.copyJs.hash}`).then(
      data => data.text().then(text => (this.copyJs = text)),
      error => console.log(error)
    );
  }
}
