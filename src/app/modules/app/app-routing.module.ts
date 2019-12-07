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
    path: '',
    canActivateChild: [AuthorizeGuard],
    children: [
      {
        path: EAppState.POSTS,
        loadChildren: () => import('../posts/posts.module').then(m => m.PostsModule),
      },
      {
        path: EAppState.USERS,
        loadChildren: () => import('../users/users.module').then(m => m.UsersModule),
      },
      {
        path: EAppState.MESSAGES,
        loadChildren: () => import('../messages/messages.module').then(m => m.MessagesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
