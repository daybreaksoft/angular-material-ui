import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ROUTE_TRANSITION } from '../../../app.animation';
import { CrudDataService, GithubIssue, GithubIssueItem } from '../crud-data.service';
import { PagingOptions } from '../crud.options';
import { MessageService } from '../../../core/utils/message.service';
import { ConfirmDialog } from '../../../core/dialog/confirm/confirm.component';

@Component({
    selector: 'dbs-crud-list',
    templateUrl: './crud-list.component.html',
    animations: [...ROUTE_TRANSITION],
    host: { '[@routeTransition]': '' }
})
export class CrudListComponent implements OnInit, AfterViewInit {

    issues: GithubIssueItem[];

    isLoadingResults = false;
    pagingOptions = PagingOptions;
    displayedColumns = ['number', 'title', 'state', 'created_at', 'actions'];
    dataSource = new MatTableDataSource<GithubIssueItem>([]);

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private dataService: CrudDataService, private message: MessageService, private dialog: MatDialog) { }

    ngOnInit() {
        this.getAllIssues();
    }

    ngAfterViewInit() {
    }

    delete(issue: GithubIssueItem) {

        // let dialogRef = this.dialog.open(ConfirmDialog, {
        //     height: '400px',
        //     width: '600px',
        //     data: { title: 'test', message: 'asdfasdfasdf' }
        // });

        // dialogRef.afterClosed().subscribe(result => {
        //     if (result) {
        //         this.executingDelete(issue);


        //     }
        // });
        // this.message.warn('This is a warning message').afterClosed().subscribe(result => {
        // });
        this.message.confirm('Are you sure to continue?').afterClosed().subscribe(result => {
            if (result) {
                this.executingDelete(issue);
            }
        });
    }

    executingDelete(issue: GithubIssueItem) {

        this.showLoadingMask();

        this.dataService.delete(issue)
            .subscribe(
                () => {
                    this.issues.splice(this.issues.indexOf(issue), 1);
                    this.bindDataTable();
                },
                err => this.hideLoadingMask(),
                () => this.hideLoadingMask()
            );
    }

    getAllIssues() {

        this.showLoadingMask();

        // Get github issues
        this.dataService.getAll().subscribe(data => {
            this.issues = data.items;
            this.bindDataTable();
        },
            err => this.hideLoadingMask(),
            () => this.hideLoadingMask()
        )
    }

    showLoadingMask() {
        this.isLoadingResults = true;
    }

    hideLoadingMask() {
        this.isLoadingResults = false
    }

    bindDataTable() {
        this.dataSource.data = this.issues;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
}
