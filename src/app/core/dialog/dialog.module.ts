import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { AlertDialog } from './alert/alert.component';
import { ConfirmDialog } from './confirm/confirm.component';

@NgModule({
    imports: [
        CommonModule,

        MatButtonModule,
        MatDialogModule
    ],
    entryComponents: [
        AlertDialog,
        ConfirmDialog
    ],
    declarations: [
        AlertDialog,
        ConfirmDialog
    ],
    exports: [
        AlertDialog,
        ConfirmDialog
    ]
})
export class DialogModule { }
