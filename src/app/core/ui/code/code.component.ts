import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  @Input() value = '';

  className = 'bg-dark text-light py-3 px-3 rounded';

  constructor() {}

  ngOnInit() {
    if (this.value && typeof this.value !== 'string') {
      this.value = JSON.stringify(this.value);
    }
  }
}
