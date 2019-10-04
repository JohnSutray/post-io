import { createAction } from '@ngrx/store';

export enum ERootActions {
  RestoreLanguage = '[Root] Restore Language',
  SetTab = '[Root] Set Tab',
}

export class RootActions {
  static readonly RestoreLanguage = createAction(ERootActions.RestoreLanguage);
  static readonly SetTab = createAction(ERootActions.SetTab);
}
