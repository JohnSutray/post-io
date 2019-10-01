import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootComponent } from './root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RootRoutingModule } from './root-routing.module';
import { UserListModule } from '../user/user-list/user-list.module';
import { UserPageModule } from '../user/user-page/user-page.module';
import { ControlPanelModule } from '../control-panel/control-panel.module';
import { StoreModule } from '@ngrx/store';
import { UserReducer } from '../../store/reducers/user.reducer';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { ApolloClientUtils } from '../../../utils/apollo-client.utils';

@NgModule({
  declarations: [
    RootComponent,
  ],
  imports: [
    StoreModule.forRoot({
      user: UserReducer.reducer,
    }),
    RootRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpLinkModule,
    UserListModule,
    UserPageModule,
    ControlPanelModule,
    ApolloModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: ApolloClientUtils.apolloOptionsFactory,
      deps: [HttpLink],
    },
  ],
  bootstrap: [
    RootComponent,
  ],
})
export class RootModule {
}
