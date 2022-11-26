import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map} from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }


  //create by post

  postcountry(data:any){
    return this._http.post<any>("https://localhost:7001/api/CountryWebAPI/",data)
    .pipe(map((res:any)=>{
      return res;
      }))
  }

//get

getcountry(){
  return this._http.get<any>("https://localhost:7001/api/CountryWebAPI/")
  .pipe(map((res:any)=>{
    return res;
    }))
}

//update


updatecountry(data:any, id:number){
  return this._http.put<any>("https://localhost:7001/api/CountryWebAPI/"+id,data)
  .pipe(map((res:any)=>{
    return res;
  })) 
}



//delete
deletecountry(id:number){
return this._http.delete<any>("https://localhost:7001/api/CountryWebAPI/"+id)
.pipe(map((res:any)=>{
  return res;
}))
}


//district

//create by post

postdistrict(data:any){
  return this._http.post<any>("https://localhost:7001/api/DistrictWebAPI/",data)
  .pipe(map((res:any)=>{
    return res;
    }))
}

//get

getdistrict(){
return this._http.get<any>("https://localhost:7001/api/DistrictWebAPI/")
.pipe(map((res:any)=>{
  return res;
  }))
}

//get district by country id

getdistrictbyid(id:number){
  return this._http.get<any>("https://localhost:7001/api/DistrictWebAPI/"+id)
  .pipe(map((res:any)=>{
    return res;
    }))
}
//update


updatedistrict(data:any, id:number){
return this._http.put<any>("https://localhost:7001/api/DistrictWebAPI/"+id,data)
.pipe(map((res:any)=>{
  return res;
})) 
}



//delete
deletedistrict(id:number){
return this._http.delete<any>("https://localhost:7001/api/DistrictWebAPI/"+id)
.pipe(map((res:any)=>{
return res;
}))
}

//labor

//create by post

postlabor(data:any){
  return this._http.post<any>("https://localhost:7001/api/LaborWebAPI/",data)
  .pipe(map((res:any)=>{
    return res;
    }))
}

//get

getlabor(){
return this._http.get<any>("https://localhost:7001/api/LaborWebAPI/")
.pipe(map((res:any)=>{
  return res;
  }))
}
//update


updatelabor(data:any, id:number){
return this._http.put<any>("https://localhost:7001/api/LaborWebAPI/"+id,data)
.pipe(map((res:any)=>{
  return res;
})) 
}



//delete
deletelabor(id:number){
  return this._http.delete<any>("https://localhost:7001/api/LaborWebAPI/"+id)
  .pipe(map((res:any)=>{
  return res;
  }))
  }

}