import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EAppFeature } from '../../enums/navigation.enum';


const routes: Routes = [
  {
    path: EAppFeature.POSTS,
    loadChildren: () => import('../posts/posts.module').then(m => m.PostsModule),
  },
  {
    path: EAppFeature.USERS,
    loadChildren: () => import('../users/users.module').then(m => m.UsersModule),
  },
  {
    path: EAppFeature.MESSAGES,
    loadChildren: () => import('../messages/messages.module').then(m => m.MessagesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
