import { Component, OnInit } from '@angular/core';
import { SourceViewer } from 'src/app/core/ui/source-viewer/types';
import { IStepperComponentSettings } from 'src/app/core/ui/stepper/types';

interface IMiscCss3dComponentControl {
  label: string;
  value: number;
  settings: IStepperComponentSettings;
}

@Component({
  selector: 'app-misc-css3d',
  templateUrl: './misc-css3d.component.html',
  styleUrls: ['./misc-css3d.component.scss']
})
export class MiscCss3dComponent implements OnInit {
  bars = 3;
  depth = 100;
  height = 500;
  width = 500;
  hue: number;

  readonly barsSettings: IStepperComponentSettings = { max: 10, min: 1, step: 1 };
  readonly depthSettings: IStepperComponentSettings = { max: 250, min: 50, step: 50 };
  readonly sizeSettings: IStepperComponentSettings = { max: 500, min: 100, step: 50 };

  readonly rotate3dUrl = 'https://developer.mozilla.org/docs/Web/CSS/transform-function/rotate3d';

  readonly miscCss3dBarsSources: SourceViewer = [
    { component: 'miscCss3dBars', active: true },
    { id: 'miscCss3dBarsConstTs' },
    { id: 'miscCss3dBarsTypesTs' }
  ];

  constructor() {}

  ngOnInit() {
    this.hue = Math.round(Math.random() * 361);
  }
}
