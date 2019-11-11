import { ERootActions, RootActions } from './root.actions';
import { IRootState, RootState } from './root.state';
import { Payload } from '../../models/payload.model';
import { User } from '../../models/user.model';
import { ELanguages } from '../../enums/languages.enum';
import { Action } from '@ngrx/store';
import { StoreUtils } from '../../utils/store.utils';

export class RootReducerMappers {
  static [ERootActions.SetLanguage](state: IRootState, payload: Payload<ELanguages>): IRootState {
    return {
      ...state,
      language: payload.value,
    };
  }

  static [ERootActions.SetCurrentUser](state: IRootState, payload: Payload<User>): IRootState {
    return {
      ...state,
      currentUser: payload.value,
    };
  }
}

const rootReducer = StoreUtils.createReducer(
  RootState.getInitialRootState(),
  RootReducerMappers,
  RootActions,
);

export function RootReducer(state: IRootState, action: Action) {
  return rootReducer(state, action);
}
