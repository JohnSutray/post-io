import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserListItemComponent,
  ],
})
export class UserListModule {
}
