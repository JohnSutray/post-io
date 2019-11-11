import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IRootState } from '../../../store/root/root.state';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ERootActions, RootActions } from '../../../store/root/root.actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(
    private readonly store: Store<IRootState>,
  ) {
  }

  readonly login = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(20),
  ]);

  readonly password = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(2),
  ]);

  readonly signInform = new FormGroup({
    login: this.login,
    password: this.password,
  });

  submit() {
    this.store.dispatch(RootActions[ERootActions.SignIn](this.signInform.value));
  }
}
