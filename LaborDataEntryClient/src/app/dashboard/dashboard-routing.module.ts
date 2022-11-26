import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from '../country/country.component';
import { DistrictComponent } from '../district/district.component';
import { HomeComponent } from '../home/home.component';
import { LaborComponent } from '../labor/labor.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  // { path: '', component: CountryComponent },
  // { path: 'Login', component: LoginComponent },
  // { path: 'Home', component: HomeComponent },
  // { path: 'Country', component: CountryComponent },
  // { path: 'District', component: DistrictComponent },
  // { path: 'Labor', component: LaborComponent },
  {
    path: '',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'Home',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'Login',
    loadChildren: () =>
      import('../login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'Country',
    loadChildren: () =>
      import('../country/country.module').then((m) => m.CountryModule),
  },
  {
    path: 'District',
    loadChildren: () =>
      import('../district/district.module').then((m) => m.DistrictModule),
  },
  {
    path: 'Labor',
    loadChildren: () =>
      import('../labor/labor.module').then((m) => m.LaborModule),
  },
  {
    path: 'Report',
    loadChildren: () =>
      import('../report/report.module').then((m) => m.ReportModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
