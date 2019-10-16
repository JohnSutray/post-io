import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { environment } from '../environments/environment';
import { ApolloLink, from } from 'apollo-link';

export class ApolloClientUtils {
  static apolloOptionsFactory() {
    return {
      cache: new InMemoryCache(),
      link: from([
        new ApolloLink((operation, forward) => {
          return forward(operation).map(response => {
            const context = operation.getContext();
            const headers = context.response.headers;

            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
            console.log(context.response);
            console.log(Array.from(headers.keys()));

            return response;
          });
        }),
        createHttpLink({
          uri: environment.graphQLApiEndPoint,
        }),
      ]),
    };
  }
}
