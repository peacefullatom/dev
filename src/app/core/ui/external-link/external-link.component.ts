import { Component, Input, OnInit } from '@angular/core';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

import { faIconSizeXs } from '../../fa.const';

@Component({
  selector: 'app-external-link',
  templateUrl: './external-link.component.html',
  styleUrls: ['./external-link.component.scss']
})
export class ExternalLinkComponent implements OnInit {
  @Input() href = '';

  readonly faExternalLinkSquareAlt = faExternalLinkSquareAlt;
  readonly faIconSizeXs = faIconSizeXs;

  constructor() {}

  ngOnInit() {}
}
