import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { defaultRoute, introRoute, routeActive } from 'src/app/const';
import { IRoute } from 'src/app/types';

import { headerShowClass } from './const';

/** header navigation component */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() routes: IRoute[] = [];
  @ViewChild('host', { static: true }) hostRef: ElementRef<HTMLDivElement>;
  @ViewChild('toggler', { static: true }) togglerRef: ElementRef<
    HTMLButtonElement
  >;
  @ViewChild('navbar', { static: true }) navbarRef: ElementRef<HTMLDivElement>;

  active = routeActive;
  defaultRoute = defaultRoute;
  introRoute = introRoute;

  private get navbar(): HTMLDivElement {
    return this.navbarRef.nativeElement;
  }

  constructor() {}

  @HostListener('document:click', ['$event']) clickOutside(event: MouseEvent) {
    if (this.navbar.classList.contains(headerShowClass)) {
      if (!this.hostRef.nativeElement.contains(event.target as Node)) {
        this.click();
      }
    }
  }

  ngOnInit() {
    this.routes = this.routes.filter(route => !route.skip);
  }

  click(): void {
    this.togglerRef.nativeElement.classList.toggle('collapsed');
    this.navbar.classList.toggle(headerShowClass);
  }
}
