import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ERootActions, RootActions } from './root.actions';
import { map, switchMap, tap } from 'rxjs/operators';
import { EmptyAction } from '../empty.action';
import { DialogService } from '../../services/dialog.service';
import { BottomSheetService } from '../../services/botton-sheet.service';
import { SignInComponent } from '../../modules/sign/sign-in/sign-in.component';
import { SignUpComponent } from '../../modules/sign/sign-up/sign-up.component';
import { AuthorizeService } from '../../services/authorize.service';
import { Payload } from '../../models/payload.model';
import { ErrorData } from '../../models/error-modal-data.model';
import { LanguageService } from '../../services/language.service';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IAppStore } from '../app.store';
import { selectRoot } from './root.selector';
import { combineLatest } from 'rxjs';
import { EAppFeature } from '../../enums/navigation.enum';

@Injectable()
export class RootEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly dialogService: DialogService,
    private readonly bottomSheetService: BottomSheetService,
    private readonly authService: AuthorizeService,
    private readonly languageService: LanguageService,
    private readonly router: Router,
    private readonly store: Store<IAppStore>,
  ) {
  }

  readonly rootState = this.store.select(selectRoot);
  readonly isLoading = this.rootState.pipe(
    select(s => s.isLoading),
  );

  [ERootActions.RestoreLanguage] = createEffect(() => this.actions$.pipe(
    ofType(RootActions[ERootActions.RestoreLanguage]),
    tap(() => this.languageService.restoreLanguage()),
    map(() => RootActions[ERootActions.SetLanguage]({ value: this.languageService.currentLanguage })),
    map(() => EmptyAction()),
  ));

  [ERootActions.RestoreCurrentUser] = createEffect(() => this.actions$.pipe(
    ofType(RootActions[ERootActions.RestoreCurrentUser]),
    switchMap(() => this.authService.iAm()),
    map(user => RootActions[ERootActions.SetCurrentUser](new Payload(user))),
  ));

  [ERootActions.OpenSignInModal] = createEffect(() => this.actions$.pipe(
    ofType(RootActions[ERootActions.OpenSignInModal]),
    tap(() => this.dialogService.open(SignInComponent)),
    map(() => EmptyAction()),
  ));

  [ERootActions.OpenSignUpModal] = createEffect(() => this.actions$.pipe(
    ofType(RootActions[ERootActions.OpenSignUpModal]),
    tap(() => this.dialogService.open(SignUpComponent)),
    map(() => EmptyAction()),
  ));

  [ERootActions.SignIn] = createEffect(() => this.actions$.pipe(
    ofType(RootActions[ERootActions.SignIn]),
    switchMap(signInData => this.authService.signIn(signInData.value)),
    map(result => result.success
      ? RootActions[ERootActions.RestoreCurrentUser]()
      : RootActions[ERootActions.SetErrors](new Payload(new ErrorData('Cannot sign in', result.errors))),
    ),
  ));

  [ERootActions.SetCurrentFeature] = createEffect(() => this.actions$.pipe(
    ofType(RootActions[ERootActions.SetCurrentFeature]),
    tap(console.log),
  ));
}
