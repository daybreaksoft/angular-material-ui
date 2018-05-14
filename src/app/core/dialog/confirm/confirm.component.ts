import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'vr-dialog-confirm',
    templateUrl: 'confirm.component.html',
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