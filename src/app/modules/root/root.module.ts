import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootComponent } from './root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RootRoutingModule } from './root-routing.module';
import { UserListModule } from '../user/user-list/user-list.module';
import { UserPageModule } from '../user/user-page/user-page.module';
import { ControlPanelModule } from '../control-panel/control-panel.module';
import { StoreModule } from '@ngrx/store';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { ApolloClientUtils } from '../../../utils/apollo-client.utils';
import { TranslationModule } from '../translation/translation.module';
import { EffectsModule } from '@ngrx/effects';
import { RootEffects } from '../../store/effects/root.effects';
import { LocalStorageService } from '../../services/local-storage.service';
import { RootReducers, RootStoreModule } from '../../store/root-store.module';
import { DialogService } from '../../services/dialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { SignInDialogModule } from '../sign-in-dialog/sign-in-dialog.module';
import { UserSignUpDialogModule } from '../sign-up-dialog/user-sign-up-dialog.module';
import { JwtInterceptor } from '../../interceptors/jwt.interceptor';
import { AuthorizationService } from '../../services/authorization.service';
import { IAmQuery, SignInQuery } from '../../queries/authorizr.queries';
import { SnackbarService } from '../../services/snackbar.service';
import { MatSnackBarModule } from '@angular/material';
import { ErrorSnackbarModule } from '../../components/snackbars/error-snackbar/error-snackbar.module.module';
import { ErrorSnackbarComponent } from '../../components/snackbars/error-snackbar/error-snackbar.component';

@NgModule({
  declarations: [
    RootComponent,
  ],
  imports: [
    RootStoreModule,
    EffectsModule.forRoot([RootEffects]),
    RootRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpLinkModule,
    UserListModule,
    UserPageModule,
    ControlPanelModule,
    ApolloModule,
    TranslationModule,
    MatDialogModule,
    MatSnackBarModule,
    SignInDialogModule,
    UserSignUpDialogModule,
    ErrorSnackbarModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: ApolloClientUtils.apolloOptionsFactory,
      deps: [HttpLink],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    LocalStorageService,
    DialogService,
    AuthorizationService,
    SignInQuery,
    IAmQuery,
    SnackbarService,
  ],
  bootstrap: [
    RootComponent,
  ],
  entryComponents: [
    ErrorSnackbarComponent,
  ],
})
export class RootModule {
}
