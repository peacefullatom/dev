import { IntroComponent } from './intro/intro.component';
import { IRoute } from './types';

/** the empty path */
export const emptyPath = '';
/** the default path */
export const defaultPath = emptyPath;
/** the level up path */
export const parentPath = '..';
/** non-relative path */
export const rootPath = '/';
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
/** path to the utilities section */
export const utilitiesPath = 'utilities';
/** path to the components section */
export const componentsPath = 'components';

/** the default route definition */
export const defaultRoute: IRoute = {
  path: defaultPath,
  redirectTo: introPath,
  pathMatch: 'full',
  data: { label: '[DEV]' },
  skip: true
};

/** path to the contact section */
export const contactRoute: IRoute = {
  path: contactPath,
  data: { label: 'Yuriy Markov' },
  loadChildren: () =>
    import('src/app/page/contact/contact.module').then(m => m.ContactModule),
  skip: true
};

/** path to the intro sections */
export const introRoute: IRoute = {
  path: introPath,
  component: IntroComponent,
  data: { label: '[DEV]' },
  skip: true
};

/** app routes definition */
export const appRoutes: IRoute[] = [
  defaultRoute,
  introRoute,
  {
    path: prerequisitesPath,
    data: { label: 'Prerequisites' },
    loadChildren: () =>
      import('./page/prerequisites/prerequisites.module').then(
        m => m.PrerequisitesModule
      )
  },
  {
    path: vsCodeExtensionsPath,
    data: { label: 'VSCode extensions' },
    loadChildren: () =>
      import('./page/vs-code-extensions/vs-code-extensions.module').then(
        m => m.VsCodeExtensionsModule
      )
  },
  {
    path: gitCliPath,
    data: { label: 'Git CLI' },
    loadChildren: () =>
      import('./page/git-cli/git-cli.module').then(m => m.GitCliModule)
  },
  {
    path: utilitiesPath,
    data: { label: 'Utilities' },
    loadChildren: () =>
      import('./page/utilities/utilities.module').then(m => m.UtilitiesModule)
  },
  {
    path: componentsPath,
    data: { label: 'Components' },
    loadChildren: () =>
      import('./page/components/components.module').then(
        m => m.ComponentsModule
      )
  },
  contactRoute,
  { path: emptyPath, redirectTo: introPath, pathMatch: 'full', skip: true },
  { path: '**', redirectTo: '', skip: true }
];
