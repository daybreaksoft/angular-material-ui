import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dbs-quickpanel',
  templateUrl: './quickpanel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuickpanelComponent implements OnInit {

  today: Date;

  constructor() { }

  ngOnInit() {
    this.today = new Date();
  }

}
