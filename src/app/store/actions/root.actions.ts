import { createAction, props } from '@ngrx/store';
import { ScalarPayload } from '../payloads/root.payloads';
import { SignInInput, SignUpInput, User } from '../../generated/graph-ql-types';
import { EAppTabs } from '../../enums/app-tabs.enum';
import { ThemingEnum } from '../../enums/theming.enum';

export enum ERootActions {
  RestoreLanguage = '[Root] Restore Language',
  RestoreUser = '[Root] Restore User',
  SetTab = '[Root] Set Tab',
  SetTabCanChange = '[Root] Set Tab Can Change',
  RaiseSignFailed = '[Root] Raise Sign Failed',
  SignIn = '[Root] Sign In',
  SignUp = '[Root] Sign Up',
  SignOut = '[Root] Sign Out',
  OpenSignIn = '[Root] Open Sign In',
  OpenSignUp = '[Root] Open Sign Up',
  SetUser = '[Root] Set User',
  ErrorNotification = '[Root] Error Notification',
  ChangeTheme = '[Root] Change Theme',
}

export class RootActions {
  static readonly [ERootActions.RestoreLanguage] = createAction(ERootActions.RestoreLanguage);
  static readonly [ERootActions.RestoreUser] = createAction(ERootActions.RestoreUser);
  static readonly [ERootActions.SetTab] = createAction(ERootActions.SetTab, props<ScalarPayload<EAppTabs>>());
  static readonly [ERootActions.SetTabCanChange] = createAction(ERootActions.SetTabCanChange, props<ScalarPayload<boolean>>());
  static readonly [ERootActions.OpenSignIn] = createAction(ERootActions.OpenSignIn);
  static readonly [ERootActions.OpenSignUp] = createAction(ERootActions.OpenSignUp);
  static readonly [ERootActions.SignIn] = createAction(ERootActions.SignIn, props<SignInInput>());
  static readonly [ERootActions.SignUp] = createAction(ERootActions.SignUp, props<SignUpInput>());
  static readonly [ERootActions.SignOut] = createAction(ERootActions.SignOut);
  static readonly [ERootActions.RaiseSignFailed] = createAction(ERootActions.RaiseSignFailed);
  static readonly [ERootActions.SetUser] = createAction(ERootActions.SetUser, props<ScalarPayload<User>>());
  static readonly [ERootActions.ErrorNotification] = createAction(ERootActions.ErrorNotification, props<ScalarPayload<string>>());
  static readonly [ERootActions.ChangeTheme] = createAction(ERootActions.ChangeTheme, props<ScalarPayload<ThemingEnum>>());
}
