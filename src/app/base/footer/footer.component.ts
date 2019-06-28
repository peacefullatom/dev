import { Component, OnInit } from '@angular/core';
import { contactRoute, routeActive } from 'src/app/const';
import { footerRoutes } from './const';

/** footer component */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();
  routes = footerRoutes;
  contact = contactRoute;
  active = routeActive;

  constructor() {}

  ngOnInit() {}
}
