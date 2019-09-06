import { Component, OnInit } from '@angular/core';
import { faIconSize2x } from 'src/app/core/fa.const';

import { contactExternalLinks, contactLinks } from './const';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  readonly links = contactLinks;
  readonly externalLinks = contactExternalLinks;
  readonly faIconSize2x = faIconSize2x;

  constructor() {}

  ngOnInit() {}
}
