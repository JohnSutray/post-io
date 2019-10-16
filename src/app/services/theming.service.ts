import { Injectable } from '@angular/core';
import { ThemingEnum } from '../enums/theming.enum';
import { LocalStorageService } from './local-storage.service';
import { LocalStorageConstants } from '../constants/local-storage.constants';

@Injectable()
export class ThemingService {
  constructor(
    private localStorageService: LocalStorageService,
  ) {
  }

  restoreTheme() {
    const theme = this.localStorageService.get<string>(LocalStorageConstants.THEME);
  }

  changeTheme(theme: ThemingEnum) {
    document.body.classList.remove();
  }
}
