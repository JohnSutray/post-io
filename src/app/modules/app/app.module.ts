import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationPanelModule } from '../navigation-panel/navigation-panel.module';
import { StoreModule } from '@ngrx/store';
import { RootReducer } from '../../store/root/root.reducer';
import { RootStateToken } from '../../store/root/root.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      [RootStateToken]: RootReducer,
    }),
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    NavigationPanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
