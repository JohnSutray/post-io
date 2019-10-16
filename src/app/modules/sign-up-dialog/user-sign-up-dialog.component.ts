import { Component, OnInit } from '@angular/core';
import { BaseDialogComponent } from '../../components/dialogs/base-dialog.component';
import { TranslationKeysConstants } from '../../constants/translation-keys.constants';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';
import { IRootState } from '../../store/state/root.state';
import { ERootActions, RootActions } from '../../store/actions/root.actions';

@Component({
  selector: 'app-user-sign-up-dialog',
  templateUrl: './user-sign-up-dialog.component.html',
  styleUrls: ['./user-sign-up-dialog.component.scss'],
})
export class UserSignUpDialogComponent extends BaseDialogComponent<UserSignUpDialogComponent, void> implements OnInit {
  constructor(
    dialogRef: MatDialogRef<UserSignUpDialogComponent>,
    private store: Store<IRootState>,
  ) {
    super(dialogRef);
  }

  readonly TranslationsKeys = TranslationKeysConstants;

  readonly loginControl = new FormControl('', [
    Validators.min(5),
    Validators.max(20),
    Validators.required,
  ]);
  readonly passwordControl = new FormControl('', [
    Validators.min(5),
    Validators.max(20),
    Validators.required,
  ]);
  readonly firstNameControl = new FormControl('', [
    Validators.min(2),
    Validators.max(20),
    Validators.required,
  ]);
  readonly lastNameControl = new FormControl('', [
    Validators.min(2),
    Validators.max(20),
    Validators.required,
  ]);

  readonly signUpFormGroup = new FormGroup({
    login: this.loginControl,
    password: this.passwordControl,
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
  });

  ngOnInit(): void {
  }

  signUp() {
    this.store.dispatch(RootActions[ERootActions.SignUp](this.signUpFormGroup.value));
  }
}
