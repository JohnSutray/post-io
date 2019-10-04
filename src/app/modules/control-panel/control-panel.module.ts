import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from './control-panel.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslationModule } from '../translation/translation.module';


@NgModule({
  declarations: [
    ControlPanelComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    RouterModule,
    TranslationModule,
  ],
  exports: [
    ControlPanelComponent,
  ],
})
export class ControlPanelModule {
}
