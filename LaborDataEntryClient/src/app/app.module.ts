import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CountryComponent } from './country/country.component';
import { DistrictComponent } from './district/district.component';
import { LaborComponent } from './labor/labor.component';

@NgModule({
  declarations: [
    // AppComponent,
    // DashboardComponent,
    // HomeComponent,
    // LoginComponent,
    // CountryComponent,
    // DistrictComponent,
    // LaborComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  // bootstrap: [DashboardComponent]
})
export class AppModule { }
