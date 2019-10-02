import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import { IdService } from '../../service/id.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit, OnChanges {
  @Input() id: string;
  /** the value will be stringified */
  @Input() value: string;
  /** the text will be inserted as is */
  @Input() text: string;
  /** the html will be inserted via insertAdjacentHTML */
  @Input() html: string;
  @ViewChild('code', { static: true }) codeRef: ElementRef<HTMLDivElement>;

  className = 'bg-dark text-light py-3 px-3 rounded';
  content = false;

  constructor(private readonly idService: IdService) {}

  ngOnInit() {
    this.id = this.id || this.idService.nextId();
    if (this.value && typeof this.value !== 'string') {
      this.value = JSON.stringify(this.value);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.html || changes.text || changes.value) {
      this.content = !!this.html || !!this.text || !!this.value;
      if (this.html && this.codeRef) {
        this.codeRef.nativeElement.insertAdjacentHTML('afterbegin', this.html);
      }
    }
  }

  render(): string {
    if (this.value) {
      return this.value;
    }
    if (this.text) {
      return this.text;
    }
    return '';
  }
}
