import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as sources from 'src/sources.json';

import { IdService } from '../../service/id.service';
import { sourceViewerPath } from './const';
import { IJsonSource, ISourceViewerTab, SourceViewer } from './types';

@Component({
  selector: 'app-source-viewer',
  templateUrl: './source-viewer.component.html',
  styleUrls: ['./source-viewer.component.scss']
})
export class SourceViewerComponent implements OnInit, AfterViewInit {
  @Input() id: string;
  @Input() sources: SourceViewer = [];
  @ViewChild('data', { static: true }) data: ElementRef<HTMLDivElement>;

  readonly tabs: ISourceViewerTab[] = [];
  readonly fill = true;

  constructor(private readonly idService: IdService) {}

  ngOnInit() {
    this.id = this.id || this.idService.nextId();
    /** due to specific of importing of json we need this workaround */
    const extractData = (id: string): IJsonSource =>
      (sources as any).default[id];
    /** get name from the path */
    const extractName = (path: string): string => {
      const data = path.split('/');
      return data[data.length - 1];
    };
    /** get data and create a new tab */
    const extract = (id?: string, active?: boolean): void => {
      if (id) {
        /** raw data */
        const data = extractData(id);
        if (data) {
          /** new tab */
          const newTab: ISourceViewerTab = {
            title: extractName(data.path),
            id: this.idService.nextId(),
            hash: data.hash,
            active,
            click: tab => this.tabClick(tab)
          };
          // preload data if tab is active
          if (newTab.active) {
            this.loadSource(newTab);
          }
          this.tabs.push(newTab);
        }
      }
    };
    const rawSources =
      this.sources instanceof Array ? this.sources : [this.sources];

    for (const source of rawSources) {
      const {
        id,
        component,
        singleComponent,
        directive,
        module,
        template,
        service,
        style,
        active
      } = source;
      if (id) {
        extract(id, active);
      }
      if (component) {
        ['ComponentHtml', 'ComponentScss', 'ComponentTs', 'ModuleTs'].forEach(
          (item, index) =>
            extract(`${component}${item}`, active ? index === 0 : false)
        );
      }
      if (singleComponent) {
        extract(`${singleComponent}ComponentTs`, active);
      }
      if (directive) {
        extract(`${directive}DirectiveTs`, active);
      }
      if (module) {
        extract(`${module}ModuleTs`, active);
      }
      if (service) {
        extract(`${service}ServiceTs`, active);
      }
      if (template) {
        extract(`${template}ComponentHtml`, active);
      }
      if (style) {
        extract(`${style}ComponentScss`, active);
      }
    }
  }

  ngAfterViewInit() {
    // preloading source to avoid jumpy behavior
    this.tabs.forEach(tab => this.loadSource(tab));
  }

  tabClick(tab: ISourceViewerTab): void {
    this.tabs.forEach(item => (item.active = item.id === tab.id));
    this.loadSource(tab);
  }

  private loadSource(tab: ISourceViewerTab): void {
    if (!tab.source || tab.error) {
      fetch(`${sourceViewerPath}/${tab.hash}`).then(
        data =>
          data.text().then(text => {
            tab.source = text;
            tab.error = false;
          }),
        error => {
          console.log(error);
          tab.error = true;
        }
      );
    }
  }
}
