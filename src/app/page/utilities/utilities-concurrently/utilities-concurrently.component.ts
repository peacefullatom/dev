import { Component, OnInit } from '@angular/core';
import { componentsPath, rootPath } from 'src/app/const';
import { bsTextAlignCenter } from 'src/app/core/bootstrap.const';

import { componentsSourceCodePath } from '../../components/const';
import { conclusionAnchor, nodeJsUrl } from '../../const';

@Component({
  selector: 'app-utilities-concurrently',
  templateUrl: './utilities-concurrently.component.html',
  styleUrls: ['./utilities-concurrently.component.scss']
})
export class UtilitiesConcurrentlyComponent implements OnInit {
  readonly concurrentlyUrl = 'https://github.com/kimmobrunfeldt/concurrently';
  readonly concurrentlyReadmeUrl =
    'https://github.com/kimmobrunfeldt/concurrently/blob/master/README.md';
  readonly concurrentlyReadmeUsageUrl =
    'https://github.com/kimmobrunfeldt/concurrently/blob/master/README.md#usage';
  readonly outputCode = `  [1] [nodemon] restarting due to changes...
  [1] [nodemon] starting \`node sources.js\`
  [0] i ｢wdm｣: Compiling...
  100% of source files processed
  [1] [nodemon] clean exit - waiting for changes before restart
  [0]
  [0] Date: 2019-10-21T23:33:11.015Z - Hash: 2d40bfd8ab7b39a3fedf
  [0] 21 unchanged chunks
  [0] chunk {utilities-concurrently-utilities-concurrently-module} utilities-concurrently-utilities-concurrently-module.js, utilities-concurrently-utilities-concurrently-module.js.map (utilities-concurrently-utilities-concurrently-module) 20.5 kB  [rendered]
  Time: 3329ms
  [0] i ｢wdm｣: Compiled successfully.`;
  readonly bsTextAlignCenter = bsTextAlignCenter;
  readonly taskAnchor = 'task';
  readonly solutionAnchor = 'solution';
  readonly conclusionAnchor = conclusionAnchor;
  readonly componentsSourceCodePath = [
    rootPath,
    componentsPath,
    componentsSourceCodePath
  ];
  readonly nodeJsUrl = nodeJsUrl;

  constructor() {}

  ngOnInit() {}
}
