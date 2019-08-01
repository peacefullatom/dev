import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitCliComponent } from './git-cli.component';

describe('GitCliComponent', () => {
  let component: GitCliComponent;
  let fixture: ComponentFixture<GitCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
