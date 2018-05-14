import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatMenuModule } from '@angular/material';
import { PageContainerModule } from '../../core/page-container/page-container.module';
import { TableContainerModule } from '../../core/table-container/table-container.module';
import { CrudListComponent } from './crud-list/crud-list.component';
import { CrudEditComponent } from './crud-edit/crud-edit.component';
import { CrudRoutingModule } from './crud.routing';
import { CrudDataService } from './crud-data.service';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatMenuModule,

        PageContainerModule,
        TableContainerModule,

        CrudRoutingModule,
    ],
    declarations: [
        CrudListComponent,
        CrudEditComponent
    ],
    providers: [
        CrudDataService
    ]
})
export class CrudModule { }
