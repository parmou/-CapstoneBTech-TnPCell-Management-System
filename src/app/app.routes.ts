import {Routes,RouterModule} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {StudentloginComponent} from './studentlogin/studentlogin.component';
import { SindexComponent}  from './studentlogin/sindex/sindex.component'};

const routes:Routes = [
    {
        path:'',component:LandingComponent
    },
    {
    	path:'studentlogin',
    	component: StudentloginComponent
    }
]

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(routes);