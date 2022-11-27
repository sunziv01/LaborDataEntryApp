import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { countrydata } from '../country/country.model';
import { districtdata } from '../district/district.model';
import { ApiService } from '../shared/api.service';
import { reportdata } from './report.model';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  //hide
  showadd!: boolean;
  showupdate!: boolean;
  reportmodelobj:reportdata=new reportdata
  formValue!: FormGroup
  alllabordata:any;
  
  countrymodelobj:countrydata=new countrydata;
  allcountrydata:Array<countrydata> = new Array<countrydata>;

  districtmodelobj:districtdata= new districtdata;
  alldistrictdata:Array<districtdata>=new Array <districtdata>;  //all district no filter by Country Id
  alldistrictdatabyid:Array<countrydata>= new Array<countrydata>; //filtered district by CouontryId
  constructor(private formBuilder: FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      CountryId:  ['',Validators.required],
      DistrictId: ['',Validators.required],
      LaborRatePerHour: ['',Validators.required],
      WorkHours: ['',Validators.required],
      TotalWorkDoneInHours: ['',Validators.required],
      TotalMoneySpent: ['',Validators.required],
    })
    this.getallcountrydata(); //all country
    // this.getalldistrictdata();  //all district no filter by country id
    // this.getalldistrictdatabyid(this.selectCountryId);

  }
  

getallcountrydata(){
  this.api.getcountry()
  .subscribe(res=>{
    this.allcountrydata=res;
  })
}
getalldistrictdata(){
  this.api.getdistrict()
  .subscribe(res=>{
    this.alldistrictdata=res;
  })
}

getalldistrictdatabyid(data:any){
  this.api.getdistrictbyid(data)
  .subscribe(res=>{
    this.alldistrictdatabyid=res;
  })
}

selectCountryId(event:any){
    this.selectCountryId=event.target.value;
    this.getalldistrictdatabyid(this.selectCountryId);
  }

  calculateTotalWorkDoneInHours(data:number){
    
  }

  calculateTotalMoneySpent(data:number){
    
  }

  print(){

  }
}
