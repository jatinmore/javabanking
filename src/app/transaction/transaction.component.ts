import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addTrxn(){
    this.router.navigate(['/addtxns'])
  }
  showTrxn(){
    this.router.navigate(['/showtxns'])

  }
}
