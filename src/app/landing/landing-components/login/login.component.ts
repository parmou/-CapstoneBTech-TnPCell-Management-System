import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../../service/student/base.service';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { FormModel } from '../login/form.model';
import { LoginModel } from '../login/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isValid = true;
  iserror = false;
  registered = true;
  data;
  constructor(private loginservice : LoginService, private router: Router) { }



  ngOnInit() {
  }

  register(){
    this.registered= !this.registered;
  }

  signup(value: FormModel){
    this.loginservice.getRespForSignup(value)
                      .subscribe(
                        (res) => {
                          console.log(res);
                        },
                        (error) =>   {console.log('this is error');
                                      console.log(error);
                                    },
                        () => {
                          this.router.navigate['student/home']; 
                        }
                      );
  }

  login(value: LoginModel){
    console.log(value);
    this.loginservice.getRespForLogin(value)
                      .subscribe(
                        (res) => {
                          this.data = res;
                          
                        },
                        (error) => {
                          console.log('error');
                        },
                        () => {
                          this.router.navigate['student/home']; 
                        }
                      );
  }
  
}
