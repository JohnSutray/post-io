import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { LocalStorageConstants } from '../constants/local-storage.constants';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IRootState } from '../store/state/root.state';
import { ERootActions, RootActions } from '../store/actions/root.actions';
import { EAuthStatus } from '../enums/auth-status.enum';
import { EAuthHeaders } from '../enums/headers.enum';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private localStorageService: LocalStorageService,
    private store: Store<IRootState>,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = this.localStorageService.get<string>(LocalStorageConstants.TOKEN);

    const updatedRequest = jwt
      ? req.clone(this.getAuthorizationUpdate(jwt))
      : req;

    return next.handle(updatedRequest).pipe(
      tap(response => response instanceof HttpResponse && this.tryRefreshToken(response)),
    );
  }

  getAuthorizationUpdate(jwt: string) {
    return {
      setHeaders: {
        Authorization: `Bearer ${jwt}`,
      },
    };
  }

  tryRefreshToken(response: HttpResponse<any>) {
    console.log(response.headers.keys());
    // const authStatus: EAuthStatus = response.headers[EAuthHeaders.AUTH_STATUS];
    //
    // switch (authStatus) {
    //   case EAuthStatus.NO_AUTH:
    //     break;
    //   case EAuthStatus.FAILED:
    //     this.store.dispatch(RootActions[ERootActions.SignOut]());
    //     break;
    //   case EAuthStatus.PASSED:
    //     this.localStorageService.put(LocalStorageConstants.TOKEN, response.headers[EAuthHeaders.REFRESH_TOKEN]);
    //     break;
    // }
  }
}
