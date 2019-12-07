import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorizeService } from '../services/authorize.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EAppState } from '../enums/navigation.enum';

@Injectable()
export class AuthorizeInterceptor implements HttpInterceptor {
  constructor(
    private readonly authorizeService: AuthorizeService,
    private readonly router: Router,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newRequest = this.authorizeService.isSigned
      ? req.clone({ setHeaders: { token: this.authorizeService.token }})
      : req;

    return next.handle(newRequest).pipe(
      tap(),
    );
  }

  checkSignResult(response: HttpResponse<any>) {
    if (response.status === 401) {
      this.authorizeService.signOut();
      this.router.navigate([EAppState.SIGN]);
    }
  }

}
