import { Component, OnInit } from '@angular/core';
import { faIcons } from '@fortawesome/free-solid-svg-icons';
import { bsBtnDanger, bsBtnDark, bsBtnSizeLarge, bsBtnSizeSmall, bsBtnWarning } from 'src/app/core/bootstrap.const';
import { faIconSize2x } from 'src/app/core/fa.const';
import { SourceViewer } from 'src/app/core/ui/source-viewer/types';

import { bootstrapUrl } from '../../const';

@Component({
  selector: 'app-components-button',
  templateUrl: './components-button.component.html',
  styleUrls: ['./components-button.component.scss']
})
export class ComponentsButtonComponent implements OnInit {
  readonly faIcons = faIcons;
  readonly buttonSources: SourceViewer = { component: 'button', active: true };
  readonly buttonPositiveSources: SourceViewer = [
    { singleComponent: 'buttonPositive', active: true },
    { module: 'buttonPositive' }
  ];
  readonly bsBtnDark = bsBtnDark;
  readonly bsBtnWarning = bsBtnWarning;
  readonly bsBtnDanger = bsBtnDanger;
  readonly bsBtnSizeSmall = bsBtnSizeSmall;
  readonly bsBtnSizeLarge = bsBtnSizeLarge;

  readonly faIconSize2x = faIconSize2x;

  readonly bootstrapUrl = bootstrapUrl;

  readonly buttonCode = `<button></button>`;

  constructor() {}

  ngOnInit() {}
}
