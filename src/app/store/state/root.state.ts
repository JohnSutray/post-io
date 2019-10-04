import { IUserState, UserState } from './user.state';
import { EAppTabs } from '../../enums/app-tabs.enum';

export interface IRootState {
  userState: IUserState;
  currentTab: EAppTabs;
}

export function getInitialRootState(): IRootState {
  return {
    userState: UserState.getInitialUserState(),
    currentTab: EAppTabs.USERS,
  };
}
