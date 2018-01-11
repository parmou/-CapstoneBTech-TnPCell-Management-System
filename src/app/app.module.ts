import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTES_PROVIDER } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TeamComponent } from './landing/team/team.component';
import { ServicesComponent } from './landing/services/services.component';
import { HeaderComponent } from './landing/header/header.component';
import { FooterComponent } from './landing/footer/footer.component';

import { StudentloginComponent } from './landing/user/studentlogin/studentlogin.component';
import { SindexComponent } from './landing/user/studentlogin/sindex/sindex.component';


import { StudentprofileComponent } from './landing/user/studentprofile/studentprofile.component';
import { StudentnavigationComponent } from './landing/user/studentlogin/studentnavigation/studentnavigation.component';


import { LoginComponent } from './landing/login/login.component';
import { ErrorComponent } from './error/error.component';
import { SettingsComponent } from './landing/user/settings/settings.component';

import { RegisterformComponent } from './landing/user/studentlogin/registerform/registerform.component';
import { PersonaldetailComponent } from './landing/user/studentlogin/registerform/personaldetail/personaldetail.component';
import { AcademicdetailComponent } from './landing/user/studentlogin/registerform/academicdetail/academicdetail.component';
import { TrainingdetailComponent } from './landing/user/studentlogin/registerform/trainingdetail/trainingdetail.component';

import { AboutComponent } from './landing/about/about.component';






@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavigationComponent,
    TeamComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    StudentloginComponent,
    SindexComponent,
    StudentprofileComponent,
    StudentnavigationComponent,
    LoginComponent,


    ErrorComponent,

    SettingsComponent,


    RegisterformComponent,

    PersonaldetailComponent,

    AcademicdetailComponent,

    TrainingdetailComponent,


    AboutComponent,

    

   

    
    

    

  ],
  imports: [
    BrowserModule,
    APP_ROUTES_PROVIDER,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
