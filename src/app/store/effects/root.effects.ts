import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { IRootState } from '../state/root.state';
import { ERootActions, RootActions } from '../actions/root.actions';
import { map, switchMap, tap } from 'rxjs/operators';
import { TranslationService } from '../../services/translation.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { LocalStorageConstants } from '../../constants/local-storage.constants';
import { ELanguage } from '../../enums/language.enum';
import { CommonActions, ECommonActions } from '../actions/common.actions';
import { DialogService } from '../../services/dialog.service';
import { SignInDialogComponent } from '../../modules/sign-in-dialog/sign-in-dialog.component';
import { UserSignUpDialogComponent } from '../../modules/sign-up-dialog/user-sign-up-dialog.component';
import { AuthorizationService } from '../../services/authorization.service';
import { SnackbarService } from '../../services/snackbar.service';

@Injectable()
export class RootEffects {
  constructor(
    private store: Store<IRootState>,
    private actions$: Actions,
    private translationService: TranslationService,
    private localStorageService: LocalStorageService,
    private dialogService: DialogService,
    private snackBarService: SnackbarService,
    private authorizationService: AuthorizationService,
  ) {
  }

  [ERootActions.RestoreLanguage] = createEffect(() => this.actions$.pipe(
    ofType(RootActions[ERootActions.RestoreLanguage]),
    tap(() => this._restoreLanguage()),
    map(() => CommonActions[ECommonActions.EmptyAction]()),
  ));

  [ERootActions.OpenSignIn] = createEffect(() => this.actions$.pipe(
    ofType(RootActions[ERootActions.OpenSignIn]),
    tap(() => this._openSignIn()),
    map(() => CommonActions[ECommonActions.EmptyAction]()),
  ));

  [ERootActions.OpenSignUp] = createEffect(() => this.actions$.pipe(
    ofType(RootActions[ERootActions.OpenSignUp]),
    tap(() => this._openSignUp()),
    map(() => CommonActions[ECommonActions.EmptyAction]()),
  ));

  [ERootActions.SignIn] = createEffect(() => this.actions$.pipe(
    ofType(RootActions[ERootActions.SignIn]),
    switchMap(signInInput => this.authorizationService.signIn(signInInput)),
    tap(signInResult => signInResult.result && this.localStorageService.put(LocalStorageConstants.TOKEN, signInResult.token)),
    map(signInResult => signInResult.result
      ? RootActions[ERootActions.RestoreUser]()
      : RootActions[ERootActions.ErrorNotification]({value: 'signinerror'}),
    ),
  ));

  [ERootActions.SignOut] = createEffect(() => this.actions$.pipe(
    ofType(RootActions[ERootActions.SignOut]),
    tap(() => this.localStorageService.remove(LocalStorageConstants.TOKEN)),
    map(() => RootActions[ERootActions.SetUser]({value: null})),
  ));

  [ERootActions.ErrorNotification] = createEffect(() => this.actions$.pipe(
    ofType(RootActions[ERootActions.ErrorNotification]),
    tap(errorMessagePayload => this.snackBarService.open(errorMessagePayload.value, 3000, 'error-snackbar')),
    map(() => CommonActions[ECommonActions.EmptyAction]()),
  ));

  [ERootActions.RestoreUser] = createEffect(() => this.actions$.pipe(
    ofType(RootActions[ERootActions.RestoreUser]),
    switchMap(() => this.authorizationService.iAm()),
    map(user => user
      ? RootActions[ERootActions.SetUser]({value: user})
      : RootActions[ERootActions.SignOut](),
    ),
  ));

  private _restoreLanguage(): void {
    const language: ELanguage = this.localStorageService.get(LocalStorageConstants.LANGUAGE);

    if (language) {
      this.translationService.setLanguage(language);
    }
  }

  private _openSignIn(): void {
    this.dialogService.open(SignInDialogComponent);
  }

  private _openSignUp(): void {
    this.dialogService.open(UserSignUpDialogComponent);
  }
}
