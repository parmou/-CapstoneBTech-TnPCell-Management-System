import { Component, OnInit, Inject } from '@angular/core';
import { BaseService } from '../../../service/student/base.service';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { FormModel } from '../login/form.model';
import { LoginModel } from '../login/login.model';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';


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
  show:boolean = false;
  branches = ['CSE', 'ECE', 'ME', 'CE', 'CHE', 'BT', 'BME', 'EE'];
  years = ['1','2','3','4'];

  public data:any=[]
  constructor(private loginservice : LoginService, private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }



  ngOnInit() {
    
  }

  register(){
    this.registered= !this.registered;
  }

  signup(value: FormModel){
    this.show=true;
    this.loginservice.getRespForSignup(value)
                      .subscribe(
                        (res) => {
                          
                          console.log(res);
                          this.response = res;
                        },
                        (error) =>   {
                                      console.log('this is error');
                                      console.log(error);
                                    },
                        () => {
                          this.show = false;
                          this.storage.set('name',this.response._creator.name);
                          this.storage.set('isCoordinator', this.response._creator.isCoordinator);
                          this.storage.set('rollno', this.response._creator.rollno);

                          this.router.navigate(['/student/home']);
                        }
                      );
                      
  }

  login(value: LoginModel){

    //console.log(value);
    this.show=true;
    this.loginservice.getRespForLogin(value)
                      .subscribe(
                        (res) => {
                          console.log('enter');
                          
                          //this.spinnerService.show('mySpinner2');
                          //this.data = res;
                          console.log(res);
                          this.response = res;
                        },
                        (error) => {
                          console.log('error');
                        },
                        () => {
                          console.log('exit');
                          this.show=false;
                          //this.spinnerService.hide('mySpinner2');
                          this.storage.set('name',this.response._creator.name);
                          this.storage.set('isCoordinator', this.response._creator.isCoordinator);
                          this.storage.set('rollno', this.response._creator.rollno);

                          console.log(this.storage.get('name'));

                          this.router.navigate(['/student/home']);
                        }
                      );
  }
  
}
