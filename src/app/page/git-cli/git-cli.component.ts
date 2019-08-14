import { Component, OnInit } from '@angular/core';
import { parentPath, prerequisitesPath } from 'src/app/const';

import { gitGuiUrl, gitUrl } from '../const';
import { gitAnchor } from '../prerequisites/const';

@Component({
  selector: 'app-git-cli',
  templateUrl: './git-cli.component.html',
  styleUrls: ['./git-cli.component.scss']
})
export class GitCliComponent implements OnInit {
  prerequisitesPath = [parentPath, prerequisitesPath];
  gitAnchor = gitAnchor;
  gitUrl = gitUrl;
  gitGuiUrl = gitGuiUrl;
  initAnchor = 'init';
  pullAnchor = 'pull';
  branchAnchor = 'branch';
  checkoutAnchor = 'checkout';
  pushAnchor = 'push';
  addAnchor = 'add';
  commitAnchor = 'commit';
  mergeAnchor = 'merge';
  helpAnchor = 'help';
  summaryAnchor = 'summary';

  constructor() {}

  ngOnInit() {}
}
