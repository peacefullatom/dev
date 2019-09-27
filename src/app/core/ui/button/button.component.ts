import { Component, ElementRef, Input, OnInit } from '@angular/core';

import { bsBtnOutlinePrimary, bsBtnSizeNormal } from '../../bootstrap.const';
import { BsBtn, BsBtnSize } from '../../bootstrap.types';
import { IdService } from '../../service/id.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() id: string;
  @Input() style: BsBtn = bsBtnOutlinePrimary;
  @Input() size: BsBtnSize = bsBtnSizeNormal;
  @Input() disabled: boolean;

  constructor(
    protected readonly elementRef: ElementRef<HTMLDivElement>,
    protected readonly idService: IdService
  ) {}

  ngOnInit() {
    this.id = this.id || this.idService.nextId();
  }

  checkDisabled(): boolean {
    this.elementRef.nativeElement.style.pointerEvents = this.disabled
      ? 'none'
      : 'all';

    return this.disabled;
  }
}
