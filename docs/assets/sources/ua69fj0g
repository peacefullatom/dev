import { Component, Input, OnInit } from '@angular/core';

import {
  css3dBars,
  css3dDepth,
  css3dFaceBack,
  css3dFaceBottom,
  css3dFaceFront,
  css3dFaceLeft,
  css3dFaceRight,
  css3dFacesCount,
  css3dFaceTop,
  css3dHue,
  css3dMode,
  css3dPerspective,
  css3dSize,
} from './const';
import { Css3dFace, IMiscCss3dBarsSettings } from './types';

@Component({
  selector: 'app-misc-css3d-bars',
  templateUrl: './misc-css3d-bars.component.html',
  styleUrls: ['./misc-css3d-bars.component.scss']
})
export class MiscCss3dBarsComponent implements OnInit {
  @Input() settings: IMiscCss3dBarsSettings;

  get width(): number {
    return this.settings ? this.settings.width : css3dSize;
  }

  get height(): number {
    return this.settings ? this.settings.height : css3dSize;
  }

  get depth(): number {
    return this.settings ? this.settings.depth : css3dDepth;
  }

  get perspective(): number {
    return this.settings ? this.settings.perspective : css3dPerspective;
  }

  get bars(): number {
    return this.settings ? this.settings.bars : css3dBars;
  }

  get hue(): number {
    return this.settings ? this.settings.hue : css3dHue;
  }

  get mode3d(): boolean {
    return this.settings ? this.settings.mode3d : css3dMode;
  }

  get facesCount(): number {
    return Array.apply(null, { length: css3dFacesCount * this.bars }).map(Number.call, Number);
  }

  get planeWidth(): number {
    return this.width / 2;
  }

  get planeHeight(): number {
    return this.height / 2;
  }

  get background(): string {
    return `hsla(${this.hue}, 50%, 50%, 0.5)`;
  }

  private get barHeightStep(): number {
    return this.planeHeight / this.steps;
  }

  private get steps(): number {
    return this.bars * 2 - 1;
  }

  constructor() {}

  ngOnInit() {}

  size(value: number): string {
    return `${value}px`;
  }

  faceWidth(order: Css3dFace): number {
    switch (this.normalizeOrder(order)) {
      case css3dFaceFront:
      case css3dFaceBack:
      case css3dFaceTop:
      case css3dFaceBottom:
        return this.planeWidth;
      case css3dFaceRight:
      case css3dFaceLeft:
        return this.depth;
    }
  }

  faceHeight(order: Css3dFace): number {
    switch (this.normalizeOrder(order)) {
      case css3dFaceFront:
      case css3dFaceBack:
      case css3dFaceRight:
      case css3dFaceLeft:
        return this.planeHeight / this.steps;
      case css3dFaceTop:
      case css3dFaceBottom:
        return this.depth;
    }
  }

  transform(face: number): string {
    const value = this.normalizeOrder(face);
    const nHeight = ((face - value) / 3) * this.barHeightStep;
    const nSizeY = this.faceHeight(value) / 2;
    switch (value) {
      case css3dFaceFront:
        return `translate3d(${0}px, ${nHeight}px, ${this.depth / 2}px)`;
      case css3dFaceBack:
        return `rotateY(180deg) translate3d(${0}px, ${nHeight}px, ${this.depth / 2}px)`;
      case css3dFaceRight:
        return `rotateY(90deg) translate3d(${0}px, ${nHeight}px, ${this.faceWidth(value) / -2}px)`;
      case css3dFaceLeft:
        return `rotateY(-90deg) translate3d(${0}px, ${nHeight}px, ${this.faceWidth(value) / 2 - this.planeWidth}px)`;
      case css3dFaceTop:
        return `rotateX(90deg) translate3d(${0}px, ${0}px, ${nSizeY - nHeight}px)`;
      case css3dFaceBottom:
        return `rotateX(-90deg) translate3d(${0}px, ${0}px, ${nHeight + this.barHeightStep - nSizeY}px)`;
    }
  }

  private normalizeOrder(value: number): Css3dFace {
    return (value % css3dFacesCount) as Css3dFace;
  }
}
