import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesIntroComponent } from './utilities-intro.component';

describe('UtilitiesIntroComponent', () => {
  let component: UtilitiesIntroComponent;
  let fixture: ComponentFixture<UtilitiesIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UtilitiesIntroComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitiesIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
