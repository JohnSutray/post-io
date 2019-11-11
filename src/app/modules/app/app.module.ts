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
import { EffectsModule } from '@ngrx/effects';
import { RootEffects } from '../../store/root/root.effects';
import { MatDialogModule } from '@angular/material/dialog';
import { BottomSheetService } from '../../services/botton-sheet.service';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { AuthorizeService } from '../../services/authorize.service';
import { HttpClientModule } from '@angular/common/http';

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
    EffectsModule.forRoot([RootEffects]),
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    NavigationPanelModule,
    MatDialogModule,
    MatBottomSheetModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
