import {Routes,RouterModule} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {StudentloginComponent} from './landing/user/studentlogin/studentlogin.component';
import { SindexComponent}  from './landing/user/studentlogin/sindex/sindex.component';
import {StudentprofileComponent} from './landing/user/studentprofile/studentprofile.component'
import { ErrorComponent } from './error/error.component';
import { SettingsComponent } from './landing/user/settings/settings.component';
import { HomeComponent } from './landing/user/home/home.component' ;
import { TrainingComponent } from './landing/user/training/training.component';
import { CompanyHomeComponent } from './landing/company/company-home/company-home.component';
import { EventComponent } from './landing/coordinator/dashboard/event/event.component';
import { LoginComponent } from './landing/landing-components/login/login.component';
import { CompanyRegisterComponent} from './landing/company/company-register/company-register.component';
import { DashboardComponent } from './landing/coordinator/dashboard/dashboard.component';
import { TrainingDataComponent } from './landing/coordinator/dashboard/training-data/training-data.component';
import { SearchFormComponent } from './landing/coordinator/dashboard/search-form/search-form.component'

const routes:Routes = [
    {
        path:'',
        component: LandingComponent
    },
    {
    	path:'student/profile',
    	component: StudentprofileComponent
    },
    {
    	path:'student/registration',
    	component: SindexComponent

    },
    {
    	path:'student/home',
    	component: HomeComponent
    },
    {
        path:'student/settings',
        component: SettingsComponent
    },
    {
        path:'student/training',
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
      path:'login',
      component: LoginComponent
    },
    {
        path:'coordinator',
        component: DashboardComponent,
        children: [
            {
                path: "event",
                component: EventComponent
            },
            {
                path: "training-data",
                component: TrainingDataComponent
            },
            {
                path: "search-form",
                component: SearchFormComponent
            }
        ]
    },
    {
        path:'**',
        redirectTo: 'error'
    }


]

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(routes);
