import { Injectable } from '@angular/core';
import { EAppState } from '../enums/navigation.enum';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(
    private readonly router: Router,
  ) {
  }

  private _appFeature: EAppState;
  private _navigationDisabled: boolean;

  get appFeature(): EAppState {
    return this._appFeature;
  }

  get navigationDisabled(): boolean {
    return this._navigationDisabled;
  }

  navigateTo(feature: EAppState): void {
    this.router.navigate([feature]);
    this._appFeature = feature;
  }

  disableNavigation(): void {
    this._navigationDisabled = true;
  }

  enableNavigation(): void {
    this._navigationDisabled = false;
  }
}
