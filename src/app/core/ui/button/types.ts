import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { BsBtn } from '../../bootstrap.types';
import {
  buttonTitleNegativeCancel,
  buttonTitleNegativeNo,
  buttonTitlePositiveOk,
  buttonTitlePositiveYes,
  buttonTypeCustom,
  buttonTypeNegative,
  buttonTypeNeutral,
  buttonTypePositive,
} from './const';

type ButtonDisabledFunction = (...args: any[]) => boolean;
export type ButtonDisabled = boolean | ButtonDisabledFunction;

/** positive button runs positive callback */
export type ButtonTypePositive = typeof buttonTypePositive;
/** negative button runs negative callback */
export type ButtonTypeNegative = typeof buttonTypeNegative;
/** neutral button runs neutral callback */
export type ButtonTypeNeutral = typeof buttonTypeNeutral;
/** neutral button runs neutral callback */
export type ButtonTypeCustom = typeof buttonTypeCustom;

/** template button type */
export type ButtonType = ButtonTypePositive | ButtonTypeNegative | ButtonTypeNeutral | ButtonTypeCustom;

export type ButtonTitlePositive = typeof buttonTitlePositiveOk | typeof buttonTitlePositiveYes;

export type ButtonTitleNegative = typeof buttonTitleNegativeCancel | typeof buttonTitleNegativeNo;

export type ButtonTitle = ButtonTitlePositive | ButtonTitleNegative;

/**
 * basic button settings events description
 */
interface IButtonSettingsBase {
  /** an optional button index */
  index?: number;
  /** button click callback */
  click: (...args: any[]) => void;
  /** optional button disabled state callback */
  disabled?: (...args: any[]) => boolean;
}

/**
 * general button settings
 */
export interface IButton {
  /** predefined button type */
  type: ButtonType;
  /** button index */
  index: number;
  /** optional font awesome icon defintion */
  icon?: IconDefinition;
  /** optional predefined button visual style */
  style?: BsBtn;
  /** button title */
  title: string;
  /** button click callback */
  click: (...args: any[]) => void;
  /** optional button disabled state callback */
  disabled?: (...args: any[]) => boolean;
}

/**
 * default button settings
 */
export interface IButtonSettings extends IButtonSettingsBase {
  /** predefined button type */
  type: ButtonTypeCustom;
  /** optional predefined button visual style */
  style?: BsBtn;
  /** button title */
  title: string;
}

interface IButtonSettingsTemplate {
  /** optional predefined button visual style */
  style?: BsBtn;
  /** optional button index */
  index?: number;
  /** optional font awesome icon defintion */
  icon?: IconDefinition;
  /** optional button click callback */
  click?: (...args: any[]) => void;
  /** optional button disabled state callback */
  disabled?: (...args: any[]) => boolean;
}

interface IButtonSettingsTemplateActive extends IButtonSettingsTemplate {
  /** optional button title */
  title?: string;
}

interface IButtonSettingsTemplatePositive extends IButtonSettingsTemplateActive {
  /** predefined button positive type */
  type: ButtonTypePositive;
  /** defines button which will be called upon enter key press */
  handleEnterKey?: boolean;
}

interface IButtonSettingsTemplateNegative extends IButtonSettingsTemplateActive {
  /** predefined button negative type */
  type: ButtonTypeNegative;
  /** defines buttong which be called upon escape key press */
  handleEscapeKey?: boolean;
}

interface IButtonSettingsTemplateNeutral extends IButtonSettingsTemplate {
  /** predefined button neutral type */
  type: ButtonTypeNeutral;
  /** button title */
  title: string;
}

/** supporting union type */
export type ButtonTemplate = IButtonSettingsTemplatePositive | IButtonSettingsTemplateNegative | IButtonSettingsTemplateNeutral;

/** all possible button type definitions */
export type ButtonSettings = ButtonTemplate | IButtonSettings | ButtonTypePositive | ButtonTypeNegative;

/** button definitions union type */
export type UnionButtonSettings = ButtonSettings | ButtonSettings[];
