import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { environment } from '../environments/environment';

export class ApolloClientUtils {
  static apolloOptionsFactory(httpLink: HttpLink) {
    return {
      cache: new InMemoryCache(),
      link: httpLink.create({uri: environment.graphQLApiEndPoint}),
    };
  }
}
