import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { select, Store } from '@ngrx/store';
import { IRootState } from '../../store/state/root.state';
import { RootActions } from '../../store/actions/root.actions';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  constructor(
    private apollo: Apollo,
    private store: Store<IRootState>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(RootActions.RestoreLanguage());
  }
}
