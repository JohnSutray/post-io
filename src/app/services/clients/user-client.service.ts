import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUser } from '../../models/create-user.model';
import { Observable } from 'rxjs';
import { OperationResult } from '../../models/operation-result.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserClientService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  createUser(createUser: CreateUser): Observable<OperationResult> {
    return this.httpClient.post<OperationResult>(`${environment.apiEndpoint}/user`, createUser);
  }
}
