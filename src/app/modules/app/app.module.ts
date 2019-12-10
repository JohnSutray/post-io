import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationPanelModule } from '../navigation-panel/navigation-panel.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InfoDialogModule } from '../../components/info-dialog/info-dialog.module';
import { AuthorizeInterceptor } from '../../interceptors/authorize.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavigationPanelModule,
    MatDialogModule,
    MatBottomSheetModule,
    HttpClientModule,
    InfoDialogModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizeInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
