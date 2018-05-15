import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dbs-project-widget',
  templateUrl: './project-widget.component.html',
  styleUrls: ['./project-widget.component.scss']
})
export class ProjectWidgetComponent implements OnInit {

  @Input() smallView: boolean;

  constructor() { }

  ngOnInit() {
  }

}
