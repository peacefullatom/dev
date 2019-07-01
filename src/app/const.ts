import { IntroComponent } from './intro/intro.component';
import { IRoute } from './types';

/** the default route active css class */
export const routeActive = 'active';
/** the default path */
export const defaultPath = '';
/** the contact path */
export const contactPath = 'contact';
/** path to the intro section */
export const introPath = 'intro';

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
  { path: '', redirectTo: introPath, pathMatch: 'full', skip: true },
  { path: '**', redirectTo: '', skip: true }
];
