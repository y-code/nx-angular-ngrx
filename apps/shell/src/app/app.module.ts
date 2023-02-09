import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from '../nx-welcome/nx-welcome.component';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContentAModule } from '@stackblitz-nx-angular/content-a';

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
    ContentAModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
