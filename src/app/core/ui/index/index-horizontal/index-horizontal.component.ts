import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { headerShowClass } from 'src/app/base/header/const';
import { routeActive } from 'src/app/const';
import { ActivatedRouteService } from 'src/app/core/service/activated-route.service';
import { IRoute } from 'src/app/types';

@Component({
  selector: 'app-index-horizontal',
  templateUrl: './index-horizontal.component.html',
  styleUrls: ['./index-horizontal.component.scss'],
  providers: [ActivatedRouteService]
})
export class IndexHorizontalComponent implements OnInit, OnChanges {
  @Input() items: IRoute[] = [];
  @ViewChild('host', { static: true }) hostRef: ElementRef<HTMLDivElement>;
  @ViewChild('toggler', { static: true }) togglerRef: ElementRef<
    HTMLButtonElement
  >;
  @ViewChild('navbar', { static: true }) navbarRef: ElementRef<HTMLDivElement>;

  active = routeActive;

  private get navbar(): HTMLDivElement {
    return this.navbarRef.nativeElement;
  }

  constructor(public readonly activatedRoute: ActivatedRouteService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.items) {
      this.items.filter(item => !item.skip);
    }
  }

  click(): void {
    this.togglerRef.nativeElement.classList.toggle('collapsed');
    this.navbar.classList.toggle(headerShowClass);
  }
}
