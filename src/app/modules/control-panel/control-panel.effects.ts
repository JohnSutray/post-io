import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { State } from '@ngrx/store';
import { IRootState } from '../../store/state/root.state';

@Injectable()
export class ControlPanelEffects {
  constructor(
    private readonly router: Router,
    private readonly state: State<IRootState>,
  ) {
  }

}
