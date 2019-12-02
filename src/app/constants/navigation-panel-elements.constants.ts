import { NavigationPanelElement } from '../models/navigation-panel-element.model';
import { TranslationConstants } from './translation.constants';
import { EAppFeature } from '../enums/navigation.enum';

export const NavigationPanelElementsConstants = {
  ELEMENTS: [
    new NavigationPanelElement(TranslationConstants.USERS, EAppFeature.USERS),
    new NavigationPanelElement(TranslationConstants.MESSAGES, EAppFeature.MESSAGES),
    new NavigationPanelElement(TranslationConstants.POSTS, EAppFeature.POSTS),
  ] as NavigationPanelElement[],
} as const;
