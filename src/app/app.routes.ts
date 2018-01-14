import {Routes,RouterModule} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {StudentloginComponent} from './landing/user/studentlogin/studentlogin.component';
import { SindexComponent}  from './landing/user/studentlogin/sindex/sindex.component';
import {StudentprofileComponent} from './landing/user/studentprofile/studentprofile.component'
import { Component } from '@angular/core/src/metadata/directives';
import { ErrorComponent } from './error/error.component';
import { SettingsComponent } from './landing/user/settings/settings.component';
import { HomeComponent } from './landing/user/home/home.component' ;
import { TrainingComponent } from './landing/user/training/training.component';
import { CompanyHomeComponent } from './landing/company/company-home/company-home.component';
import { EventComponent } from './landing/coordinator/dashboard/event/event.component';
import { CompanyRegisterComponent} from './landing/company/company-register/company-register.component';

const routes:Routes = [
    {
        path:'',component:LandingComponent
    },
    {
    	path:'user/profile',
    	component: StudentprofileComponent
    },
    {
    	path:'user/registration',
    	component: SindexComponent

    },
    {
    	path:'user/home',
    	component: HomeComponent
    },
    {
        path:'user/settings',
        component: SettingsComponent
    },
    {
        path:'user/training',
        component : TrainingComponent
    },
    {
        path:'company/home',
        component: CompanyHomeComponent
    },
    {
        path:'company/register',
        component: CompanyRegisterComponent
    },
    {
        path:'error',
        component: ErrorComponent
    },
    {
        path:'coordinator/event',
        component: EventComponent
    },
    {
        path:'**',
        redirectTo: 'error'
    }


]

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(routes);
