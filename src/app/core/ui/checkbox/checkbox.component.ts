import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IdService } from '../../service/id.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() id: string;
  @Input() active: boolean;
  @Input() disabled: boolean;
  @Input() title: string;
  @Output() activeChange = new EventEmitter<boolean>();

  readonly checkboxId = this.idService.nextId();

  constructor(private readonly idService: IdService) {}

  ngOnInit() {
    this.id = this.id || this.idService.nextId();
  }

  handleClick(): void {
    this.active = !this.active;
    this.activeChange.next(this.active);
  }
}
