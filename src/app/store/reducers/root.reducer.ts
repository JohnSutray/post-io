import { ERootActions, RootActions } from '../actions/root.actions';
import { IRootState, RootState } from '../state/root.state';
import { ScalarPayload } from '../payloads/root.payloads';
import { createReducer, on } from '@ngrx/store';
import { EAppTabs } from '../../enums/app-tabs.enum';
import { User } from '../../generated/graph-ql-types';

export class RootReducerMappers {
  static [ERootActions.SetTab](state: IRootState, {value}: ScalarPayload<EAppTabs>): IRootState {
    return {
      ...state,
      currentTab: value,
    };
  }

  static [ERootActions.SetTabCanChange](state: IRootState, {value}: ScalarPayload<boolean>): IRootState {
    return {
      ...state,
      canChangeTabs: value,
    };
  }

  static [ERootActions.SetUser](state: IRootState, { value }: ScalarPayload<User>): IRootState {
    return {
      ...state,
      user: value,
    };
  }
}

export class RootReducer {
  static reducer = createReducer(
    RootState.getInitialRootState(),
    on(RootActions[ERootActions.SetTab], RootReducerMappers[ERootActions.SetTab]),
    on(RootActions[ERootActions.SetTabCanChange], RootReducerMappers[ERootActions.SetTabCanChange]),
    on(RootActions[ERootActions.SetUser], RootReducerMappers[ERootActions.SetUser])
  );
}
