import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { countrydata } from '../country/country.model';
import { ApiService } from '../shared/api.service';
import { districtdata } from './district.model';
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  //hide
  p: number = 1;
  showadd!: boolean;
  showupdate!: boolean;
  districtmodelobj:districtdata=new districtdata;
  formValue: FormGroup;
  alldistrictdata:any;


  countrymodelobj:countrydata=new countrydata;
  allcountrydata:Array<countrydata> = new Array<countrydata>;

  constructor(private formBuilder: FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      CountryId:  ['',Validators.required],
      Code: ['',Validators.required],
      LaborRatePerHour: ['',Validators.required],
      IsActive: ['',Validators.required],
    })
    this.getdata();
    this.getallcountrydata();
    console.log(this.allcountrydata);
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
    this.districtmodelobj.Id = data.Id;
  this.formValue.controls['CountryId'].setValue(data.CountryId)
  this.formValue.controls['Code'].setValue(data.Code)
  this.formValue.controls['LaborRatePerHour'].setValue(data.LaborRatePerHour)
  this.formValue.controls['IsActive'].setValue(data.IsActive)

  }
//update on edit
update(){
  this.districtmodelobj.CountryId = Number(this.formValue.value.CountryId);
  this.districtmodelobj.Code= this.formValue.value.Code;
  this.districtmodelobj.LaborRatePerHour= this.formValue.value.LaborRatePerHour;
  this.districtmodelobj.IsActive=this.formValue.value.IsActive;

  this.api.updatedistrict(this.districtmodelobj,this.districtmodelobj.Id).subscribe(res=>{
    this.formValue.reset();
    this.getdata();
   alert("Record updated sucessfully");
  },
  err=>{
alert("something went wrong")
  })
    }
  adddistrict(){
    this.districtmodelobj.CountryId =Number(this.formValue.value.CountryId);
    this.districtmodelobj.Code= this.formValue.value.Code;
    this.districtmodelobj.LaborRatePerHour= this.formValue.value.LaborRatePerHour;
    this.districtmodelobj.IsActive=this.formValue.value.IsActive;

    this.api.postdistrict(this.districtmodelobj).subscribe(res=>{
     // console.log(res)
      this.formValue.reset()
  this.getdata();
     alert("Record added sucessfully");
    },
err=>{
  alert("something went wrong!!!");
})
}

//getdata to render 
getdata(){
  this.api.getdistrict()
  .subscribe(res=>{
    this.alldistrictdata=res;
  })
}

//delete

deletedist(data:any){
  if(confirm('Are you sure to delete?'))
  this.api.deletedistrict(data.Id)
  .subscribe(res=>{
alert("Record deleted successfully");
this.getdata();
  })
}

getallcountrydata(){
  this.api.getcountry()
  .subscribe(res=>{
    this.allcountrydata=res;
  })
}

}
