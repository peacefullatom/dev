import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { routeActive } from 'src/app/const';
import { IRoute } from 'src/app/types';

import { bsBgDark } from '../../const/bootstrap';
import { BsBg } from '../../types/bootstrap';
import { navbarShowClass } from './const';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  /** brand data */
  @Input() brand: IRoute;
  /** static text */
  @Input() text: string;
  /** routes data will be filtered by _skip_ flag */
  @Input() items: IRoute[] = [];
  /** sets position to sticky */
  @Input() sticky = false;
  /** bootstrap background (default is _dark_) */
  @Input() bg: BsBg = bsBgDark;
  /** by default sets background to dark */
  @Input() bgDark = true;
  /** sets rounded corners (_disabled_ by default) */
  @Input() rounded = false;
  /** navbar direction (default is _vertical_) */
  @Input() vertical = false;
  @ViewChild('host', { static: true }) hostRef: ElementRef<HTMLDivElement>;
  @ViewChild('toggler', { static: true }) togglerRef: ElementRef<
    HTMLButtonElement
  >;
  @ViewChild('navbar', { static: true }) navbarRef: ElementRef<HTMLDivElement>;

  routeActive = routeActive;

  private get navbar(): HTMLDivElement {
    return this.navbarRef.nativeElement;
  }

  @HostListener('document:click', ['$event']) clickOutside(event: MouseEvent) {
    if (this.navbar.classList.contains(navbarShowClass)) {
      if (!this.hostRef.nativeElement.contains(event.target as Node)) {
        this.click();
      }
    }
  }

  constructor() {}

  ngOnInit() {}

  click(): void {
    this.togglerRef.nativeElement.classList.toggle('collapsed');
    this.navbar.classList.toggle(navbarShowClass);
  }
}
