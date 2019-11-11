import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { backendMockData } from './backend-mock.data';

export class BackendMockInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(new HttpResponse({
      status: 200,
      body: backendMockData.find(data => data.url === req.url && data.method === req.method).data,
    }));
  }
}
