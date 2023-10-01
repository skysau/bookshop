import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
islogin!:boolean
userid!:number
user:string=''
  constructor() { }
  setdata(data:boolean){
this.islogin=data;

  }
  getdata(){
    return this.islogin;
  }
 
}
