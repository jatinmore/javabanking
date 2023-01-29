import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../users';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  users:User[]
  processValidation=false
  statusCode=0
  requestProcessing=false;
  constructor(private _userService:UserserviceService,private router:Router) { }
  addUsers = new FormGroup(
    {
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    }
  )
  ngOnInit(): void {
   
  }
//   onUserFormSubmit(){
//     let user=this.addUsers.value


//     this._userService.createUser(user).subscribe
//     console.log(user)

//     this.router.navigate(['/showuser'])

    
// }
saveUser(){
  let user=this.addUsers.value
  this._userService.createUser(user).subscribe(data=>{
    data=user
    console.log(data)
  })
}
  onUserFormSubmit(){
    this.saveUser()
    console.log(this.users)
    this.router.navigate(['/showuser'])
  }
}
