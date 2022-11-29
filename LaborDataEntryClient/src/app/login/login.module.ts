import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { Token } from '../common/Common.Security';
import { MyAuthGuard } from '../common/Common.Authguard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers : [
    {provide : MyAuthGuard},
    {provide : Token},
    {provide: HTTP_INTERCEPTORS, useClass: MyAuthGuard , multi:true}
  ]
})
export class LoginModule { }
