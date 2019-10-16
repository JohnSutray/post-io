import { Component, ViewChild } from '@angular/core';
import { ControlPanelTab } from '../../models/control-panel-tab.model';
import { RoutingConstants } from '../../constants/routing.constants';
import { TranslationKeysConstants } from '../../constants/translation-keys.constants';
import { createSelector, select, State, Store } from '@ngrx/store';
import { IRootState } from '../../store/state/root.state';
import { MatTabGroup } from '@angular/material';
import { IconConstants } from '../../constants/icon.constants';
import { ERootActions, RootActions } from '../../store/actions/root.actions';
import { IAppState } from '../../store/root-store.module';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent {
  readonly TranslationKeysConstants = TranslationKeysConstants;

  @ViewChild(MatTabGroup, { static: true }) tabGroup: MatTabGroup;

  constructor(
    private store: Store<IAppState>,
  ) {
  }

  tabs: Array<ControlPanelTab> = [
    new ControlPanelTab(TranslationKeysConstants.USERS, IconConstants.USER_CIRCLE, [RoutingConstants.USERS.BASE]),
    new ControlPanelTab(TranslationKeysConstants.MY_PAGE, IconConstants.PERM_IDENTITY, []),
    new ControlPanelTab(TranslationKeysConstants.DIALOGS, IconConstants.CHAT, []),
    new ControlPanelTab(TranslationKeysConstants.POSTS, IconConstants.MENU_BOOK, []),
  ];

  // currentTab$ = this.state.pipe(select(createSelector(s => s.currentTab)));

  user$ = this.store.select(store => store.root.user);

  openTab(routerLink: string[]) {

  }

  openSignIn() {
    this.store.dispatch(RootActions[ERootActions.OpenSignIn]());
  }

  openSignUp() {
    this.store.dispatch(RootActions[ERootActions.OpenSignUp]());
  }

  signOut() {
    this.store.dispatch(RootActions[ERootActions.SignOut]());
  }
}
