import { Component } from '@angular/core';
import { NavigationPanelElementsConstants } from '../../constants/navigation-panel-elements.constants';
import { EAppState } from '../../enums/navigation.enum';
import { NavigationService } from '../../services/navigation.service';
import { AuthorizeService } from '../../services/authorize.service';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss'],
})
export class NavigationPanelComponent {
  readonly elements = NavigationPanelElementsConstants.ELEMENTS;

  constructor(
    private readonly navigationService: NavigationService,
    private readonly authorizeService: AuthorizeService,
  ) {
  }

  get currentFeature(): EAppState {
    return this.navigationService.appFeature;
  }

  get isSigned(): boolean {
    return this.authorizeService.isSigned;
  }

  get navigationDisabled(): boolean {
    return this.navigationService.navigationDisabled;
  }

  navigateTo(feature: EAppState) {
    this.navigationService.navigateTo(feature);
  }

  signOut() {
    this.authorizeService.signOut();
  }
}
