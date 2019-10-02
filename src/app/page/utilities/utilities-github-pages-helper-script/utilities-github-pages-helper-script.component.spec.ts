import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesGithubPagesHelperScriptComponent } from './utilities-github-pages-helper-script.component';

describe('UtilitiesGithubPagesHelperScriptComponent', () => {
  let component: UtilitiesGithubPagesHelperScriptComponent;
  let fixture: ComponentFixture<UtilitiesGithubPagesHelperScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UtilitiesGithubPagesHelperScriptComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(
      UtilitiesGithubPagesHelperScriptComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
