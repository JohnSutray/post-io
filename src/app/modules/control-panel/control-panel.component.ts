import { Component } from '@angular/core';
import { ControlPanelTab } from '../../models/control-panel-tab.model';
import { RoutingConstants } from '../../constants/routing.constants';
import { TranslationKeysConstants } from '../../constants/translation-keys.constants';
import { createSelector, select, State } from '@ngrx/store';
import { IRootState } from '../../store/state/root.state';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent {
  constructor(
    private state: State<IRootState>,
  ) {
  }

  tabs: Array<ControlPanelTab> = [
    new ControlPanelTab(TranslationKeysConstants.USERS, 'supervised_user_circle', [RoutingConstants.USERS.BASE]),
    new ControlPanelTab(TranslationKeysConstants.MY_PAGE, 'perm_identity', []),
    new ControlPanelTab(TranslationKeysConstants.DIALOGS, 'chat', []),
    new ControlPanelTab(TranslationKeysConstants.POSTS, 'menu_book', []),
  ];

  // currentTab$ = this.state.pipe(select(createSelector(s => s.currentTab)));

  openTab(routerLink: string[]) {

  }
}
