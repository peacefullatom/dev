import { IntroComponent } from './intro/intro.component';
import { IRoute } from './types';

/** the default route active css class */
export const routeActive = 'active';
/** the empty path */
export const emptyPath = '';
/** the default path */
export const defaultPath = emptyPath;
/** the level up path */
export const parentPath = '..';
/** the contact path */
export const contactPath = 'contact';
/** path to the intro section */
export const introPath = 'intro';
/** path to the prerequisites section */
export const prerequisitesPath = 'prerequisites';
/** path to the list of vscode extensions section */
export const vsCodeExtensionsPath = 'vs-code-extensions';
/** path to the git cli section */
export const gitCliPath = 'git-cli';

/** the default route definition */
export const defaultRoute: IRoute = {
  path: defaultPath,
  redirectTo: introPath,
  pathMatch: 'full',
  label: '[DEV]',
  skip: true
};

/** path to the contact section */
export const contactRoute: IRoute = {
  path: contactPath,
  label: 'Yuriy Markov',
  loadChildren: () =>
    import('src/app/page/contact/contact.module').then(m => m.ContactModule),
  skip: true
};

/** app routes definition */
export const appRoutes: IRoute[] = [
  defaultRoute,
  contactRoute,
  { path: introPath, component: IntroComponent, label: 'Intro', skip: true },
  {
    path: prerequisitesPath,
    label: 'Prerequisites',
    loadChildren: () =>
      import('./page/prerequisites/prerequisites.module').then(
        m => m.PrerequisitesModule
      )
  },
  {
    path: vsCodeExtensionsPath,
    label: 'VSCode extensions',
    loadChildren: () =>
      import('./page/vs-code-extensions/vs-code-extensions.module').then(
        m => m.VsCodeExtensionsModule
      )
  },
  {
    path: gitCliPath,
    label: 'Git CLI',
    loadChildren: () =>
      import('./page/git-cli/git-cli.module').then(m => m.GitCliModule)
  },
  { path: emptyPath, redirectTo: introPath, pathMatch: 'full', skip: true },
  { path: '**', redirectTo: '', skip: true }
];
