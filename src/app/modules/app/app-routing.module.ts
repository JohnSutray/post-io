import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EAppState } from '../../enums/navigation.enum';
import { AuthorizeGuard } from '../../guards/authorize.guard';

const routes: Routes = [
  {
    path: 'sign',
    loadChildren: () => import('../sign/sign.module').then(m => m.SignModule),
  },
  {
    path: EAppState.POSTS,
    canActivate: [AuthorizeGuard],
    loadChildren: () => import('../posts/posts.module').then(m => m.PostsModule),
  },
  {
    path: EAppState.USERS,
    canActivate: [AuthorizeGuard],
    loadChildren: () => import('../users/users.module').then(m => m.UsersModule),
  },
  {
    path: EAppState.MESSAGES,
    canActivate: [AuthorizeGuard],
    loadChildren: () => import('../messages/messages.module').then(m => m.MessagesModule),
  },
  {
    path: '**',
    redirectTo: EAppState.USERS,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
