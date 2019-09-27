import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPositiveComponent } from './button-positive.component';

describe('ButtonPositiveComponent', () => {
  let component: ButtonPositiveComponent;
  let fixture: ComponentFixture<ButtonPositiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonPositiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPositiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
