import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from '../nx-welcome/nx-welcome.component';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';

import {
  ContentAModule,
  ContentAStoreModule,
} from '@stackblitz-nx-angular/content-a';
import { FakeBackendModule } from '@stackblitz-nx-angular/fake-backend';
import { environment } from '../environments/environment';

const matModules = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatSidenavModule,
  MatTooltipModule,
];

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    matModules,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    ContentAModule,
    ContentAStoreModule,
    FakeBackendModule,
  ],
  providers: [
    { provide: 'BACKEND_BASE_URL', useValue: environment.backendBaseUrl },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
