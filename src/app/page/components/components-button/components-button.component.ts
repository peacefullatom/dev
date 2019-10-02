import { Component, OnInit } from '@angular/core';
import { faIcons } from '@fortawesome/free-solid-svg-icons';
import { bsBtnDanger, bsBtnDark, bsBtnSizeLarge, bsBtnSizeSmall, bsBtnWarning } from 'src/app/core/bootstrap.const';
import { faIconSize2x } from 'src/app/core/fa.const';
import { buttonPositiveId } from 'src/app/core/ui/button-positive/const';
import { SourceViewer } from 'src/app/core/ui/source-viewer/types';

import { bootstrapUrl } from '../../const';
import { idServicePath } from '../../utilities/utilities-id/const';

@Component({
  selector: 'app-components-button',
  templateUrl: './components-button.component.html',
  styleUrls: ['./components-button.component.scss']
})
export class ComponentsButtonComponent implements OnInit {
  readonly faIcons = faIcons;
  readonly buttonSources: SourceViewer = { component: 'button', active: true };
  readonly buttonPositiveSources: SourceViewer = [
    { singleComponent: buttonPositiveId, active: true },
    { module: buttonPositiveId }
  ];
  readonly bsBtnDark = bsBtnDark;
  readonly bsBtnWarning = bsBtnWarning;
  readonly bsBtnDanger = bsBtnDanger;
  readonly bsBtnSizeSmall = bsBtnSizeSmall;
  readonly bsBtnSizeLarge = bsBtnSizeLarge;
  readonly faIconSize2x = faIconSize2x;
  readonly bootstrapUrl = bootstrapUrl;
  readonly buttonCode = `<button></button>`;
  readonly buttonPositiveExampleCode = `<app-button-positive (click)="agree()">Agree</app-button-positive>`;
  readonly templateAnchor = 'template';
  readonly styleAnchor = 'style';
  readonly componentAnchor = 'component';
  readonly moduleAnchor = 'module';
  readonly exampleAnchor = 'example';
  readonly conclusionAnchor = 'conclusion';
  readonly idServicePath = idServicePath;

  constructor() {}

  ngOnInit() {}
}
