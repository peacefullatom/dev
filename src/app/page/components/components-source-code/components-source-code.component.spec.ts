import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSourceCodeComponent } from './components-source-code.component';

describe('ComponentsSourceCodeComponent', () => {
  let component: ComponentsSourceCodeComponent;
  let fixture: ComponentFixture<ComponentsSourceCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSourceCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSourceCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
