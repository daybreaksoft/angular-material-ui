import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dbs-table-container',
  templateUrl: './table-container.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableContainerComponent implements OnInit {

  @Input() name: string;
  @Input() isLoadingResults = false;

  @ViewChild('filter') filter: ElementRef;
  @Output() filterChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {

  }
}
