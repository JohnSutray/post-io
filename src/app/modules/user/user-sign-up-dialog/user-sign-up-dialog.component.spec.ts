import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignUpDialogComponent } from './user-sign-up-dialog.component';

describe('UserLoginDialogComponent', () => {
  let component: UserSignUpDialogComponent;
  let fixture: ComponentFixture<UserSignUpDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSignUpDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSignUpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
