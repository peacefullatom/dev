import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsButtonComponent } from './components-button.component';

describe('ComponentsButtonComponent', () => {
  let component: ComponentsButtonComponent;
  let fixture: ComponentFixture<ComponentsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
