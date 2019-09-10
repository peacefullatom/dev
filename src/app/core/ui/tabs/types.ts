import { tabsTypeAnchor, tabsTypeButton } from './const';

/** tabs union type */
export type TabsType = typeof tabsTypeAnchor | typeof tabsTypeButton;

export interface ITabsItem {
  /** tab title */
  title: string;
  /** optional tab id */
  id?: string;
  /** optional path for router */
  path?: string;
  /** active state */
  active?: boolean;
  /** click callback (used only if tabs are buttons) */
  click?: (tab: ITabsItem) => void;
}
