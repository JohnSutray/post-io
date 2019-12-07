import { NavigationPanelElement } from '../models/navigation-panel-element.model';
import { LabelConstants } from './label.constants';
import { EAppState } from '../enums/navigation.enum';

export const NavigationPanelElementsConstants = {
  ELEMENTS: [
    new NavigationPanelElement(LabelConstants.USERS, EAppState.USERS),
    new NavigationPanelElement(LabelConstants.MESSAGES, EAppState.MESSAGES),
    new NavigationPanelElement(LabelConstants.POSTS, EAppState.POSTS),
  ] as NavigationPanelElement[],
} as const;
