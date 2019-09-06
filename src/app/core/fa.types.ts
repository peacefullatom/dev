import {
  faIconFlipBoth,
  faIconFlipHorizontal,
  faIconFlipVertical,
  faIconPullLeft,
  faIconPullRight,
  faIconSize10x,
  faIconSize2x,
  faIconSize3x,
  faIconSize4x,
  faIconSize5x,
  faIconSize6x,
  faIconSize7x,
  faIconSize8x,
  faIconSize9x,
  faIconSizeLg,
  faIconSizeSm,
  faIconSizeXs,
} from './fa.const';

export type FaIconSize =
  | typeof faIconSizeXs
  | typeof faIconSizeSm
  | typeof faIconSizeLg
  | typeof faIconSize2x
  | typeof faIconSize3x
  | typeof faIconSize4x
  | typeof faIconSize5x
  | typeof faIconSize6x
  | typeof faIconSize7x
  | typeof faIconSize8x
  | typeof faIconSize9x
  | typeof faIconSize10x;

export type FaIconFlip =
  | typeof faIconFlipHorizontal
  | typeof faIconFlipVertical
  | typeof faIconFlipBoth;

export type FaIconPull = typeof faIconPullLeft | typeof faIconPullRight;
