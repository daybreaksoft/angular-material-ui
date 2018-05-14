import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';
import { PageHeaderModule } from '../page-header/page-header.module';
import { PageContainerComponent } from './page-container.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatIconModule,
        BreadcrumbsModule,
        PageHeaderModule
    ],
    declarations: [PageContainerComponent],
    exports: [PageContainerComponent]
})
export class PageContainerModule { }
