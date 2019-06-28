import { IntroComponent } from './intro/intro.component';
import { IRoute } from './types';

/** the default route active css class */
export const routeActive = 'active';
/** the default path */
export const defaultPath = '/';
/** the contact path */
export const contactPath = 'contact';
/** path to the intro section */
export const introPath = 'intro';

/** the default route definition */
export const defaultRoute: IRoute = {
  path: defaultPath,
  skip: true,
  label: '[DEV]'
};

/** path to the contact section */
export const contactRoute: IRoute = {
  path: contactPath,
  label: 'Yuriy Markov'
};

/** app routes definition */
export const appRoutes: IRoute[] = [
  defaultRoute,
  contactRoute,
  { path: introPath, component: IntroComponent, label: 'Intro' },
  { path: '', redirectTo: introPath, pathMatch: 'full', skip: true },
  { path: '**', redirectTo: '', skip: true }
];
