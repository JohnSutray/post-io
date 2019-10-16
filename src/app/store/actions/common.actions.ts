import { createAction } from '@ngrx/store';

export enum ECommonActions {
  EmptyAction = '[App] Empty Action'
}

export class CommonActions {
  static readonly [ECommonActions.EmptyAction] = createAction(ECommonActions.EmptyAction);
}
