import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountserviceService } from '../accountservice.service';

@Component({
  selector: 'app-showaccountdetails',
  templateUrl: './showaccountdetails.component.html',
  styleUrls: ['./showaccountdetails.component.css']
})
export class ShowaccountdetailsComponent implements OnInit {
  public account:Account[]
  constructor(private _accountService:AccountserviceService) { }

  ngOnInit(): void {
      this._accountService.getAllAccountDetails().subscribe(
        data => this.account=data
     
      )
        console.log(this.account)
  }

}
