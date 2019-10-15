import { BsAlert } from 'src/app/core/bootstrap.types';

import { IAlert } from '../types';

export interface IAlertBlock extends IAlert {
  type: BsAlert;
  value: string;
  id: string;
  close: (id: string) => void;
  mouseEnter?: () => void;
  mouseLeave?: () => void;
}
