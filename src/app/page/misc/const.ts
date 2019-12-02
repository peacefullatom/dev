import { emptyPath } from 'src/app/const';
import { IRoute } from 'src/app/types';

export const miscIntroPath = 'intro';
export const miscCss3dPath = 'css-3d';
export const miscCss3dPathPreloader = 'css-pseudo-3d-preloader';

export const miscChildrenRoutes: IRoute[] = [
  {
    path: emptyPath,
    redirectTo: miscIntroPath,
    skip: true
  },
  {
    path: miscIntroPath,
    data: { label: 'Intro' },
    loadChildren: () => import('./misc-intro/misc-intro.module').then(m => m.MiscIntroModule)
  },
  {
    path: miscCss3dPath,
    data: { label: 'CSS 3D' },
    loadChildren: () => import('./misc-css3d/misc-css3d.module').then(m => m.MiscCss3dModule)
  },
  {
    path: miscCss3dPathPreloader,
    data: { label: 'CSS Pseudo 3D Preloader' },
    loadChildren: () => import('./misc-css3d-preloader/misc-css3d-preloader.module').then(m => m.MiscCss3dPreloaderModule)
  }
];
