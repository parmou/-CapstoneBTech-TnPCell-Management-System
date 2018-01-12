import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isValid = true;
  iserror = false;
  constructor() { }



  ngOnInit() {
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
});

  signUpForm = new FormGroup({
    username:new FormControl('',Validators.required),
    password1:new FormControl('',Validators.required),
    password2:new FormControl('',Validators.required),
    manager:new FormControl('',Validators.required)

  })

  signUp(username:string,password1:string,password2:string,manager:string){
    if(password1!=password2){
  alert('enter your password again');
    }
    
   
          
  }

  signIn(username:string,password:string){
    
  }

    
  signupCard(){
       if(this.isValid===true) this.isValid=false;
       else this.isValid=true;
     }
}
