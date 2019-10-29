import { emptyPath } from 'src/app/const';
import { IRoute } from 'src/app/types';

import { ComponentsSourceCodeComponent } from './components-source-code.component';

export const componentsSourceCodeComponentRoutes: IRoute[] = [
  { path: emptyPath, component: ComponentsSourceCodeComponent }
];
