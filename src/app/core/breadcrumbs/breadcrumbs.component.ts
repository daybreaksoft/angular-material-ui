import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dbs-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent implements OnInit {

  @Input() currentPage: string;
  @Input() names: string[] = [];
  @Input() routes: string[] = [];
  @Input() header;

  constructor() { }

  ngOnInit() {
  }

}
