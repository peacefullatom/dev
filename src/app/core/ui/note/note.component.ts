import { Component, Input, OnInit } from '@angular/core';

import { bsNotePrimary } from './const';
import { BsNote } from './types';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() header: string;
  @Input() title: string;
  @Input() type: BsNote = bsNotePrimary;

  constructor() {}

  ngOnInit() {}
}
