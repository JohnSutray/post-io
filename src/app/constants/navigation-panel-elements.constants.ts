import { NavigationPanelElement } from '../models/navigation-panel-element.model';
import { ETranslation } from '../enums/translation.enum';
import { ENavigation } from '../enums/navigation.enum';

export const NavigationPanelElementsConstants = {
  ELEMENTS: [
    new NavigationPanelElement(ETranslation.USERS, `/${ENavigation.USERS}`),
    new NavigationPanelElement(ETranslation.MESSAGES, `/${ENavigation.MESSAGES}`),
    new NavigationPanelElement(ETranslation.POSTS, `/${ENavigation.POSTS}`),
  ] as NavigationPanelElement[],
} as const;
