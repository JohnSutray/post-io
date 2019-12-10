import { Injectable } from '@angular/core';
import { AuthorizeClientService } from './clients/authorize-client.service';
import { LocalStorageService } from './local-storage.service';
import { SignIn } from '../models/sign-in.model';
import { EMPTY, of } from 'rxjs';
import { ELocalStorage } from '../enums/local-storage.enum';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { EAppState } from '../enums/navigation.enum';
import { catchError, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeService {
  constructor(
    private readonly authorizeClient: AuthorizeClientService,
    private readonly router: Router,
    private readonly localStorageService: LocalStorageService,
  ) {
  }

  get token(): string {
    return this.localStorageService.get<string>(ELocalStorage.TOKEN);
  }

  private currentUser: User;

  get isSigned(): boolean {
    return !!this.currentUser;
  }

  restoreUser(): void {
    if (this.token) {
      this.authorizeClient.iAm().pipe(
        catchError(() => of(null)),
      ).subscribe(this.updateSign);
    } else {
      this.router.navigate([EAppState.SIGN]);
    }
  }

  signIn(signIn: SignIn): void {
    this.authorizeClient.signIn(signIn).pipe(
      // catchError(() => EMPTY),
      tap(signInResult => this.localStorageService.put(ELocalStorage.TOKEN, signInResult.token)),
      switchMap(() => this.authorizeClient.iAm()),
      tap(console.log),
      // catchError(() => EMPTY),
    ).subscribe(this.updateSign);
  }

  signOut(): void {
    this.updateSign(null);
  }

  private updateSign = (user: User) => {
    this.currentUser = user;

    if (user) {
      this.router.navigate([EAppState.USERS]);
    } else {
      this.localStorageService.remove(ELocalStorage.TOKEN);
      this.router.navigate([EAppState.SIGN]);
    }
  };
}
