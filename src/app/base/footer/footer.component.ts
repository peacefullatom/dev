import { Component, OnInit } from '@angular/core';
import { faDev } from '@fortawesome/free-brands-svg-icons';
import { contactRoute } from 'src/app/const';
import { bsActive } from 'src/app/core/bootstrap.const';

/** footer component */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  readonly year = new Date().getFullYear();
  readonly contact = contactRoute;
  readonly active = bsActive;
  readonly faDev = faDev;
  readonly devUrl = 'https://dev.to/peacefullatom';
  readonly devTitle = `peacefullatom's DEV Profile`;

  constructor() {}

  ngOnInit() {}
}
