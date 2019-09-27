import { Component, ElementRef, Input, OnInit } from '@angular/core';

import { bsBtnSuccess } from '../../bootstrap.const';
import { BsBtn } from '../../bootstrap.types';
import { IdService } from '../../service/id.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-button-positive',
  templateUrl: '../button/button.component.html',
  styleUrls: ['../button/button.component.scss']
})
export class ButtonPositiveComponent extends ButtonComponent implements OnInit {
  @Input() style: BsBtn = bsBtnSuccess;

  constructor(
    protected readonly elementRef: ElementRef<HTMLDivElement>,
    protected readonly idService: IdService
  ) {
    super(elementRef, idService);
  }
}
