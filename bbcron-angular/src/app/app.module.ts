import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Importamos las rutas....
import {APP_ROUTING} from './app.routes';

//Servicios
import {LoginService} from './services/login.service';
import {CronJobService} from './services/cronjob.service';


//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CronjobsComponent } from './components/cronjobs/cronjobs.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SchedulesComponent,
    HomeComponent,
    NotFoundComponent,
    CronjobsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
//Es necesario importar las Rutas
    APP_ROUTING
  ],
  providers: [
    LoginService,
    CronJobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
