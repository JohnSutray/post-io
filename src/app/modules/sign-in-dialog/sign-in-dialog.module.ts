import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInDialogComponent } from './sign-in-dialog.component';
import { MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslationModule } from '../translation/translation.module';


@NgModule({
  declarations: [SignInDialogComponent],
  exports: [SignInDialogComponent],
  entryComponents: [SignInDialogComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    TranslationModule,
    MatInputModule,
  ],
})
export class SignInDialogModule {
}
