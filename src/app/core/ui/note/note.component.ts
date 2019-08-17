import { Component, Input, OnInit } from '@angular/core';

import { bsCardPrimary } from './const';
import { BsCard } from './types';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() header: string;
  @Input() title: string;
  @Input() type: BsCard = bsCardPrimary;

  constructor() {}

  ngOnInit() {}
}
