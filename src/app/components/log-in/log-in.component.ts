import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup , FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { AuthGardGuard } from 'src/app/shared/auth-gard.guard';
import { AuthServiceService } from 'src/app/shared/auth-service.service';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public loginform!:FormGroup
  @Output() U_Nam:EventEmitter<string> = new EventEmitter();
  public U_name!:number;
  public name:string=''
  
  constructor(private formBuilder:FormBuilder, 
    private Users:CrudService,
    private Router:Router,
    private _auth:AuthGardGuard,
     private Authservice:AuthServiceService
     ) { }

  ngOnInit(): void {
    
    this.loginform= this.formBuilder.group({
      username:[''],
      password:['']
    })
  }
  login(){
this.Users.getdetail()
.subscribe(res=>{
  const user = res.find((a:any)=>{
    if(a.email=== this.loginform.value.username && this.loginform.value.password ==="pass123"){
     this.U_name=a.id;
     this.name=a.name;

    }
    return a.email=== this.loginform.value.username && this.loginform.value.password ==="pass123";
  });

  if(user){

    alert('login sucess!!! Wellcome,'+ this.name);
   
    this.loginform.reset();
    
    this.Router.navigate(['book-list']);
  }
  else{
    alert('invalid user');
  }
  
})
   }

}
