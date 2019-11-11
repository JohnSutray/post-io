import { NavigationPanelElement } from '../models/navigation-panel-element.model';
import { ETranslation } from '../enums/translation.enum';
import { EAppFeature } from '../enums/navigation.enum';

export const NavigationPanelElementsConstants = {
  ELEMENTS: [
    new NavigationPanelElement(ETranslation.USERS, EAppFeature.USERS),
    new NavigationPanelElement(ETranslation.MESSAGES, EAppFeature.MESSAGES),
    new NavigationPanelElement(ETranslation.POSTS, EAppFeature.POSTS),
  ] as NavigationPanelElement[],
} as const;
