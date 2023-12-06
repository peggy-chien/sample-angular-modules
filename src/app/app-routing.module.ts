import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'ele', loadChildren: () => import('./components/main-frame/routes') },
  { path: '', redirectTo: 'ele', pathMatch: 'full' },
  { path: 'page-not-found', component: PageNotFoundComponent }
];
