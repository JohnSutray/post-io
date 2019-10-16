import { IUser } from '../../models/user/i-user.model';

export interface IUserState {
  user: IUser;
}

export class UserState {
  static getInitialUserState(): IUserState {
    return {
      user: null,
    };
  }
}
