import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesIdComponent } from './utilities-id.component';

describe('UtilitiesIdComponent', () => {
  let component: UtilitiesIdComponent;
  let fixture: ComponentFixture<UtilitiesIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilitiesIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitiesIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
