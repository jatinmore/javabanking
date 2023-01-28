import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
    mockLogin={
    id:"user1",
    pass:"password1"
  }
  ngOnInit(): void {}
  constructor(private router:Router) { 
    this.loginForm = new FormGroup({
      'username':new FormControl(null,Validators.required),
      'password':new FormControl(null,Validators.required)
    })
  }

  onSubmit(){
  //  console.log( this.myFormModel.value);
  // if(this.loginForm.value(0)==this.mockLogin.id){
  //   console.log("login succeed")
  // }
  // else{
  //   console.log("login failed")
  // }
  console.log(this.loginForm.value)
  this.router.navigate(['/services'])
  }


  // id='';
  // pass=''

  // onSubmit(){
  //   if(this.id == this.mockLogin.username && this.pass==this.mockLogin.password){
  //       console.log("login successful")
  //   } 
  //   else{
  //     console.log("invalid creds")
  //   }
  // }




}
