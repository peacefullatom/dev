import { emptyPath } from 'src/app/const';
import { IRoute } from 'src/app/types';

export const componentsIntroPath = 'intro';

export const componentsChildrenRoutes: IRoute[] = [
  {
    skip: true,
    path: emptyPath,
    redirectTo: componentsIntroPath
  },
  {
    label: 'Intro',
    path: componentsIntroPath,
    loadChildren: () =>
      import('./components-intro/components-intro.module').then(
        m => m.ComponentsIntroModule
      )
  }
];
