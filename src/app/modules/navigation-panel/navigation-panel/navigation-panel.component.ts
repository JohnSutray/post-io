import { Component } from '@angular/core';
import { NavigationPanelElementsConstants } from '../../../constants/navigation-panel-elements.constants';
import { select, Store } from '@ngrx/store';
import { selectRoot } from '../../../store/root/root.selector';
import { IAppStore } from '../../../store/app.store';
import { EAppFeature } from '../../../enums/navigation.enum';
import { ERootActions, RootActions } from '../../../store/root/root.actions';
import { Payload } from '../../../models/payload.model';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss'],
})
export class NavigationPanelComponent {
  constructor(
    private readonly store: Store<IAppStore>,
  ) {
  }

  readonly rootState = this.store.select(selectRoot);
  readonly currentFeature = this.rootState.pipe(
    select(state => state.currentFeature),
  );


  elements = NavigationPanelElementsConstants.ELEMENTS;

  navigateTo(path: EAppFeature) {
    console.log(`click navigate ${path}`)
    this.store.dispatch(RootActions[ERootActions.ChangeAppFeature](
      new Payload<EAppFeature>(path),
    ));
  }
}
