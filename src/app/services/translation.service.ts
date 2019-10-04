import { Injectable } from '@angular/core';
import { ELanguage } from '../enums/language.enum';
import { DictionariesMapperConstants } from '../constants/dictionaries/dictionares-mapper.constants';

@Injectable()
export class TranslationService {
  private dictionary = DictionariesMapperConstants[ELanguage.ENGLISH];

  setLanguage(language: ELanguage) {
    this.dictionary = DictionariesMapperConstants[language];
  }

  translate(dictionaryKey: string): string {
    return this.dictionary[dictionaryKey];
  }
}
