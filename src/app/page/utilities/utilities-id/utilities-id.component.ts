import { Component, OnInit } from '@angular/core';
import { ISourceViewer } from 'src/app/core/ui/source-viewer/types';

@Component({
  selector: 'app-utilities-id',
  templateUrl: './utilities-id.component.html',
  styleUrls: ['./utilities-id.component.scss']
})
export class UtilitiesIdComponent implements OnInit {
  readonly idServiceSources: ISourceViewer[] = [
    { service: 'id', active: true },
    { id: 'idServiceConstTs' }
  ];
  readonly noteSources: ISourceViewer[] = [
    { singleComponent: 'note', active: true },
    { template: 'note' }
  ];
  readonly inputCode = `@Input() id: string;`;
  readonly injectionCode = `constructor(private readonly idService: IdService) {}`;
  readonly initializationCode = `ngOnInit() {
  this.id = this.id || this.idService.nextId();
}`;
  readonly templateCode = `<div class="card {{ type }} mb-3" id="{{ id }}"></div>`;
  readonly customIdCode = `<app-note [id]="'customId'">Follow the KISS rule!</app-note>`;
  readonly implementationAnchor = 'implementation';
  readonly conclusionAnchor = 'conclusion';

  constructor() {}

  ngOnInit() {}
}
