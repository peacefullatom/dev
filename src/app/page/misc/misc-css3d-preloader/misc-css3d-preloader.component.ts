import { Component, OnInit } from '@angular/core';

import { conclusionAnchor } from '../../const';

@Component({
  selector: 'app-misc-css3d-preloader',
  templateUrl: './misc-css3d-preloader.component.html',
  styleUrls: ['./misc-css3d-preloader.component.scss']
})
export class MiscCss3dPreloaderComponent implements OnInit {
  readonly spinnerLayoutCode = `<div class="container">
  <div class="spinner"></div>
  <div class="spinner two"></div>
  <div class="spinner three"></div>
</div>`;
  readonly spinnerContainerStyleCode = `.container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}`;
  readonly spinnerBorderStyleCode = `  border: 4vmin solid transparent;
  border-radius: 50%;
  border-top-color: var(--border-color);
  border-bottom-color: var(--border-color);
  box-sizing: border-box;`;
  readonly spinnerBorderHighlightStyleCode = `border-top-color: var(--border-color);
border-bottom-color: var(--border-color);`;
  readonly boxSizingUrl = `https://developer.mozilla.org/docs/Web/CSS/box-sizing`;
  readonly animationTimingFunctionUrl = `https://developer.mozilla.org/docs/Web/CSS/animation-timing-function`;
  readonly keyframesCode = `@keyframes rotate {
  from {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(1, 1, 1, 360deg);
  }
}`;
  readonly spinnerStyleCode = `.spinner {
  --size: 30vmin;
  --border-color: #ff3333ff;
  --delay: 0.9s;
  width: var(--size);
  height: var(--size);
  animation-name: rotate;
  animation-duration: calc(var(--delay) * 3);
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  border: 4vmin solid transparent;
  border-radius: 50%;
  border-top-color: var(--border-color);
  border-bottom-color: var(--border-color);
  box-sizing: border-box;
  position: absolute;
}`;
  readonly cssUnitsUrl = `https://www.w3schools.com/cssref/css_units.asp`;
  readonly cssGlobalVariableCode = `:root {
  --delay: 0.2s;
}`;
  readonly cssVariableAlteringCode = `.spinner {
  --border-color: #ff3333ff;
  border-color: var(--border-color);
}
.spinner.two {
  --border-color: #ffff33ff;
}`;
  readonly cssAlteredVariableLayoutCode = `<!-- border color here is #ff3333ff -->
<div class="spinner"></div>
<!-- and here it will be #ffff33ff -->
<div class="spinner two"></div>`;
  readonly cssCalculationCode = `.spinner {
  --delay: 0.9s;
  animation-duration: calc(var(--delay) * 3);
}`;
  readonly cssVariablesExampleCode = `.spinner {
  /* size declaration */
  --size: 30vmin;
  /* initial border color */
  --border-color: #ff3333ff;
  /* delay declaration */
  --delay: 0.9s;
  /* applying the size*/
  width: var(--size);
  height: var(--size);
  /* calculating overall length of the animation */
  animation-duration: calc(var(--delay) * 3);
  /* applying the border color */
  border-top-color: var(--border-color);
  border-bottom-color: var(--border-color);
}
.spinner.two {
  /* altering border color */
  --border-color: #ffff33ff;
  /* applying the delay of the animation */
  animation-delay: var(--delay);
}
.spinner.three {
  /* altering border color */
  --border-color: #33ff33ff;
  /* calculating and applying the delay of the animation */
  animation-delay: calc(var(--delay) * 2);
}`;

  readonly ideaAnchor = 'idea';
  readonly layoutAnchor = 'layout';
  readonly cssAnchor = 'css';
  readonly conclusionAnchor = conclusionAnchor;

  constructor() {}

  ngOnInit() {}
}
