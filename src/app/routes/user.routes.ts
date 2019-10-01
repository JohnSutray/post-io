import { Routes } from '@angular/router';
import { RoutingConstants } from '../constants/routing.constants';
import { UserListComponent } from '../modules/user/user-list/user-list.component';
import { UserPageComponent } from '../modules/user/user-page/user-page.component';

export const UserRoutes: Routes = [
  {
    path: RoutingConstants.USERS.BASE,
    component: UserListComponent,
  },
  {
    path: `${RoutingConstants.USERS.BASE}`,
    component: UserPageComponent,
    outlet: RoutingConstants.OUTLETS.FEATURE_CONTENT,
  },
];
