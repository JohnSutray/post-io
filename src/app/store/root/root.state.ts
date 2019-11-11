import { User } from '../../models/user.model';
import { ELanguages } from '../../enums/languages.enum';
import { MatBottomSheetRef, MatDialogRef } from '@angular/material';
import { SignInComponent } from '../../modules/sign/sign-in/sign-in.component';
import { SignUpComponent } from '../../modules/sign/sign-up/sign-up.component';
import { ErrorComponent } from '../../modules/error/error/error.component';

export interface IRootState {
  language: ELanguages;
  currentUser: User;
  signInModal: MatDialogRef<SignInComponent>;
  signUpModal: MatDialogRef<SignUpComponent>;
  errorModal: MatBottomSheetRef<ErrorComponent>;
}

export class RootState {
  static getInitialRootState(): IRootState {
    return {
      language: ELanguages.ENGLISH,
      currentUser: null,
      signInModal: null,
      signUpModal: null,
      errorModal: null,
    };
  }
}
