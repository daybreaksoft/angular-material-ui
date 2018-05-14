import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'dbs-page-container',
    templateUrl: './page-container.component.html'
})
export class PageContainerComponent implements OnInit {

    _pageName: string;

    @Input()
    set pageName(val) {
        if (this._pageName !== val) {
            console.log('changed');
            this.cd.markForCheck();
        }
        this._pageName = val;
    }

    get pageName() {
        return this._pageName;
    }


    constructor(private cd: ChangeDetectorRef) {
    }

    ngOnInit() {

    }
}