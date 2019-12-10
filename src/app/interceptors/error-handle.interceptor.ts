import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { InfoDialogService } from '../services/info-dialog.service';
import { InfoDialogData } from '../models/info-dialog-data.model';
import { LabelConstants } from '../constants/label.constants';

@Injectable()
export class ErrorHandleInterceptor implements HttpInterceptor {
  constructor(
    private readonly infoDialogService: InfoDialogService,
  ) {
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(errorResponse => {
        const header = LabelConstants.SOMETHING_WENT_WRONG;
        const defaultMessage = errorResponse.message;
        const customMessages = this.getCustomErrorMessages(errorResponse);
        const messages = customMessages.length
          ? customMessages
          : [defaultMessage];

        this.infoDialogService.open(new InfoDialogData(header, messages));

        return throwError(errorResponse);
      }),
    );
  }

  getCustomErrorMessages(errorResponse: any): string[] {
    const customError = errorResponse.error.message;

    const isString = typeof customError === 'string';
    const isArray = customError instanceof Array;

    return isString && [customError]
      || isArray && customError
      || [];
  }
}
