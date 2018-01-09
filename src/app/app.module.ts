import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTES_PROVIDER } from './app.routes';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TeamComponent } from './landing/team/team.component';
import { ServicesComponent } from './landing/services/services.component';
import { HeaderComponent } from './landing/header/header.component';
import { FooterComponent } from './landing/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavigationComponent,
    TeamComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES_PROVIDER
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
