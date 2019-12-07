import { Component } from '@angular/core';
import { LabelConstants } from '../../constants/label.constants';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorizeService } from '../../services/authorize.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent {
  readonly LabelConstants = LabelConstants;
  readonly loginControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(30),
  ]);
  readonly passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(30),
  ]);
  readonly firstNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
  ]);
  readonly lastNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
  ]);
  readonly newLoginControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(30),
  ]);
  readonly newPasswordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(30),
  ]);
  readonly birthDateControl = new FormControl(new Date(), Validators.required);
  readonly signInFormGroup = new FormGroup({
    login: this.loginControl,
    password: this.passwordControl,
  });
  readonly signUpFormGroup = new FormGroup({
    login: this.newLoginControl,
    password: this.newPasswordControl,
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    birthDate: this.birthDateControl,
  });

  _inSignInMode = true;

  constructor(
    private readonly authorizeService: AuthorizeService,
  ) {
    this.signUpFormGroup.valueChanges.subscribe(console.log);
  }

  get inSignInMode(): boolean {
    return this._inSignInMode;
  }

  get inSignUpMode(): boolean {
    return !this._inSignInMode;
  }

  get signDisabled(): boolean {
    return this.inSignInMode
      ? this.signInFormGroup.invalid
      : this.signUpFormGroup.invalid;
  }

  sign() {
    this.inSignInMode
      ? this.authorizeService.signIn(this.signInFormGroup.value)
      : this.authorizeService.signUp(this.signUpFormGroup.value);
  }
}
