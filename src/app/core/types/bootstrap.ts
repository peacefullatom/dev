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
} from '../const/bootstrap';

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
