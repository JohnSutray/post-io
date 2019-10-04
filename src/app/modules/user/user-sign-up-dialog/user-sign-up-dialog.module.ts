import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSignUpDialogComponent } from './user-sign-up-dialog.component';
import { MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslationModule } from '../../translation/translation.module';



@NgModule({
  declarations: [UserSignUpDialogComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    TranslationModule,
  ],
})
export class UserSignUpDialogModule { }
