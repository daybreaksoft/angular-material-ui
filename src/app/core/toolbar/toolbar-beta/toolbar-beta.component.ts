import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { DefaultLayoutService, LayoutOptions } from '../../layout/layout.settings';

@Component({
  selector: 'dbs-toolbar-beta',
  templateUrl: './toolbar-beta.component.html',
  styleUrls: ['./toolbar-beta.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarBetaComponent implements OnInit {

  @Input() quickpanelOpen: boolean;

  @Output() toggledSidenav = new EventEmitter();
  @Output() toggledQuickpanel = new EventEmitter();

  options: LayoutOptions;

  constructor(layout: DefaultLayoutService) {
    this.options = layout.options;
  }

  ngOnInit() { }

  toggleSidenav() {
    this.toggledSidenav.emit();
  }

  toggleQuickpanel() {
    this.toggledQuickpanel.emit();
  }
}
