import {Routes,RouterModule} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {StudentloginComponent} from './studentlogin/studentlogin.component';
import { SindexComponent}  from './studentlogin/sindex/sindex.component';
import {StudentprofileComponent} from './studentlogin/studentprofile/studentprofile.component'

const routes:Routes = [
    {
        path:'',component:LandingComponent
    },
    {
    	path:'profile',
    	component: StudentprofileComponent
    },
    {	
    	path:'registration',
    	component: SindexComponent;

    },
    {
    	path:'studentlogin',
    	component: StudentloginComponent
    }
]

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(routes);