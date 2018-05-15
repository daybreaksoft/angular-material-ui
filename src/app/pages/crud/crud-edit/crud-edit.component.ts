import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { ROUTE_TRANSITION } from '../../../app.animation';

@Component({
    selector: 'dbs-crud-edit',
    templateUrl: './crud-edit.component.html',
    animations: [...ROUTE_TRANSITION],
    host: { '[@routeTransition]': '' }
})
export class CrudEditComponent implements OnInit {

    pageContainerOptions = { pageName: 'init' };
    _message: string;
    @Input() message: string;
    loading = false;

    constructor(private cd: ChangeDetectorRef) { }

    ngOnInit() {
        this.message = 'init';
    }

    test() {
        console.log('test()');
        this.message = 'trigger by button';
        this.loading = true;

        this.pageContainerOptions = Object.assign({}, this.pageContainerOptions, { pageName: 'test' });

        setTimeout(() => {
            this.test1();
        }, 2000);
    }

    test1() {
        console.log('test1()');
        this.message = 'trigger by button1';
        this.loading = false;
        this.pageContainerOptions = Object.assign({}, this.pageContainerOptions, { pageName: 'test1' });

        //this.cd.markForCheck();
    }

    // ngDoCheck() {
    //     console.log('111');
    //     if (this._message !== this.message) {
    //         console.log('222');
    //         this._message = this.message;
    //         this.cd.markForCheck();
    //     }
    // }
}
