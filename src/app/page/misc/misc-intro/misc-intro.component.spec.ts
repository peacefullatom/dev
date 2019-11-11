import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscIntroComponent } from './misc-intro.component';

describe('MiscIntroComponent', () => {
  let component: MiscIntroComponent;
  let fixture: ComponentFixture<MiscIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
