import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Injectable()
export class LoginService {
  constructor(
    private apolloClient: Apollo,
  ) {
  }

  login(username: string, password: string) {
  }
}
