import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'vr-table-container',
  templateUrl: './table-container.component.html',
  encapsulation: ViewEncapsulation.None
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
