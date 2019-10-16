import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorSnackbarComponent } from './error-snackbar.component';


@NgModule({
  declarations: [
    ErrorSnackbarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ErrorSnackbarComponent,
  ],
  entryComponents: [
    ErrorSnackbarComponent,
  ],
})
export class ErrorSnackbarModule {
}
