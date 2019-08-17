import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubPagesHelperScriptComponent } from './github-pages-helper-script.component';

describe('GithubPagesHelperScriptComponent', () => {
  let component: GithubPagesHelperScriptComponent;
  let fixture: ComponentFixture<GithubPagesHelperScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubPagesHelperScriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubPagesHelperScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
