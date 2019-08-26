import { emptyPath } from 'src/app/const';
import { IRoute } from 'src/app/types';

export const componentsIntroPath = 'intro';

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
  }
];
