import { ERootActions, RootActions } from './root.actions';
import { IRootState, RootState } from './root.state';
import { Payload } from '../../models/payload.model';
import { User } from '../../models/user.model';
import { Action, createReducer, on } from '@ngrx/store';
import { EAppFeature } from '../../enums/navigation.enum';

export class RootReducerMappers {
  static [ERootActions.SetCurrentUser](state: IRootState, payload: Payload<User>): IRootState {
    return {
      ...state,
      currentUser: payload.value,
    };
  }

  static [ERootActions.SetCurrentFeature](state: IRootState, payload: Payload<EAppFeature>): IRootState {
    return {
      ...state,
      currentFeature: payload.value,
    };
  }

  static [ERootActions.SetIsLoading](state: IRootState, payload: Payload<boolean>): IRootState {
    return {
      ...state,
      isLoading: payload.value,
    };
  }
}

const rootReducer = createReducer(
  RootState.getInitialRootState(),
  on(RootActions[ERootActions.SetCurrentFeature], RootReducerMappers[ERootActions.SetCurrentFeature]),
  on(RootActions[ERootActions.SetCurrentUser], RootReducerMappers[ERootActions.SetCurrentUser]),
);

export function RootReducer(state: IRootState, action: Action) {
  return rootReducer(state, action);
}
