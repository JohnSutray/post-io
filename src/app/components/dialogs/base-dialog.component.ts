import { MatDialogRef } from '@angular/material';

export class BaseDialogComponent<ComponentType, AfterClosedType> {
  constructor(
    protected dialogRef: MatDialogRef<ComponentType>,
  ) {
  }

  protected close(data?: AfterClosedType) {
    this.dialogRef.close(data);
  }
}
