import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vr-quickpanel',
  templateUrl: './quickpanel.component.html'
})
export class QuickpanelComponent implements OnInit {

  today: Date;

  constructor() { }

  ngOnInit() {
    this.today = new Date();
  }

}
