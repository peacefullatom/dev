export const iconSizeXs = 'xs';
export const iconSizeSm = 'sm';
export const iconSizeLg = 'lg';
export const iconSize2x = '2x';
export const iconSize3x = '3x';
export const iconSize4x = '4x';
export const iconSize5x = '5x';
export const iconSize6x = '6x';
export const iconSize7x = '7x';
export const iconSize8x = '8x';
export const iconSize9x = '9x';
export const iconSize10x = '10x';

export type IconSize =
  | typeof iconSizeXs
  | typeof iconSizeSm
  | typeof iconSizeLg
  | typeof iconSize2x
  | typeof iconSize3x
  | typeof iconSize4x
  | typeof iconSize5x
  | typeof iconSize6x
  | typeof iconSize7x
  | typeof iconSize8x
  | typeof iconSize9x
  | typeof iconSize10x;

export const iconFlipHorizontal = 'horizontal';
export const iconFlipVertical = 'vertical';
export const iconFlipBoth = 'both';

export type IconFlip =
  | typeof iconFlipHorizontal
  | typeof iconFlipVertical
  | typeof iconFlipBoth;

export const iconPullLeft = 'left';
export const iconPullRight = 'right';

export type IconPull = typeof iconPullLeft | typeof iconPullRight;
