import { Route } from '@angular/router';

/** an extender of the default angular Route */
export interface IRoute extends Route {
  /** the label which corresponds the rout */
  label?: string;
  /** defines if route is a service route */
  skip?: boolean;
}
