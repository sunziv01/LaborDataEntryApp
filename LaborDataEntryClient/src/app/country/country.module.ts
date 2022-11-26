import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { HttpClientModule } from '@angular/common/http';

import {AccordionModule} from 'primeng/accordion';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


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
    ReactiveFormsModule
  ], providers: [
  ]
})
export class CountryModule { }
