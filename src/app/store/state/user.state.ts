import { IUser } from '../../models/user/i-user.model';

export interface IUserState {
  users: IUser[];
  currentUser: IUser;
}

export class UserState {
  static getInitialUserState(): IUserState {
    return {
      users: null,
      currentUser: null,
    };
  }
}
