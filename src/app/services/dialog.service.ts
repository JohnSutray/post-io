import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(
    private readonly dialog: MatDialog,
  ) {
  }

  open<TAfterClosed>(component: any, data?: any): Observable<TAfterClosed> {
    return this.dialog
      .open(component, { data })
      .afterClosed();
  }
}
