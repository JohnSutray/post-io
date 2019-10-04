import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './error-dialog.component';
import { BaseDialogComponent } from '../base-dialog.component';


@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [
    CommonModule,
  ],
})
export class ErrorDialogModule extends BaseDialogComponent<ErrorDialogModule, void> {
}
