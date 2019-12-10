import { Component } from '@angular/core';
import { LabelConstants } from '../../constants/label.constants';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorizeService } from '../../services/authorize.service';
import { UserClientService } from '../../services/clients/user-client.service';
import { InfoDialogService } from '../../services/info-dialog.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { InfoDialogData } from '../../models/info-dialog-data.model';

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
    private readonly userClient: UserClientService,
    private readonly infoDialogService: InfoDialogService,
  ) {
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
      : this.signUp();
  }

  signUp() {
    this.userClient.createUser(this.signUpFormGroup.value)
      .pipe(catchError(() => of(null)))
      .subscribe(user => {
        if (user) {
          this.openSuccessSignUp();
          this._inSignInMode = true;
        }
      });
  }

  openSuccessSignUp() {
    this.infoDialogService.open(new InfoDialogData(
      LabelConstants.SUCCESS,
      [
        LabelConstants.USER_CREATED_SUCCESSFULLY,
        LabelConstants.PLEASE_SIGN_IN_NOW,
      ],
    ));
  }
}
