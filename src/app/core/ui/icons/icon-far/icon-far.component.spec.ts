import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconFarComponent } from './icon-far.component';

describe('IconFarComponent', () => {
  let component: IconFarComponent;
  let fixture: ComponentFixture<IconFarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconFarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconFarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
