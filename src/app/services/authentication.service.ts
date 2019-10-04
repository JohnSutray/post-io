import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { CreateUserInput } from '../generated/entity/globalTypes';
import { CreateUser } from '../queries/user.queries';

@Injectable()
export class AuthenticationService {
  constructor(
    private apolloClient: Apollo,
  ) {
  }

  login(username: string, password: string) {
  }

  createUser(createUserInput: CreateUserInput) {
    return this.apolloClient.watchQuery({
      query: CreateUser,
      variables: {
        input: createUserInput,
      },
    });
  }
}
