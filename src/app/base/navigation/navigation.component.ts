import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { defaultRoute } from 'src/app/const';
import { IRoute } from 'src/app/types';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() routes: IRoute[] = [];
  @ViewChild('toggler', { static: true }) toggler: ElementRef<
    HTMLButtonElement
  >;
  @ViewChild('navbar', { static: true }) navbar: ElementRef<HTMLDivElement>;

  active = 'active';
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
