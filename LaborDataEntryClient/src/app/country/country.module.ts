import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {AccordionModule} from 'primeng/accordion';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MyAuthGuard } from '../common/Common.Authguard';
import { MyJwtInterceptor } from '../common/Common.Interceptor';
import { Token } from '@angular/compiler';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    CountryComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    HttpClientModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ], providers: [
    {provide: MyAuthGuard},
    {provide: HTTP_INTERCEPTORS, useClass: MyJwtInterceptor , multi:true}
  ]
})
export class CountryModule { }
