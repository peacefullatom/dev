import {
  bsCardDanger,
  bsCardDark,
  bsCardInfo,
  bsCardLight,
  bsCardPrimary,
  bsCardSecondary,
  bsCardSuccess,
  bsCardWarning,
} from './const';

export type BsCard =
  | typeof bsCardPrimary
  | typeof bsCardSecondary
  | typeof bsCardSuccess
  | typeof bsCardDanger
  | typeof bsCardWarning
  | typeof bsCardInfo
  | typeof bsCardLight
  | typeof bsCardDark;
