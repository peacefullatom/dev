import { css3dFaceBack, css3dFaceBottom, css3dFaceFront, css3dFaceLeft, css3dFaceRight, css3dFaceTop } from './const';

export type Css3dFace =
  | typeof css3dFaceFront
  | typeof css3dFaceBack
  | typeof css3dFaceRight
  | typeof css3dFaceLeft
  | typeof css3dFaceTop
  | typeof css3dFaceBottom;

export interface IMiscCss3dBarsSettings {
  width: number;
  height: number;
  depth: number;
  perspective: number;
  bars: number;
  hue: number;
  mode3d: boolean;
}
