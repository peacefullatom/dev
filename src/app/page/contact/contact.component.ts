import { Component, OnInit } from '@angular/core';
import { faIconSize2x } from 'src/app/core/fa.const';

import { contactExternalLinks, contactLinks } from './const';
import { IContactLink } from './types';

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

  target(link: IContactLink): string {
    return !!link.href.match(/^http/) ? '_blank' : '';
  }
}
