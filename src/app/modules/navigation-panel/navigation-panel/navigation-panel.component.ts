import { Component } from '@angular/core';
import { NavigationPanelElementsConstants } from '../../../constants/navigation-panel-elements.constants';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent {
  elements = NavigationPanelElementsConstants.ELEMENTS;

  navigateTo(path: string) {
  }
}
