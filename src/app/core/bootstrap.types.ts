import {
  bsBgDanger,
  bsBgDark,
  bsBgInfo,
  bsBgLight,
  bsBgPrimary,
  bsBgSecondary,
  bsBgSuccess,
  bsBgTransparent,
  bsBgWarning,
  bsBgWhite,
  bsBtnDanger,
  bsBtnDark,
  bsBtnInfo,
  bsBtnLight,
  bsBtnLink,
  bsBtnOutlineDanger,
  bsBtnOutlineDark,
  bsBtnOutlineInfo,
  bsBtnOutlineLight,
  bsBtnOutlineLink,
  bsBtnOutlinePrimary,
  bsBtnOutlineSecondary,
  bsBtnOutlineSuccess,
  bsBtnOutlineWarning,
  bsBtnPrimary,
  bsBtnSecondary,
  bsBtnSizeLarge,
  bsBtnSizeNormal,
  bsBtnSizeSmall,
  bsBtnSuccess,
  bsBtnWarning,
  bsTexBlack50,
  bsTexBody,
  bsTexDark,
  bsTexInfo,
  bsTexLight,
  bsTexMuted,
  bsTextAlignCenter,
  bsTextAlignLeft,
  bsTextAlignRight,
  bsTextDanger,
  bsTextPrimary,
  bsTextSecondary,
  bsTextSuccess,
  bsTextWarning,
  bsTexWhite,
  bsTexWhite50,
} from './bootstrap.const';

export type BsTextAlign =
  | typeof bsTextAlignLeft
  | typeof bsTextAlignCenter
  | typeof bsTextAlignRight;

export type BsBg =
  | typeof bsBgPrimary
  | typeof bsBgSecondary
  | typeof bsBgSuccess
  | typeof bsBgDanger
  | typeof bsBgWarning
  | typeof bsBgInfo
  | typeof bsBgLight
  | typeof bsBgDark
  | typeof bsBgWhite
  | typeof bsBgTransparent;

export type BsText =
  | typeof bsTextPrimary
  | typeof bsTextSecondary
  | typeof bsTextSuccess
  | typeof bsTextDanger
  | typeof bsTextWarning
  | typeof bsTexInfo
  | typeof bsTexLight
  | typeof bsTexDark
  | typeof bsTexBody
  | typeof bsTexMuted
  | typeof bsTexWhite
  | typeof bsTexBlack50
  | typeof bsTexWhite50;

export type BsBtnSize =
  | typeof bsBtnSizeSmall
  | typeof bsBtnSizeNormal
  | typeof bsBtnSizeLarge;

export type BsBtn =
  | typeof bsBtnPrimary
  | typeof bsBtnSecondary
  | typeof bsBtnSuccess
  | typeof bsBtnDanger
  | typeof bsBtnWarning
  | typeof bsBtnInfo
  | typeof bsBtnLight
  | typeof bsBtnDark
  | typeof bsBtnLink
  | typeof bsBtnOutlinePrimary
  | typeof bsBtnOutlineSecondary
  | typeof bsBtnOutlineSuccess
  | typeof bsBtnOutlineDanger
  | typeof bsBtnOutlineWarning
  | typeof bsBtnOutlineInfo
  | typeof bsBtnOutlineLight
  | typeof bsBtnOutlineDark
  | typeof bsBtnOutlineLink;
