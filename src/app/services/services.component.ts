import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { service } from '../service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
//   services:service[]=[
    
//       {
//         "id": 1,
//         "name": "USER",
//         "img": "assets/icons/2.png"
//     },
//     {
//       "id": 2,
//       "name": "ACCOUNT",
//       "img": "assets/icons/3.png"
//   },
//   {
//     "id": 3,
//     "name": "TRANSACTION",
//     "img": "assets/icons/1.png"
// },
    
//   ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  getService(){
    console.log("called")

  }
  getTransactionService(){
    this.router.navigate(['/transaction'])
    console.log('transaction route')
  }
  getAccountService(){
    this.router.navigate(['/account'])
    console.log('account route')
  }
  getUserService(){
    this.router.navigate(['/user'])
    console.log('user route')
  }

}
