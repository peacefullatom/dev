import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexVerticalComponent } from './index-vertical.component';

describe('IndexVerticalComponent', () => {
  let component: IndexVerticalComponent;
  let fixture: ComponentFixture<IndexVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
