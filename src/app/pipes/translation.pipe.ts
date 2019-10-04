import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 't',
  pure: false,
})
export class TranslationPipe implements PipeTransform {
  constructor(
    private translationService: TranslationService,
  ) {
  }

  transform(value: string): string {
    return this.translationService.translate(value);
  }
}
