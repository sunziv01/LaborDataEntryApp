import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { DistrictComponent } from './district/district.component';
import { HomeComponent } from './home/home.component';
import { LaborComponent } from './labor/labor.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path:"", component:CountryComponent},
  // {path:'Login' , component: LoginComponent},
  // {path:'Home' , component: HomeComponent},
  // {path:'Country' , component: CountryComponent},
  // {path:'District' , component: DistrictComponent},
  // {path:'Labor' , component: LaborComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
