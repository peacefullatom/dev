import {
  bsDarkDark,
  bsNoteDanger,
  bsNoteInfo,
  bsNoteLight,
  bsNotePrimary,
  bsNoteSecondary,
  bsNoteSuccess,
  bsNoteWarning,
} from './const';

export type BsNote =
  | typeof bsNotePrimary
  | typeof bsNoteSecondary
  | typeof bsNoteSuccess
  | typeof bsNoteDanger
  | typeof bsNoteWarning
  | typeof bsNoteInfo
  | typeof bsNoteLight
  | typeof bsDarkDark;
