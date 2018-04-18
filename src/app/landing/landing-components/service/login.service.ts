import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';
import { FormModel } from '../login/form.model';
import { LoginModel } from '../login/login.model';
import { SpinnerService } from '../../../spinner/spinner.service';

@Injectable()
export class LoginService {

  baseUrl = 'http://localhost:3000/';

  constructor( private http: Http, private router: Router, private spinnerService: SpinnerService ) { }

  getRespForSignup(obj: {}) : Observable<FormModel>{
    //console.log('from service.ts ' + obj.toString());
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers,
    });
    this.spinnerService.show('mySpinner');
     return this.http.post(this.baseUrl+'student/signup',obj, options)
    .map((response: Response) => {
      this.spinnerService.hide('mySpinner');
      return response;
    })
    .catch((error: Response | any) => {
      console.log(error.statusText);
      return Observable.throw(error);
    });
  }


  getRespForLogin(obj: {}) : Observable<LoginModel>{
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers,
    });
    console.log(obj);
     this.spinnerService.show('mySpinner2');
     return this.http.post(this.baseUrl+'student/login',obj, options)
    .map((response: Response) => {
      this.spinnerService.hide('mySpinner2');
      return response;
    })
    .catch((error: Response | any) => {
      console.log(error.statusText);
      return Observable.throw(error);
    });
  }

}
