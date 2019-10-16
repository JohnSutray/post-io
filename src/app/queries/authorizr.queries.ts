import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import { IAmResult, QuerySignInArgs, SignInResult } from '../generated/graph-ql-types';

@Injectable()
export class SignInQuery extends Query<{ signIn: SignInResult }, QuerySignInArgs> {
  document = gql`
      query ($input: SignInInput!){
          signIn(input: $input) {
              result
              token
          }
      }
  `;
}

@Injectable()
export class IAmQuery extends Query<{ iAm: IAmResult }, void> {
  document = gql`
    query {
        iAm {
            user {
                uuid
                firstName
                lastName
                friends
            }
        }
    }
  `;
}
