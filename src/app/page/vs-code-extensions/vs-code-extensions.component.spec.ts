import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VsCodeExtensionsComponent } from './vs-code-extensions.component';

describe('VsCodeExtensionsComponent', () => {
  let component: VsCodeExtensionsComponent;
  let fixture: ComponentFixture<VsCodeExtensionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VsCodeExtensionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VsCodeExtensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
