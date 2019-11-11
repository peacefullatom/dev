import { emptyPath } from 'src/app/const';
import { IRoute } from 'src/app/types';

export const miscIntroPath = 'intro';

export const miscChildrenRoutes: IRoute[] = [
  {
    path: emptyPath,
    redirectTo: miscIntroPath,
    skip: true
  },
  {
    path: miscIntroPath,
    data: { label: 'Intro' },
    loadChildren: () =>
      import('./misc-intro/misc-intro.module').then(m => m.MiscIntroModule)
  }
];
