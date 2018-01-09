import {Routes,RouterModule} from '@angular/router';
import {LandingComponent} from './landing/landing.component';

const routes:Routes = [
    {
        path:'',component:LandingComponent
    }
]

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(routes);