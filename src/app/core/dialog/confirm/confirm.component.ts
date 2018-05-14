import { Component, Inject, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'dbs-dialog-confirm',
    templateUrl: 'confirm.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDialog {

    constructor(public dialogRef: MatDialogRef<ConfirmDialog>, @Inject(MAT_DIALOG_DATA) public data: any) { }

    noClick(): void {
        this.dialogRef.close(false);
    }

    yesClick(): void {
        this.dialogRef.close(true);
    }
}