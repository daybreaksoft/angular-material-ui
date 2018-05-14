import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { SidenavItem } from './sidenav-item/sidenav-item.model';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../reducers/index';
import { Store } from '@ngrx/store';
import { DefaultLayoutService, LayoutOptions } from '../layout/layout.settings';

@Component({
  selector: 'vr-sidenav',
  templateUrl: './sidenav.component.html'
})
export class SidenavComponent implements OnInit, OnDestroy {

  @Input('layout') layout: string; // Layout
  @Input('collapsed') collapsed: boolean;
  @Output('toggledSidenavCollapse') toggledSidenavCollapse = new EventEmitter();

  sidenavItems$: Observable<SidenavItem[]>;
  currentlyOpen$: Observable<SidenavItem[]>;
  options: LayoutOptions;

  constructor(
    layout: DefaultLayoutService,
    private store: Store<fromRoot.State>
  ) {
    this.options = layout.options;
  }

  ngOnInit() {
    this.sidenavItems$ = this.store.select(fromRoot.getSidenavItems);
    this.currentlyOpen$ = this.store.select(fromRoot.getSidenavCurrentlyOpen);
  }

  toggleSidenavCollapse() {
    this.toggledSidenavCollapse.emit();
  }

  ngOnDestroy() {
  }
}
