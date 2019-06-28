import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconFasComponent } from './icon-fas.component';

describe('IconFasComponent', () => {
  let component: IconFasComponent;
  let fixture: ComponentFixture<IconFasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconFasComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconFasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
