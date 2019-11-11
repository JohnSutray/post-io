import { User } from '../../models/user.model';
import { ELanguages } from '../../enums/languages.enum';
import { MatBottomSheetRef, MatDialogRef } from '@angular/material';
import { SignInComponent } from '../../modules/sign/sign-in/sign-in.component';
import { SignUpComponent } from '../../modules/sign/sign-up/sign-up.component';
import { ErrorComponent } from '../../modules/error/error/error.component';
import { EAppFeature } from '../../enums/navigation.enum';

export interface IRootState {
  language: ELanguages;
  currentFeature: EAppFeature;
  currentUser: User;
  signInModal: MatDialogRef<SignInComponent>;
  signUpModal: MatDialogRef<SignUpComponent>;
  errorModal: MatBottomSheetRef<ErrorComponent>;
  isLoading: boolean;
}

export class RootState {
  static getInitialRootState(): IRootState {
    return {
      language: ELanguages.ENGLISH,
      currentFeature: EAppFeature.USERS,
      currentUser: null,
      signInModal: null,
      signUpModal: null,
      errorModal: null,
      isLoading: false,
    };
  }
}

export const RootStateToken = 'root';
