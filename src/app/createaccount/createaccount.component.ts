import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountserviceService } from '../accountservice.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  account:Account[]
  constructor(private _accountService:AccountserviceService,private router:Router) { }

  createAccount=new FormGroup({
    // accHolderName:string,
    // userEmail:string,
    // resAddress:string,
    // branchAddress:string,
    // openDate:string,
    // mobile:string,
    // dob:string

    accHolderName:new FormControl('',Validators.required),
    userEmail:new FormControl('',Validators.email),
    resAddress:new FormControl('',Validators.required),
    branchAddress:new FormControl('',Validators.required),
    openDate:new FormControl('',Validators.required),
    mobile:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    userid:new FormControl('',Validators.required)

  })
  ngOnInit(): void {
  
  }
  saveAccountDetails(){
  

    let acc=this.createAccount.value
    this._accountService.createAccount(acc).subscribe(
      data =>{
        data=acc
        console.log(data)
      }
    )
  }
    onAccFormSubmit(){

      this.saveAccountDetails()
      console.log(this.account)
      this.router.navigate(['/showAccounts'])
    }



}
