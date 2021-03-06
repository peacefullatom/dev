import { Component, OnInit } from '@angular/core';
import {
  bsAlertDanger,
  bsAlertDark,
  bsAlertInfo,
  bsAlertLight,
  bsAlertPrimary,
  bsAlertSecondary,
  bsAlertSuccess,
  bsAlertWarning,
} from 'src/app/core/bootstrap.const';
import { AlertService } from 'src/app/core/service/alert.service';
import { SourceViewer } from 'src/app/core/ui/source-viewer/types';

import { conclusionAnchor } from '../../const';
import { idServicePath } from '../../utilities/utilities-id/const';

@Component({
  selector: 'app-components-alert',
  templateUrl: './components-alert.component.html',
  styleUrls: ['./components-alert.component.scss']
})
export class ComponentsAlertComponent implements OnInit {
  readonly alertsSources: SourceViewer = [
    { component: 'alerts', active: true },
    { id: 'alertsConstTs' },
    { id: 'alertsTypesTs' }
  ];
  readonly alertBlockSources: SourceViewer = [
    { template: 'alertBlock', active: true },
    { style: 'alertBlock' },
    { singleComponent: 'alertBlock' },
    { id: 'alertBlockTypesTs' }
  ];
  readonly alertService: SourceViewer = { service: 'alert', active: true };
  readonly implementationSources: SourceViewer = [
    { template: 'app', active: true },
    { singleComponent: 'app' },
    { module: 'app' }
  ];
  readonly alertsInjectionCode = `constructor(private readonly alert: AlertService) {}`;
  readonly alertsInvocationCode = `this.alerts.success('You made it!')`;
  readonly descriptionAnchor = 'description';
  readonly alertsAnchor = 'alerts';
  readonly alertBlockAnchor = 'alertBlock';
  readonly alertsServiceAnchor = 'alertsService';
  readonly implementationAnchor = 'implementation';
  readonly usageAnchor = 'usage';
  readonly conclusionAnchor = conclusionAnchor;
  readonly referenceAnchor = 'reference';
  readonly idServicePath = idServicePath;

  constructor(private readonly alert: AlertService) {}

  ngOnInit() {}

  showAlert(): void {
    const types = [
      bsAlertPrimary,
      bsAlertSecondary,
      bsAlertSuccess,
      bsAlertDanger,
      bsAlertWarning,
      bsAlertInfo,
      bsAlertLight,
      bsAlertDark
    ];
    const randomType = Math.floor(Math.random() * types.length);
    this.alert.custom('alert works', types[randomType]);
  }
}
