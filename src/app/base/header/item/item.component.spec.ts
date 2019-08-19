import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: HeaderItemComponent;
  let fixture: ComponentFixture<HeaderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
