import { IntroComponent } from './intro/intro.component';
import { IRoute } from './types';

export const defaultPath = '/';
export const introPath = 'intro';

export const defaultRoute: IRoute = {
  path: defaultPath,
  skip: true,
  label: '[DEV]'
};

export const appRoutes: IRoute[] = [
  defaultRoute,
  { path: introPath, component: IntroComponent, label: 'Intro' },
  { path: '', redirectTo: introPath, pathMatch: 'full', skip: true },
  { path: '**', redirectTo: '', skip: true }
];
