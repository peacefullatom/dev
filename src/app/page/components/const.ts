import { emptyPath } from 'src/app/const';
import { IRoute } from 'src/app/types';

export const componentsIntroPath = 'intro';
export const componentsButtonPath = 'button';
export const componentsAlertPath = 'alert';
export const componentsSourceCodePath = 'source-code';

export const componentsChildrenRoutes: IRoute[] = [
  {
    path: emptyPath,
    redirectTo: componentsIntroPath,
    skip: true
  },
  {
    path: componentsIntroPath,
    data: { label: 'Intro' },
    loadChildren: () =>
      import('./components-intro/components-intro.module').then(
        m => m.ComponentsIntroModule
      )
  },
  {
    path: componentsButtonPath,
    data: { label: 'Button' },
    loadChildren: () =>
      import('./components-button/components-button.module').then(
        m => m.ComponentsButtonModule
      )
  },
  {
    path: componentsAlertPath,
    data: { label: 'Alert' },
    loadChildren: () =>
      import('./components-alert/components-alert.module').then(
        m => m.ComponentsAlertModule
      )
  },
  {
    path: componentsSourceCodePath,
    data: { label: 'Source Code' },
    loadChildren: () =>
      import('./components-source-code/components-source-code.module').then(
        m => m.ComponentsSourceCodeModule
      )
  }
];
