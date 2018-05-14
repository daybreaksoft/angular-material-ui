import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/index';
import * as layout from '../layout/shared/layout.action';
import { MatRadioChange, MatSelectChange } from '@angular/material';
import 'rxjs/add/operator/takeUntil';
import { componentDestroyed } from '../utils/component-destroyed';

@Component({
  selector: 'dbs-settings',
  templateUrl: './settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit, OnDestroy {

  cardElevationClass: string;

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.store.select(fromRoot.getCardElevation).takeUntil(componentDestroyed(this)).subscribe((elevation) => {
      this.cardElevationClass = elevation;
    });
  }

  setLayout(radioEvent: MatRadioChange) {
    this.store.dispatch(new layout.SelectLayoutAction(radioEvent.value));
  }

  setCardElevation(selectEvent: MatSelectChange) {
    this.store.dispatch(new layout.SetCardElevationAction(selectEvent.value));
  }

  ngOnDestroy() { }
}
