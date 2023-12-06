import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'ele', loadChildren: () => import('./components/main-frame/routes') },
  { path: '', redirectTo: 'ele', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
