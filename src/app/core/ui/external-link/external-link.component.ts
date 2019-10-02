import { Component, Input, OnInit } from '@angular/core';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

import { faIconSizeXs } from '../../fa.const';
import { IdService } from '../../service/id.service';

@Component({
  selector: 'app-external-link',
  templateUrl: './external-link.component.html',
  styleUrls: ['./external-link.component.scss']
})
export class ExternalLinkComponent implements OnInit {
  @Input() id: string;
  @Input() href = '';

  readonly faExternalLinkSquareAlt = faExternalLinkSquareAlt;
  readonly faIconSizeXs = faIconSizeXs;

  constructor(private readonly idService: IdService) {}

  ngOnInit() {
    this.id = this.id || this.idService.nextId();
  }
}
