import { emptyPath } from 'src/app/const';
import { IRoute } from 'src/app/types';

import { ComponentsIntroComponent } from './components-intro.component';

export const componentsIntroComponentRoutes: IRoute[] = [
  { path: emptyPath, component: ComponentsIntroComponent }
];
