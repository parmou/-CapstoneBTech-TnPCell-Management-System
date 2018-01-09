import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTES_PROVIDER } from './app.routes';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TeamComponent } from './landing/team/team.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { SindexComponent } from './studentlogin/sindex/sindex.component';
import { SidelistComponent } from './studentlogin/sidelist/sidelist.component';
import { StudentprofileComponent } from './studentlogin/studentprofile/studentprofile.component';
import { StudentnavigationComponent } from './studentlogin/studentnavigation/studentnavigation.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavigationComponent,
    TeamComponent,
    StudentloginComponent,
    SindexComponent,
    SidelistComponent,
    StudentprofileComponent,
    StudentnavigationComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES_PROVIDER
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
