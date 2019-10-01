import { UserState, IUserState } from './user.state';

export interface IRootState {
  userState: IUserState;
}

export function getInitialRootState(): IRootState {
  return {
    userState: UserState.getInitialUserState(),
  };
}
