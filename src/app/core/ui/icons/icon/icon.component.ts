import { Component, OnInit, Input } from '@angular/core';

/** render font awesome icon component with **all** icons */
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  /** icon library */
  @Input() library = 'far';
  /** icon name */
  @Input() icon: string;

  constructor() {}

  ngOnInit() {
    if (typeof this.icon !== 'string' && !this.icon) {
      throw new Error('no icon name');
    }
  }

  /** form icon data */
  data(): string[] {
    return [this.library, this.icon];
  }
}
