import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { bsTextAlignLeft } from '../../const/bootstrap';
import { BsTextAlign } from '../../types/bootstrap';

/**
 * this component provides a blockquote wrapper
 * @example
 * <app-blockquote>
 *  <p class="mb-0">Some awesome quote.</p>
 *  <span footer>quote source.</span>
 * </app-blockquote>
 */
@Component({
  selector: 'app-blockquote',
  templateUrl: './blockquote.component.html',
  styleUrls: ['./blockquote.component.scss']
})
export class BlockquoteComponent implements OnInit {
  @Input() textAlign: BsTextAlign = bsTextAlignLeft;
  @ViewChild('footer', { static: true }) footer: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnInit() {}

  showFooter(): boolean {
    return this.footer.nativeElement.childNodes.length > 0;
  }
}
