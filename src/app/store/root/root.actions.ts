import { Payload } from '../../models/payload.model';
import { User } from '../../models/user.model';
import { ELanguages } from '../../enums/languages.enum';
import { SignIn } from '../../models/sign-in.model';
import { CreateUser } from '../../models/create-user.model';
import { ErrorData } from '../../models/error-modal-data.model';
import { createAction, props } from '@ngrx/store';
import { EAppFeature } from '../../enums/navigation.enum';

export enum ERootActions {
  SetCurrentFeature = '[Root] Set current feature',
  SetCurrentUser = '[Root] Set Current User',
  SetLanguage = '[Root] Set Language',
  SetErrors = '[Root] Set Errors',
  SetIsLoading = '[Root] Set is loading',
  RestoreLanguage = '[Root] Restore Language',
  RestoreCurrentUser = '[Root] Restore User',
  SignIn = '[Root] Sign In',
  SignUp = '[Root] Sign Up',
  OpenSignInModal = '[Root] Open Sign In Modal',
  OpenSignUpModal = '[Root] Open Sign Up Modal',
  ChangeAppFeature = '[Root] Change App Feature'
}

export class RootActions {
  static readonly [ERootActions.SetCurrentFeature] = createAction(ERootActions.SetCurrentFeature, props<Payload<EAppFeature>>());
  static readonly [ERootActions.ChangeAppFeature] = createAction(ERootActions.ChangeAppFeature, props<Payload<EAppFeature>>());
  static readonly [ERootActions.SetCurrentUser] = createAction(ERootActions.SetCurrentUser, props<Payload<User>>());
  static readonly [ERootActions.SetLanguage] = createAction(ERootActions.SetLanguage, props<Payload<ELanguages>>());
  static readonly [ERootActions.RestoreLanguage] = createAction(ERootActions.RestoreLanguage);
  static readonly [ERootActions.RestoreCurrentUser] = createAction(ERootActions.RestoreCurrentUser);
  static readonly [ERootActions.SignIn] = createAction(ERootActions.SignIn, props<Payload<SignIn>>());
  static readonly [ERootActions.SignUp] = createAction(ERootActions.SignUp, props<Payload<CreateUser>>());
  static readonly [ERootActions.OpenSignInModal] = createAction(ERootActions.OpenSignInModal);
  static readonly [ERootActions.OpenSignUpModal] = createAction(ERootActions.OpenSignUpModal);
  static readonly [ERootActions.SetErrors] = createAction(ERootActions.SetErrors, props<Payload<ErrorData>>());
  static readonly [ERootActions.SetIsLoading] = createAction(ERootActions.SetIsLoading, props<Payload<boolean>>());
}
