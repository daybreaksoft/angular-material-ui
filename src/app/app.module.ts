import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AgmCoreModule } from '@agm/core';
import { RouteHandlerModule } from './core/route-handler/route-handler.module';
import { HttpClientModule } from '@angular/common/http';
import { DefaultLayoutService } from './core/layout/layout.settings';
import { AppLayoutService } from './app.layout.service';
import { AuthGuard } from './app.auth-guard.service';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'elastic-ui' }),
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
    EffectsModule.forRoot([]),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey
    }),
    AppRoutingModule,
    CoreModule,
    PagesModule,
    RouteHandlerModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    { provide: DefaultLayoutService, useClass: AppLayoutService }
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
