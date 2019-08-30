import { Component, OnInit } from '@angular/core';
import { prerequisitesPath, rootPath } from 'src/app/const';
import { bsTextAlignCenter } from 'src/app/core/const/bootstrap';

@Component({
  selector: 'app-components-intro',
  templateUrl: './components-intro.component.html',
  styleUrls: ['./components-intro.component.scss']
})
export class ComponentsIntroComponent implements OnInit {
  prerequisitesPath = [rootPath, prerequisitesPath];
  bsTextAlignCenter = bsTextAlignCenter;

  constructor() {}

  ngOnInit() {}
}
