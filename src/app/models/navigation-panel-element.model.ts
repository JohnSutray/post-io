import { EAppFeature } from '../enums/navigation.enum';

export class NavigationPanelElement {
  constructor(
    readonly name: string,
    readonly feature: EAppFeature,
  ) {}
}
