import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { InfoDialogData } from '../../models/info-dialog-data.model';
import { LabelConstants } from '../../constants/label.constants';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss'],
})
export class InfoDialogComponent {
  readonly LabelConstants = LabelConstants;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    readonly infoDialogData: InfoDialogData,
  ) {
  }
}
