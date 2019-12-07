import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUser } from '../../models/create-user.model';
import { Observable } from 'rxjs';
import { OperationResult } from '../../models/operation-result.model';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserClientService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  createUser(createUser: CreateUser): Observable<User> {
    return this.httpClient.post<User>(`${environment.apiEndpoint}/user`, createUser);
  }
}
