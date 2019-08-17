import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-pages-helper-script',
  templateUrl: './github-pages-helper-script.component.html',
  styleUrls: ['./github-pages-helper-script.component.scss']
})
export class GithubPagesHelperScriptComponent implements OnInit {
  angularCliGhPagesUrl =
    'https://github.com/angular-schule/angular-cli-ghpages';
  copyJs = `
/**
* this small utility script allows copying freshly built index.html into 404.html
*/
var fse = require("fs-extra");
var path = \`\${__dirname}/docs\`;
fse
  .copy(\`\${path}/index.html\`, \`\${path}/404.html\`)
  .then(
    () => console.log("404.html was copied successfully."),
    err => console.error("404.html was not copied.\\n" + err)
  );
  `;
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

  ngOnInit() {}
}
