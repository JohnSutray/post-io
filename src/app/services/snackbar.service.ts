import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class SnackbarService {
  constructor(
    private snackBarRef: MatSnackBar,
  ) {
  }

  public open(message: string, duration = 3000, cssClass: string) {
    return this.snackBarRef.open(message, null, {
      duration,
      panelClass: cssClass,
    });
  }
}
