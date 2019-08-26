import { Data, Route } from '@angular/router';

export interface IRouteData extends Data {
  /** the label which corresponds the route */
  label?: string;
}

/** an extender of the default angular Route */
export interface IRoute extends Route {
  /** user defined data override */
  data?: IRouteData;
  /** defines if route is a service route and should not appear in top menu */
  skip?: boolean;
}
