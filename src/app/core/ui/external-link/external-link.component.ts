import { Component, Input, OnInit } from '@angular/core';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

import { iconSizeXs } from '../../const/icon';

@Component({
  selector: 'app-external-link',
  templateUrl: './external-link.component.html',
  styleUrls: ['./external-link.component.scss']
})
export class ExternalLinkComponent implements OnInit {
  @Input() href = '';

  faExternalLinkSquareAlt = faExternalLinkSquareAlt;
  iconSizeXs = iconSizeXs;

  constructor() {}

  ngOnInit() {}
}
