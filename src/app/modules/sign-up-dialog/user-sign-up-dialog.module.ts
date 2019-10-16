import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSignUpDialogComponent } from './user-sign-up-dialog.component';
import { MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslationModule } from '../translation/translation.module';



@NgModule({
  declarations: [UserSignUpDialogComponent],
  exports: [UserSignUpDialogComponent],
  entryComponents: [UserSignUpDialogComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    TranslationModule,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class UserSignUpDialogModule { }
