import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from '../common/Common.Security';
import { User } from './login.model';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userObj:User = new User();
  formValue!: FormGroup

  constructor(public http:HttpClient,
    public tok:Token,
    public route:Router, private formBuilder: FormBuilder ){}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      Username:  ['',Validators.required],
      Password:  ['',Validators.required]
    })
  }
   
   Login(){
        this.http.post("https://localhost:7001/Security/CheckUser",this.userObj)
        .subscribe(res=>this.Success(res), res=>this.Error(res));
   }
   Success(res : any){
      this.tok.value=res.Value;
      this.route.navigate(['/Home']);
   }
   Error(res : any){
    console.log(res);
    alert("huh");
   }

}
