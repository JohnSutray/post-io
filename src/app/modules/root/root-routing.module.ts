import { RouterModule, Routes } from '@angular/router';
import { UserRoutes } from '../../routes/user.routes';
import { NgModule } from '@angular/core';

const routes: Routes = [
  ...UserRoutes,
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class RootRoutingModule {
}
