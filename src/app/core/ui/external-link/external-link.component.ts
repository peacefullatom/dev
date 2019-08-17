import { Component, Input, OnInit } from '@angular/core';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

import { faIconSizeXs } from '../../const/icon';

@Component({
  selector: 'app-external-link',
  templateUrl: './external-link.component.html',
  styleUrls: ['./external-link.component.scss']
})
export class ExternalLinkComponent implements OnInit {
  @Input() href = '';

  faExternalLinkSquareAlt = faExternalLinkSquareAlt;
  faIconSizeXs = faIconSizeXs;

  constructor() {}

  ngOnInit() {}
}
