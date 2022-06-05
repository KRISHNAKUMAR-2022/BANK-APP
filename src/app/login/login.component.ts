import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  aim="perfect banking partner"
  accno="Account no please"
  password="Password plaese"
  acno=""
  pswd=""

// dependency injection
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  // userdefined function
  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
  }
  pswdChange(event:any){
    this.pswd=event.target.value
    console.log(this.pswd);
  }
  login(){
    var acno=this.acno
    var pswd=this.pswd

    const result = this.ds.login(acno,pswd)

    if(result) {
      this.router.navigateByUrl(`dashboard`)
    }
  }


// template referencing variable
  // login(a:any,p:any){
  //   var acno=a.value
  //   var pswd=p.value

  //   let db=this.db

  //   if(acno in db) {
  //     if (pswd==db[acno]["password"]) {
  //       alert("login successful")
  //     }
  //     else{
  //       alert("incorrect passwod")
  //     }
  //   }
  //   else{
  //     alert("user don't exist !")
  //   }
  // }

}
