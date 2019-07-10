import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {SchedulesComponent} from './components/schedules/schedules.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {CronjobsComponent} from './components/cronjobs/cronjobs.component'


const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'schedules', component: SchedulesComponent },
  { path: 'error', component: NotFoundComponent },
  { path: 'cronjobs', component: CronjobsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
