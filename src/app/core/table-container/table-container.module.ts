import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { TableContainerComponent } from './table-container.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    TableContainerComponent
  ],
  exports: [
    TableContainerComponent
  ]
})
export class TableContainerModule { }
