import {Routes,RouterModule} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {StudentloginComponent} from './landing/user/studentlogin/studentlogin.component';
import { SindexComponent}  from './landing/user/studentlogin/sindex/sindex.component';
import {StudentprofileComponent} from './landing/user/studentlogin/studentprofile/studentprofile.component'
import { Component } from '@angular/core/src/metadata/directives';
import { ErrorComponent } from './error/error.component';
import { SettingsComponent } from './landing/user/settings/settings.component';

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
    	path:'user/studentlogin',
    	component: StudentloginComponent
    },
    {
        path:'error',
        component: ErrorComponent
    },
    {
        path:'user/settings',
        component: SettingsComponent
    }

]

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(routes);