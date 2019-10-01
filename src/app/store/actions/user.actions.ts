import { createAction, props } from '@ngrx/store';
import { IUser } from '../../models/user/i-user.model';

export enum EUserActions {
  GetUsersByGuid = '[User] Get Users By Guid',
  GetUsersByGuidSuccess = '[User] Get Users By Guid Success',
  GetCurrentUser = '[User] Get Current User',
  GetCurrentUserSuccess = '[User] Get Current User Success',
}

export class UserActions {
  static GetUsersByGuid = createAction(EUserActions.GetUsersByGuid);
  static GetUsersByGuidSuccess = createAction(EUserActions.GetUsersByGuidSuccess, props<IUser[]>());
  static GetCurrentUser = createAction(EUserActions.GetCurrentUser);
  static GetCurrentUserSuccess = createAction(EUserActions.GetCurrentUserSuccess, props<IUser>());
}
