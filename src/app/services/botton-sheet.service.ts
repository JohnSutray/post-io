import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Injectable({
  providedIn: 'root'
})
export class BottomSheetService {
  constructor(
    private readonly bottomSheet: MatBottomSheet,
  ) {
  }

  open<TAfterClosed>(component: any, data: any): void {
    this.bottomSheet.open(component, { data });
  }
}
