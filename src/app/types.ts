import { Route } from '@angular/router';

/** an extender of the default angular Route */
export interface IRoute extends Route {
  /** the label which corresponds the route */
  label?: string;
  /** defines if route is a service route and should not appear in top menu */
  skip?: boolean;
}
