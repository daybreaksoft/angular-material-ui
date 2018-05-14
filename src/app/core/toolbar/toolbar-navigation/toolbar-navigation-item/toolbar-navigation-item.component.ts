import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SidenavItem } from '../../../sidenav/sidenav-item/sidenav-item.model';

@Component({
  selector: 'dbs-toolbar-navigation-item',
  templateUrl: './toolbar-navigation-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarNavigationItemComponent implements OnInit {

  @Input('item') item: SidenavItem;
  @Input('currentlyOpen') currentlyOpen: SidenavItem[] = [];

  constructor() { }

  ngOnInit() {
  }
}
