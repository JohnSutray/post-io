import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersThumbnailComponent } from './users-thumbnail/users-thumbnail.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserPageComponent } from './user-page/user-page.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UserPageComponent,
    UsersThumbnailComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
  ],
})
export class UsersModule {
}
