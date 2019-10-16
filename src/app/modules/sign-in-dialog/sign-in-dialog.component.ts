import { Component, OnInit } from '@angular/core';
import { TranslationKeysConstants } from '../../constants/translation-keys.constants';
import { Store } from '@ngrx/store';
import { IRootState } from '../../store/state/root.state';
import { ERootActions, RootActions } from '../../store/actions/root.actions';
import { BaseDialogComponent } from '../../components/dialogs/base-dialog.component';
import { MatDialogRef } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { IAppState } from '../../store/root-store.module';

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.scss'],
})
export class SignInDialogComponent extends BaseDialogComponent<SignInDialogComponent, void> implements OnInit {
  readonly TranslationsKeys = TranslationKeysConstants;

  constructor(
    dialogRef: MatDialogRef<SignInDialogComponent>,
    private store: Store<IAppState>,
  ) {
    super(dialogRef);
  }

  readonly loginControl = new FormControl('azas', [
    Validators.min(5),
    Validators.max(20),
    Validators.required,
  ]);
  readonly passwordControl = new FormControl('cheburek', [
    Validators.min(5),
    Validators.max(20),
    Validators.required,
  ]);

  readonly signInFormGroup = new FormGroup({
    login: this.loginControl,
    password: this.passwordControl,
  });

  ngOnInit() {
  }

  signIn(): void {
    this.store.dispatch(RootActions[ERootActions.SignIn](this.signInFormGroup.value));
    this.store.select(state => state.root.user).pipe(
      tap(user => user && this.close()),
    ).subscribe();
  }
}
