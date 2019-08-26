import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexHorizontalComponent } from './index-horizontal.component';

describe('IndexHorizontalComponent', () => {
  let component: IndexHorizontalComponent;
  let fixture: ComponentFixture<IndexHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
