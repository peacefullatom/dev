import {
  faAngular,
  faBootstrap,
  faFacebookSquare,
  faFontAwesome,
  faGithub,
  faGitSquare,
  faInstagram,
  faLinkedin,
  faSass,
  faSkype,
  faTelegram,
  faTwitter,
  faYarn,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';

import { IContactExternalLink, IContactLink } from './types';

export const contactLinks: IContactLink[] = [
  {
    icon: faPhoneSquareAlt,
    label: '+79504696434',
    href: 'tel:+79504696434'
  },
  {
    icon: faEnvelope,
    label: 'peacefullatom@gmail.com',
    href: 'mailto:peacefullatom@gmail.com'
  },
  {
    icon: faGithub,
    label: 'peacefullatom',
    href: 'https://github.com/peacefullatom'
  },
  {
    icon: faLinkedin,
    label: 'Yuriy Markov',
    href: 'https://www.linkedin.com/in/yuriy-markov-797434b3'
  },
  {
    icon: faFacebookSquare,
    label: 'Yuriy Markov',
    href: 'https://www.facebook.com/yurij.markov.9'
  },
  {
    icon: faSkype,
    label: 'y.i.markov',
    href: 'skype:y.i.markov?chat'
  },
  {
    icon: faTelegram,
    label: '@yuriy_markov',
    href: 'tg://resolve?domain=@yuriy_markov'
  },
  {
    icon: faTwitter,
    label: '@markov_yuriy',
    href: 'https://twitter.com/markov_yuriy'
  },
  {
    icon: faInstagram,
    label: '@peacefullatom',
    href: 'https://www.instagram.com/peacefullatom/'
  }
];

export const contactExternalLinks: IContactExternalLink[] = [
  { icon: faAngular, href: 'https://angular.io/' },
  {
    icon: faBootstrap,
    href: 'https://getbootstrap.com/'
  },
  { icon: faGitSquare, href: 'https://git-scm.com/' },
  { icon: faSass, href: 'https://sass-lang.com/' },
  { icon: faYarn, href: 'https://yarnpkg.com/' },
  {
    icon: faFontAwesome,
    href: 'https://fontawesome.com/'
  }
];
