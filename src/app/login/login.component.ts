import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  id='';
  pass=''
  mockLogin={
    username:"user1",
    password:"password1"
  }
  onSubmit(){
    if(this.id == this.mockLogin.username && this.pass==this.mockLogin.password){
        console.log("login successful")
    } 
    else{
      console.log("invalid creds")
    }
  }
}
