import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { DialogModule } from './dialog/dialog.module';
import { MediaReplayService } from './utils/media-replay.service';
import { MessageService } from './utils/message.service';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    DialogModule
  ],
  providers: [
    MediaReplayService,
    MessageService
  ]
})
export class CoreModule { }
