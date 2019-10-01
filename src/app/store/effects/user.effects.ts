import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EUserActions } from '../actions/user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
  ) {}

  loadRandomUsers$ = createEffect(() => this.actions$.pipe(
    ofType(EUserActions.GetCurrentUser),
    
  ));


}
