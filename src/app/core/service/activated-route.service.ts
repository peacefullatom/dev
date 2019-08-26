import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IRouteData } from 'src/app/types';

@Injectable()
export class ActivatedRouteService {
  currentSegment: IRouteData;
  firstChild: IRouteData;

  constructor(
    public readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {
    this.data();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.data();
      }
    });
  }

  private data(): void {
    const { firstChild } = this.activatedRoute;

    if (firstChild) {
      firstChild.data.subscribe(value => (this.firstChild = value));
    }

    this.activatedRoute.data.subscribe(value => (this.currentSegment = value));
  }
}
