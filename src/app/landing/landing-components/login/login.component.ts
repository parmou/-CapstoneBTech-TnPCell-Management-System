import { Component, OnInit, Inject } from '@angular/core';
import { BaseService } from '../../../service/student/base.service';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { FormModel } from '../login/form.model';
import { LoginModel } from '../login/login.model';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { SpinnerService } from '../../../spinner/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isValid = true;
  iserror = false;
  registered = true;
  response: any = null;
  signupResponse: any = null;

  public data:any=[]
  constructor(private loginservice : LoginService,private spinnerService: SpinnerService, private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }



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
                        (error) =>   {
                                      console.log('this is error');
                                      console.log(error);
                                    },
                        () => {
                          this.storage.set('name',this.response.name);
                          this.storage.set('isCoordinator', this.response.isCoordinator);
                          this.storage.set('rollno', this.response.rollno);

                          this.router.navigate(['/student/home']);
                        }
                      );
  }

  login(value: LoginModel){

    //console.log(value);
    this.loginservice.getRespForLogin(value)
                      .subscribe(
                        (res) => {
                          //this.data = res;
                          this.response = res;
                        },
                        (error) => {
                          console.log('error');
                        },
                        () => {
                          this.storage.set('name',this.response.name);
                          this.storage.set('isCoordinator', this.response.isCoordinator);
                          this.storage.set('rollno', this.response.rollno);

                          console.log(this.storage.get('name'));

                          this.router.navigate(['/student/home']);
                        }
                      );
  }
  
}
