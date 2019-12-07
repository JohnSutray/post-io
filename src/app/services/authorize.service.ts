import { Injectable } from '@angular/core';
import { AuthorizeClientService } from './clients/authorize-client.service';
import { LocalStorageService } from './local-storage.service';
import { SignIn } from '../models/sign-in.model';
import { Observable } from 'rxjs';
import { OperationResult } from '../models/operation-result.model';
import { ELocalStorage } from '../enums/local-storage.enum';
import { CreateUser } from '../models/create-user.model';
import { UserClientService } from './clients/user-client.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { EAppState } from '../enums/navigation.enum';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeService {
  constructor(
    private readonly authorizeClient: AuthorizeClientService,
    private readonly userClient: UserClientService,
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router,
  ) {
  }

  private currentUser: User;

  get token(): string {
    return this.localStorageService.get<string>(ELocalStorage.TOKEN);
  }

  get isSigned(): boolean {
    return !!this.currentUser;
  }

  restoreUser(): void {
    this.authorizeClient.iAm().subscribe(this.checkSignResult);
  }

  signIn(signIn: SignIn): void {
    this.authorizeClient.signIn(signIn).pipe(tap(console.log)).subscribe(this.checkSignResult);
  }

  signOut(): void {
    this.router.navigate([EAppState.SIGN]);
    this.localStorageService.remove(ELocalStorage.TOKEN);
  }

  signUp(signUp: CreateUser): void {
    this.userClient.createUser(signUp).subscribe(this.checkSignResult);
  }

  private checkSignResult = (user: User) => {
    if (user) {
      console.log(user);
      this.currentUser = user;
      this.router.navigate([EAppState.USERS]);
    }
  };
}
