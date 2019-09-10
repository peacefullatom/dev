import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { bsBtnOutlinePrimary } from '../../bootstrap.const';
import { BsBtn } from '../../bootstrap.types';
import { IdService } from '../../service/id.service';
import { ButtonDisabled } from './types';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() id: string;
  @Input() title = '';
  @Input() icon: IconDefinition;
  @Input() style: BsBtn = bsBtnOutlinePrimary;
  @Input() disabled: ButtonDisabled;
  @Input() click: () => void;

  constructor(private readonly idService: IdService) {}

  ngOnInit() {
    this.id = this.id || this.idService.nextId();

    if (typeof this.disabled !== 'function' && typeof this.disabled !== 'boolean') {
      this.disabled = () => false;
    }
  }

  checkDisabled(): boolean {
    if (typeof this.disabled === 'function') {
      return this.disabled();
    }
    if (typeof this.disabled === 'boolean') {
      return this.disabled;
    }

    throw new Error(`unknown type of disabled input ${typeof this.disabled}`);
  }

  handleClick(): void {
    if (!this.checkDisabled() && typeof this.click === 'function') {
      this.click();
    }
  }
}
