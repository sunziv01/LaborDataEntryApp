import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { countrydata } from '../country/country.model';
import { districtdata } from '../district/district.model';
import { ApiService } from '../shared/api.service';
import { labordata } from './labor.model';
@Component({
  selector: 'app-labor',
  templateUrl: './labor.component.html',
  styleUrls: ['./labor.component.css']
})
export class LaborComponent implements OnInit {
  //hide
  showadd!: boolean;
  showupdate!: boolean;
  labormodelobj:labordata=new labordata
  formValue!: FormGroup
  alllabordata:any;
  
  countrymodelobj:countrydata=new countrydata;
  allcountrydata:Array<countrydata> = new Array<countrydata>;
  countryIdByClick:number=0;

  districtmodelobj:districtdata= new districtdata;
  alldistrictdata:Array<districtdata>=new Array <districtdata>;  //all district no filter by Country Id
  alldistrictdatabyid:Array<countrydata>= new Array<countrydata>; //filtered district by CouontryId
  constructor(private formBuilder: FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      LaborName:  ['',Validators.required],
      CountryId:  ['',Validators.required],
      DistrictId: ['',Validators.required],
      TaskDetail: ['',Validators.required],
      WorkHours: ['',Validators.required],
    })
    this.getdata();
    this.getallcountrydata(); //all country
    // this.id=1003;
      this.getalldistrictdata();  //all district no filter by country id
    
    // this.getalldistrictdatabyid(this.selectCountryId);
    
    console.log(this.allcountrydata);
    console.log(this.alldistrictdata);
    console.log(this.alldistrictdatabyid);
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
    this.labormodelobj.Id = data.Id;
  this.formValue.controls['LaborName'].setValue(data.LaborName)
  this.formValue.controls['CountryId'].setValue(data.CountryId)
  this.formValue.controls['DistrictId'].setValue(data.DistrictId)
  this.formValue.controls['TaskDetail'].setValue(data.TaskDetail)
  this.formValue.controls['WorkHours'].setValue(data.WorkHours)

  }
//update on edit
update(){
  this.labormodelobj.LaborName = this.formValue.value.LaborName;
  this.labormodelobj.CountryId= Number(this.formValue.value.CountryId);
  this.labormodelobj.DistrictId=Number(this.formValue.value.DistrictId);
  this.labormodelobj.TaskDetail  =this.formValue.value.TaskDetail;
  this.labormodelobj.WorkHours  =this.formValue.value.WorkHours;

  this.api.updatelabor(this.labormodelobj,this.labormodelobj.Id).subscribe(res=>{
    this.formValue.reset();
    this.getdata();
   alert("Record updated sucessfully");
  },
  err=>{
alert("something went wrong")
  })
    }
  addlabor(){
    this.labormodelobj.LaborName = this.formValue.value.LaborName;
    this.labormodelobj.CountryId= Number(this.formValue.value.CountryId);
    this.labormodelobj.DistrictId=Number(this.formValue.value.DistrictId);
    this.labormodelobj.TaskDetail  =this.formValue.value.TaskDetail;
    this.labormodelobj.WorkHours  =this.formValue.value.WorkHours;

    this.api.postlabor(this.labormodelobj).subscribe(res=>{
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
  this.api.getlabor()
  .subscribe(res=>{
    this.alllabordata=res;
  })
}

//delete

deletelab(data:any){
  if(confirm('Are you sure to delete?'))
  this.api.deletelabor(data.Id)
  .subscribe(res=>{
alert("Record deleted successfully");
this.getdata();
  })
}
// getalldistrictdata(){
//   this.api.getdistrict()
//   .subscribe(res=>{
//     this.alldistrictdata=res;
//   })
// }

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
  this.api.getdistrictbyid(data.Id)
  .subscribe(res=>{
    this.alldistrictdatabyid=res;
  })
}

selectCountryId(event:any){
    this.selectCountryId=event.target.value;
    this.getalldistrictdatabyid(this.selectCountryId);
  }

}
