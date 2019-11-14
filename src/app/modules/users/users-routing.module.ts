import { RouterModule, Routes } from '@angular/router';
import { UsersThumbnailComponent } from './users-thumbnail/users-thumbnail.component';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersThumbnailComponent,
      },
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class UsersRoutingModule {
}
