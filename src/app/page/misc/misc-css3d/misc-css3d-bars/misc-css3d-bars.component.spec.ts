import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscCss3dBarsComponent } from './misc-css3d-bars.component';

describe('MiscCss3dBarsComponent', () => {
  let component: MiscCss3dBarsComponent;
  let fixture: ComponentFixture<MiscCss3dBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscCss3dBarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscCss3dBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
