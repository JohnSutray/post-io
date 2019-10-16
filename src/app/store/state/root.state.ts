import { EAppTabs } from '../../enums/app-tabs.enum';
import { User } from '../../generated/graph-ql-types';

export interface IRootState {
  currentTab: EAppTabs;
  canChangeTabs: boolean;
  user: User;
}

export class RootState {
  static getInitialRootState(): IRootState {
    return {
      currentTab: EAppTabs.USERS,
      canChangeTabs: true,
      user: null,
    };
  }
}
