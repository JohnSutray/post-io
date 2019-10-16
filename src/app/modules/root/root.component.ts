import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IRootState } from '../../store/state/root.state';
import { ERootActions, RootActions } from '../../store/actions/root.actions';
import { SignInQuery } from '../../queries/authorizr.queries';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  constructor(
    private store: Store<IRootState>,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(RootActions[ERootActions.RestoreLanguage]());
    this.store.dispatch(RootActions[ERootActions.RestoreUser]());
  }
}
