import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SignIn } from '../../models/sign-in.model';
import { environment } from '../../../environments/environment';
import { OperationResult } from '../../models/operation-result.model';
import { User } from '../../models/user.model';

@Injectable()
export class AuthorizeClientService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  signIn(signIn: SignIn): Observable<OperationResult> {
    return this.httpClient.post<OperationResult>(`${environment.apiEndpoint}/auth`, signIn);
  }

  iAm(): Observable<User> {
    return this.httpClient.get<User>(`${environment.apiEndpoint}/i-am`);
  }
}
