import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LaborRoutingModule } from './labor-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LaborComponent } from './labor.component';


@NgModule({
  declarations: [
    LaborComponent
  ],
  imports: [
    CommonModule,
    LaborRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class LaborModule { }
