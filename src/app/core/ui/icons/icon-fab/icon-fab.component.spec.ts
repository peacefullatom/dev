import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconFabComponent } from './icon-fab.component';

describe('IconFabComponent', () => {
  let component: IconFabComponent;
  let fixture: ComponentFixture<IconFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconFabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
