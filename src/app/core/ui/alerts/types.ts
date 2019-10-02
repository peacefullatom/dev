import { BsAlert } from '../../bootstrap.types';
import {
  alertsPositionBottom,
  alertsPositionCenter,
  alertsPositionLeft,
  alertsPositionRight,
  alertsPositionTop,
} from './const';

export type AlertsPositionVertical =
  | typeof alertsPositionTop
  | typeof alertsPositionBottom
  | typeof alertsPositionCenter;

export type AlertsPositionHorizontal =
  | typeof alertsPositionLeft
  | typeof alertsPositionRight
  | typeof alertsPositionCenter;

export interface IAlert {
  type: BsAlert;
  value: string;
  id?: string;
  close?: (id: string) => void;
}
