import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface IContactExternalLink {
  href: string;
  icon: IconDefinition;
}

export interface IContactLink extends IContactExternalLink {
  label: string;
}
