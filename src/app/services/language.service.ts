import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { ELanguages } from '../enums/languages.enum';
import { ELocalStorage } from '../enums/local-storage.enum';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly translateService: TranslateService,
  ) {
  }

  get currentLanguage(): ELanguages {
    return this.localStorageService.get<ELanguages>(ELocalStorage.LANGUAGE);
  }

  restoreLanguage(): void {
    let current = this.localStorageService.get<ELanguages>(ELocalStorage.LANGUAGE);

    if (!current) {
      current = ELanguages.DEFAULT;
      this.localStorageService.put(ELocalStorage.LANGUAGE, current);
    }

    this.translateService.setDefaultLang(ELanguages.DEFAULT);
    this.translateService.use(current);
  }
}
