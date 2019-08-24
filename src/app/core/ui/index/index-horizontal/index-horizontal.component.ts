import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { routeActive } from 'src/app/const';
import { IRoute } from 'src/app/types';

@Component({
  selector: 'app-index-horizontal',
  templateUrl: './index-horizontal.component.html',
  styleUrls: ['./index-horizontal.component.scss']
})
export class IndexHorizontalComponent implements OnInit {
  @Input() items: IRoute[] = [];

  item: IRoute;
  active = routeActive;

  constructor(
    private readonly activateRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.setup();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setup();
      }
    });
  }

  private setup(): void {
    const { firstChild } = this.activateRoute;
    if (firstChild) {
      firstChild.url.subscribe({
        next: url => {
          if (url instanceof Array && url.length) {
            const [value] = url;
            this.item = this.items.find(entry => entry.path === value.path);
          }
        }
      });
    }
  }
}
