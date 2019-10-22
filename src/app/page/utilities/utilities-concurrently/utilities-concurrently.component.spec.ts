import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesConcurrentlyComponent } from './utilities-concurrently.component';

describe('UtilitiesConcurrentlyComponent', () => {
  let component: UtilitiesConcurrentlyComponent;
  let fixture: ComponentFixture<UtilitiesConcurrentlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilitiesConcurrentlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitiesConcurrentlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
