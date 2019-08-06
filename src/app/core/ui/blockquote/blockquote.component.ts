import { Component, Input, OnInit } from '@angular/core';
import { bsTextLeft } from '../../const/bootstrap';
import { BsText } from '../../types/bootstrap';

/**
 * this component provides a blockquote wrapper
 * @example
 * <app-blockquote>
 *  <p class="mb-0">Some awesome quote.</p>
 *  <span>quote source.</span>
 * </app-blockquote>
 */
@Component({
  selector: 'app-blockquote',
  templateUrl: './blockquote.component.html',
  styleUrls: ['./blockquote.component.scss']
})
export class BlockquoteComponent implements OnInit {
  @Input() textAlign: BsText = bsTextLeft;

  constructor() {}

  ngOnInit() {}
}
