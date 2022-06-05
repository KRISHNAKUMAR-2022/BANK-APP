import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno=""
  pswd=""
  amt=""

  acno1=""
  pswd1=""
  amt1=""



  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

  deposit(){
    var acno=this.acno
    var pswd=this.pswd
    var amount=this.amt

    const result= this.ds.deposit(acno,pswd,amount)
    if(result){
      alert(amount+"deposited successfully and current balance is:"+result)
    }
  }


  withdraw(){
    var acno1=this.acno1
    var pswd1=this.pswd1
    var amount=this.amt1

    const result= this.ds.withdraw(acno1,pswd1,amount)
    if(result){
      alert(amount+"debited successfully and current balance is:"+result)
    }

  }

}
