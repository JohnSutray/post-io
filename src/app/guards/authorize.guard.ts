import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthorizeService } from '../services/authorize.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeGuard implements CanActivate {
  constructor(
    private readonly authorizeService: AuthorizeService,
  ) {
  }

  canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authorizeService.isSigned) {
      this.authorizeService.restoreUser();
    }

    return this.authorizeService.isSigned;
  }
}
