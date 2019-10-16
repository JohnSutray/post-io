import { Injectable } from '@angular/core';
import { SignInInput, SignInResult, User } from '../generated/graph-ql-types';
import { IAmQuery, SignInQuery } from '../queries/authorizr.queries';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationService {
  constructor(
    private signInQuery: SignInQuery,
    private iAmQuery: IAmQuery,
  ) {
  }

  signIn(signInInput: SignInInput): Observable<SignInResult> {
    return this.signInQuery
      .watch({input: {login: signInInput.login, password: signInInput.password}})
      .valueChanges
      .pipe(map(result => result.data.signIn));
  }

  iAm(): Observable<User> {
    return this.iAmQuery
      .watch()
      .valueChanges
      .pipe(map(result => result.data.iAm.user));
  }
}
