import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

@Injectable()
export class DialogService {
  constructor(
    private dialog: MatDialog,
  ) {
  }

  public open<AfterClosedOutput>(component: any, data?: any): Observable<AfterClosedOutput> {
    return this.dialog.open(component, data).afterClosed();
  }
}
