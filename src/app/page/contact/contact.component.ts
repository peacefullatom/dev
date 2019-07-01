import { Component, OnInit } from '@angular/core';
import { iconSize2x } from 'src/app/core/const/icon';
import { contactExternalLinks, contactLinks } from './const';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  links = contactLinks;
  externalLinks = contactExternalLinks;
  size = iconSize2x;

  constructor() {}

  ngOnInit() {}
}
