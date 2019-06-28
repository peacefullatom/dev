import { iconLibraryFab } from 'src/app/core/ui/icons/const';
import { IFooterRoute } from './types';

export const footerRoutes: IFooterRoute[] = [
  { library: iconLibraryFab, icon: 'angular', path: 'https://angular.io/' },
  {
    library: iconLibraryFab,
    icon: 'bootstrap',
    path: 'https://getbootstrap.com/'
  },
  { library: iconLibraryFab, icon: 'git-square', path: 'https://git-scm.com/' },
  { library: iconLibraryFab, icon: 'sass', path: 'https://sass-lang.com/' },
  { library: iconLibraryFab, icon: 'yarn', path: 'https://yarnpkg.com/' }
];
