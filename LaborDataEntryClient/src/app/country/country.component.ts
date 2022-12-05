import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { countrydata } from './country.model';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  //hide
  p: number = 1;
  showadd!: boolean;
  showupdate!: boolean;
  countrymodelobj:countrydata=new countrydata
  formValue!: FormGroup
  allcountrydata:Array<countrydata>= new Array<countrydata>;
  constructor(private formBuilder: FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      Name:  ['',Validators.required],
      Code: ['',Validators.required],
      IsActive: ['',Validators.required],
    }),
    this.getdata();
    console.log(countrydata);
  }
  //to hide on add
  add() {
    this.showadd = true;
    this.showupdate = false;
  }
  //to hide on edit button
  edit(data:any) {
    this.showadd = false;
    this.showupdate = true;
    this.countrymodelobj.Id = data.Id;
  this.formValue.controls['Name'].setValue(data.Name)
  this.formValue.controls['Code'].setValue(data.Code)
  this.formValue.controls['IsActive'].setValue(data.IsActive)

  }
//update on edit
update(){
  this.countrymodelobj.Name = this.formValue.value.Name;
  this.countrymodelobj.Code= this.formValue.value.Code;
  this.countrymodelobj.IsActive=this.formValue.value.IsActive;

  this.api.updatecountry(this.countrymodelobj,this.countrymodelobj.Id).subscribe(res=>{
    this.formValue.reset();
    this.getdata();
   alert("Record updated sucessfully");
  },
  err=>{
alert("something went wrong")
  })
    }
  addcountry(){
    this.countrymodelobj.Name = this.formValue.value.Name;
    this.countrymodelobj.Code= this.formValue.value.Code;
    this.countrymodelobj.IsActive=this.formValue.value.IsActive;

    this.api.postcountry(this.countrymodelobj).subscribe(res=>{
     // console.log(res)
      this.formValue.reset()
  this.getdata();
     alert("Record added sucessfully");
    },
err=>{
  alert("something went wrong!!!");
  console.log(err);
})
  }

//getdata to render 
getdata(){
  this.api.getcountry()
  .subscribe(res=>{
    this.allcountrydata=res;
  })
}

//delete

deletecoun(data:any){
  if(confirm('Are you sure to delete?'))
  this.api.deletecountry(data.Id)
  .subscribe(res=>{
alert("Record deleted successfully");
this.getdata();
  })
}

}
