import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { defaultRoute, routeActive } from 'src/app/const';
import { IRoute } from 'src/app/types';

/** header navigation component */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() routes: IRoute[] = [];
  @ViewChild('toggler', { static: true }) toggler: ElementRef<
    HTMLButtonElement
  >;
  @ViewChild('navbar', { static: true }) navbar: ElementRef<HTMLDivElement>;

  active = routeActive;
  defaultRoute = defaultRoute;

  constructor() {}

  ngOnInit() {
    this.routes = this.routes.filter(route => !route.skip);
  }

  click(): void {
    this.toggler.nativeElement.classList.toggle('collapsed');
    this.navbar.nativeElement.classList.toggle('show');
  }
}
