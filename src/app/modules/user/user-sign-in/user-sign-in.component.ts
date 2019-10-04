import { Component, OnInit } from '@angular/core';
import { TranslationKeysConstants } from '../../../constants/translation-keys.constants';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.scss']
})
export class UserSignInComponent implements OnInit {
  readonly TranslationsKeys = TranslationKeysConstants;

  constructor() { }

  ngOnInit() {
  }

}
