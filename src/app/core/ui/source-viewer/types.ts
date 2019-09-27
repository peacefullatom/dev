import { ITabsItem } from '../tabs/types';

export interface ISourceViewer {
  /**
   * the exact id, e.g.
   * - buttonComponentScss
   * - appComponentHtml
   */
  id?: string;
  /**
   * this will be converted into list of ids:
   * - %component%ComponentHtml
   * - %component%ComponentScss
   * - %component%ComponentTs
   * - %component%ModuleTs
   */
  component?: string;
  /**
   * this will be converted into an id:
   * - %singleComponent%ComponentTs
   */
  singleComponent?: string;
  /**
   * this will be converted into an id:
   * - %directive%DirectiveTs
   */
  directive?: string;
  /**
   * this will be converted into an id:
   * - %module%ModuleTs
   */
  module?: string;
  /**
   * this will be converted into an id:
   * - %template%ComponentHtml
   */
  template?: string;
  /**
   * this will be converted into an id:
   * - %style%ComponentScss
   */
  style?: string;
  /** optional active state */
  active?: boolean;
}

/** union type */
export type SourceViewer = ISourceViewer | ISourceViewer[];

export interface ISourceViewerTab extends ITabsItem {
  source?: string;
  hash?: string;
  error?: boolean;
}

export interface IJsonSource {
  path: string;
  hash: string;
}

export interface IJsonSources {
  [key: string]: IJsonSource;
}
