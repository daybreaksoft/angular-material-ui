import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AlertDialog } from '../dialog/alert/alert.component';
import { ConfirmDialog } from '../dialog/confirm/confirm.component';

@Injectable()
export class MessageService {

    constructor(private dialog: MatDialog) {

    }

    warn(message: string): MatDialogRef<AlertDialog> {
        let dialogRef = this.dialog.open(AlertDialog, {
            minWidth: '300px',
            data: { title: 'Warning', message: message }
        });

        return dialogRef;
    }

    confirm(message: string): MatDialogRef<ConfirmDialog> {
        let dialogRef = this.dialog.open(ConfirmDialog, {
            minWidth: '300px',
            data: { title: 'Confirmation', message: message }
        });

        return dialogRef;
    }
}