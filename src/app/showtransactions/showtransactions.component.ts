import { Component, OnInit } from '@angular/core';
import { Transactions } from '../transaction';
import { TransactionserviceService } from '../transactionservice.service';

@Component({
  selector: 'app-showtransactions',
  templateUrl: './showtransactions.component.html',
  styleUrls: ['./showtransactions.component.css']
})
export class ShowtransactionsComponent implements OnInit {

  public transactions:Transactions[]
  constructor(private _transactionService:TransactionserviceService) { }

  ngOnInit(): void {
    this._transactionService.getAllTransactions().subscribe(
      data => this.transactions=data
    )
    console.log(this.transactions)
  }

}
