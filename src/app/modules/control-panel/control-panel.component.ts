import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlPanelTab } from '../../models/control-panel-tab.model';
import { RoutingConstants } from '../../constants/routing.constants';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent {
  constructor(
    private router: Router,
  ) {
  }

  tabs: Array<ControlPanelTab> = [
    new ControlPanelTab(
      'Users',
      'supervised_user_circle',
      [RoutingConstants.USERS.BASE],
    ),
    new ControlPanelTab('My Page', 'perm_identity', []),
    new ControlPanelTab('Dialogs', 'chat', []),
    new ControlPanelTab('Posts', 'menu_book', []),
  ];
}
