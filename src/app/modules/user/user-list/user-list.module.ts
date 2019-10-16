import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [
    UserListComponent,
    UserListItemComponent,
  ],
  imports: [
    PerfectScrollbarModule,
  ],
})
export class UserListModule {
}
