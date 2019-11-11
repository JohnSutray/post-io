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

@Injectable()
export class AuthorizeService {
  constructor(
    private readonly authorizeClient: AuthorizeClientService,
    private readonly userClient: UserClientService,
    private readonly localStorageService: LocalStorageService,
  ) {
  }

  signIn(signIn: SignIn): Observable<OperationResult> {
    return this.authorizeClient.signIn(signIn);
  }

  signOut(): void {
    this.localStorageService.remove(ELocalStorage.TOKEN);
  }

  signUp(signUp: CreateUser): Observable<OperationResult> {
    return this.userClient.createUser(signUp);
  }

  iAm(): Observable<User> {
    return this.authorizeClient.iAm();
  }
}
