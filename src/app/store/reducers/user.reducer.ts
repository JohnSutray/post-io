import { Action, createReducer, on } from '@ngrx/store';
import { IUserState, UserState } from '../state/user.state';
import { EUserActions, UserActions } from '../actions/user.actions';
import { IUser } from '../../models/user/i-user.model';

export class UserReduceMappers {
  static [EUserActions.GetUsersByGuidSuccess](state: IUserState, payload: IUser[]): IUserState {
    return {
      ...state,
      users: payload,
    };
  }

  static [EUserActions.GetCurrentUserSuccess](state: IUserState, payload: IUser): IUserState {
    return {
      ...state,
      currentUser: payload,
    };
  }
}

const reducer = createReducer(
  UserState.getInitialUserState(),
  on(UserActions.GetUsersByGuidSuccess, UserReduceMappers[EUserActions.GetUsersByGuidSuccess]),
  on(UserActions.GetCurrentUserSuccess, UserReduceMappers[EUserActions.GetCurrentUserSuccess]),
);

export class UserReducer {
  static reducer(store: IUserState, action: Action) {
    return reducer(store, action);
  }
}


