import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AuthorizeService } from '../services/authorize.service';
import { EAppState } from '../enums/navigation.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeGuard implements CanActivateChild {
  constructor(
    private readonly authorizeService: AuthorizeService,
    private readonly router: Router,
  ) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authorizeService.isSigned) {
      this.router.navigate([EAppState.SIGN]);
    }

    return this.authorizeService.isSigned;
  }
}
