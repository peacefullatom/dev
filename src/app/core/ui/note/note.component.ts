import { Component, Input, OnInit } from '@angular/core';

import { IdService } from '../../service/id.service';
import { bsNotePrimary } from './const';
import { BsNote } from './types';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() id: string;
  @Input() header: string;
  @Input() title: string;
  @Input() type: BsNote = bsNotePrimary;

  constructor(private readonly idService: IdService) {}

  ngOnInit() {
    this.id = this.id || this.idService.nextId();
  }
}
