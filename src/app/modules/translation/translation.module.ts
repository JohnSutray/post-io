import { NgModule } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslationPipe } from '../../pipes/translation.pipe';


@NgModule({
  declarations: [
    TranslationPipe,
  ],
  providers: [
    TranslationService,
  ],
  exports: [
    TranslationPipe,
  ],
})
export class TranslationModule {
}
