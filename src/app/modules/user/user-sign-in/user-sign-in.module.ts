import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSignInComponent } from './user-sign-in.component';
import { MatCardModule } from '@angular/material';



@NgModule({
  declarations: [UserSignInComponent],
  imports: [
    CommonModule,
    MatCardModule,
  ],
})
export class UserSignInModule { }
