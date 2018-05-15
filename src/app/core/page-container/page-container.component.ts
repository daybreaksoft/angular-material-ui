import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'dbs-page-container',
    templateUrl: './page-container.component.html'
})
export class PageContainerComponent implements OnInit {

    @Input() pageName: string;

    constructor() {
    }

    ngOnInit() {

    }
}