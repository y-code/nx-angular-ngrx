import { Route } from '@angular/router';
import { ContentAComponent } from 'libs/content-a/src/lib/content-a/content-a.component';
import { NxWelcomeComponent } from '../nx-welcome/nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    title: 'home.title',
    component: NxWelcomeComponent,
  },
  {
    path: 'content-a',
    title: 'contentA.title',
    component: ContentAComponent,
  },
];
