import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SignIn } from '../../models/sign-in.model';
import { environment } from '../../../environments/environment';
import { OperationResult } from '../../models/operation-result.model';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeClientService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  signIn(signIn: SignIn): Observable<{ token: string }> {
    return this.httpClient.post<{ token: string }>(`${environment.apiEndpoint}/auth`, signIn);
  }

  iAm(): Observable<User> {
    return this.httpClient.get<User>(`${environment.apiEndpoint}/auth`);
  }
}
