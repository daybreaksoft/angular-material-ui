import { RouterModule, Routes } from '@angular/router';
import { CrudListComponent } from './crud-list/crud-list.component';
import { CrudEditComponent } from './crud-edit/crud-edit.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'list',
        component: CrudListComponent
    },
    {
        path: 'edit',
        component: CrudEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrudRoutingModule { }
