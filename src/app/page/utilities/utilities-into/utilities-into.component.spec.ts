import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesIntoComponent } from './utilities-into.component';

describe('UtilitiesIntoComponent', () => {
  let component: UtilitiesIntoComponent;
  let fixture: ComponentFixture<UtilitiesIntoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilitiesIntoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitiesIntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
