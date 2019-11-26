import { Component, OnInit } from '@angular/core';
import { SourceViewer } from 'src/app/core/ui/source-viewer/types';
import { IStepperComponentSettings } from 'src/app/core/ui/stepper/types';

import { conclusionAnchor } from '../../const';
import { css3dHue, css3dMode, css3dPerspective, css3dSize } from './misc-css3d-bars/const';
import { IMiscCss3dBarsSettings } from './misc-css3d-bars/types';

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
  readonly settings: IMiscCss3dBarsSettings = {
    bars: 3,
    depth: 100,
    height: css3dSize,
    width: css3dSize,
    perspective: css3dPerspective,
    hue: css3dHue,
    mode3d: css3dMode
  };

  readonly barsSettings: IStepperComponentSettings = { max: 10, min: 1, step: 1 };
  readonly depthSettings: IStepperComponentSettings = { max: 250, min: 50, step: 50 };
  readonly perspectiveSettings: IStepperComponentSettings = { max: 1000, min: 250, step: 250 };
  readonly sizeSettings: IStepperComponentSettings = { max: 500, min: 100, step: 50 };

  readonly miscCss3dBarsSources: SourceViewer = [
    { component: 'miscCss3dBars', active: true },
    { id: 'miscCss3dBarsConstTs' },
    { id: 'miscCss3dBarsTypesTs' }
  ];

  readonly rotate3dUrl = 'https://developer.mozilla.org/docs/Web/CSS/transform-function/rotate3d';
  readonly transformStyleUrl = 'https://developer.mozilla.org/docs/Web/CSS/transform-style';
  readonly demoAnchor = 'demo';
  readonly componentAnchor = 'component';
  readonly descriptionAnchor = 'description';
  readonly conclusionAnchor = conclusionAnchor;

  readonly modeTitle = '3D mode';

  constructor() {}

  ngOnInit() {
    this.settings.hue = Math.round(Math.random() * 361);
  }
}
