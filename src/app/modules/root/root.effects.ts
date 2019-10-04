import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { State } from '@ngrx/store';
import { IRootState } from '../../store/state/root.state';
import { RootActions } from '../../store/actions/root.actions';
import { map, tap } from 'rxjs/operators';
import { TranslationService } from '../../services/translation.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { LocalStorageConstants } from '../../constants/local-storage.constants';
import { ELanguage } from '../../enums/language.enum';
import { CommonActions } from '../../store/actions/common.actions';

@Injectable()
export class RootEffects {
  constructor(
    private state: State<IRootState>,
    private actions$: Actions,
    private translationService: TranslationService,
    private localStorageService: LocalStorageService,
  ) {
  }

  setLanguage$ = createEffect(() => this.actions$.pipe(
    ofType(RootActions.RestoreLanguage),
    tap(() => this._restoreLanguage()),
    map(() => CommonActions.EmptyAction()),
  ));

  private _restoreLanguage() {
    const language: ELanguage = this.localStorageService.get(LocalStorageConstants.LANGUAGE);

    if (language) {
      this.translationService.setLanguage(language);
    }
  }
}
