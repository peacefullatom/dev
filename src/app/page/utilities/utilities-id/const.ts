import { emptyPath, rootPath, utilitiesPath } from 'src/app/const';
import { IRoute } from 'src/app/types';

import { UtilitiesIdComponent } from './utilities-id.component';
import { utilitiesIdPath } from '../const';

export const utilitiesIdComponentRoutes: IRoute[] = [
  { path: emptyPath, component: UtilitiesIdComponent }
];

export const idServicePath = [rootPath, utilitiesPath, utilitiesIdPath];
