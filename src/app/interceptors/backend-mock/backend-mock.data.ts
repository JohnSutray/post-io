import { environment } from '../../../environments/environment';

export const backendMockData = [
  {
    url: `${environment.apiEndpoint}/users`,
    method: 'GET',
    data: {
      some: 10,
    },
  },
];
