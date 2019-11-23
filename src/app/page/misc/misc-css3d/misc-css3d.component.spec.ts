import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscCss3dComponent } from './misc-css3d.component';

describe('MiscCss3dComponent', () => {
  let component: MiscCss3dComponent;
  let fixture: ComponentFixture<MiscCss3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscCss3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscCss3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
