import { IRootState, RootStateToken } from './root/root.state';

export interface IAppStore {
  [RootStateToken]: IRootState;
}
