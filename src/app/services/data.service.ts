import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  db:any={
    1000:{"acno":1000,"username":"anoop","password":1000,"balance":6000},
    1001:{"acno":1001,"username":"sanoop","password":1001,"balance":6000},
    1002:{"acno":1002,"username":"manoop","password":1002,"balance":5000},
    1003:{"acno":1003,"username":"tanoop","password":1003,"balance":5000},
  }


  constructor() { }

  login(acno:any,pswd:any){

    let db=this.db

    if(acno in db) {
      if (pswd==db[acno]["password"]) {
        return true
      }
      else{
        alert("incorrect passwod")
        return false 
      }
    }
    else{
      alert("user don't exist !")
      return false
    }
  }


  register(username:any,acno:any,password:any){
    let db=this.db
  
    if(acno in db){
      return false
    }
    else{
      db[acno]={
        acno,
        username,
        password,
        "balance":0
      }
      return true
    }
  }


  deposit(acno:any,pswd:any,amt:any){
    // to convert sring to number=> use parseInt()
    var amount=parseInt(amt)
    let db=this.db
    if(acno in db){
      if(pswd==db[acno]["password"]){
        db[acno]["balance"]+=amount
        return db[acno]["balance"]
      }
      else{
        alert("Incorrect Password")
        return false
      }
    }
    else{
      alert("User doesnot exist")
      return false
    }
  }

  withdraw(acno1:any,pswd1:any,amt1:any){
    // to convert sring to number=> use parseInt()
    var amount=parseInt(amt1)
    let db=this.db
    if(acno1 in db){
      if(pswd1==db[acno1]["password"]){
        if(db[acno1]["balance"]>amount){
          db[acno1]["balance"]-=amount
          return db[acno1]["balance"]
        }
        else{
          alert("Insufficient Balance")
          return false
        }
      }
      else{
        alert("Incorrect Password")
        return false
      }
    }
    else{
      alert("User doesnot exist")
      return false
    }
  }


}


