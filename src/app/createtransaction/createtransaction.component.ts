import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Transactions } from '../transaction';
import { TransactionserviceService } from '../transactionservice.service';

@Component({
  selector: 'app-createtransaction',
  templateUrl: './createtransaction.component.html',
  styleUrls: ['./createtransaction.component.css']
})
export class CreatetransactionComponent implements OnInit {

  constructor(private _transactionService:TransactionserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  transaction:Transactions[]
  addTrxn=new FormGroup({
    // transId:number;
    // Date:string;
    // remark:string;
    // transAmt:number;
    // tnxType:string;

      Date:new FormControl('',Validators.required),
      transAmt:new FormControl('',Validators.required),
      txnType: new FormControl('',Validators.required),
      remark:new FormControl('',Validators.required)


  })
  saveTrxnDetails(){

    let trxn=this.addTrxn.value
    this._transactionService.createTrxn(trxn).subscribe(
      data=>{
        data=trxn
        console.log(data)
      }
    )

  }
    onTrxnFormSubmit(){


      this.saveTrxnDetails()
      console.log(this.transaction)
      this.router.navigate(['/showtxns'])
    }
}
