import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscCss3dPreloaderComponent } from './misc-css3d-preloader.component';

describe('MiscCss3dPreloaderComponent', () => {
  let component: MiscCss3dPreloaderComponent;
  let fixture: ComponentFixture<MiscCss3dPreloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscCss3dPreloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscCss3dPreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
