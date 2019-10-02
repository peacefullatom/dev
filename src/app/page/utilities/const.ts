import { emptyPath } from 'src/app/const';
import { IRoute } from 'src/app/types';

export const utilitiesIntroPath = 'intro';
export const utilitiesGithubPagesHelperScriptPath =
  'github-pages-helper-script';
export const utilitiesIdPath = 'id';

export const utilitiesChildrenRoutes: IRoute[] = [
  {
    path: emptyPath,
    redirectTo: utilitiesIntroPath,
    skip: true
  },
  {
    path: utilitiesIntroPath,
    data: { label: 'Intro' },
    loadChildren: () =>
      import('./utilities-into/utilities-into.module').then(
        m => m.UtilitiesIntoModule
      )
  },
  {
    path: utilitiesGithubPagesHelperScriptPath,
    data: { label: 'Github Pages Helper Script' },
    loadChildren: () =>
      import(
        './utilities-github-pages-helper-script/utilities-github-pages-helper-script.module'
      ).then(m => m.UtilitiesGithubPagesHelperScriptModule)
  },
  {
    path: utilitiesIdPath,
    data: { label: 'Id Service' },
    loadChildren: () =>
      import('./utilities-id/utilities-id.module').then(
        m => m.UtilitiesIdModule
      )
  }
];
