import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';
import { AppModel} from '../../landing/user/training/preference/app.model';

@Injectable()
export class RegisterationService {

  baseUrl = 'http://localhost:3000/';

  constructor( private http: Http, private router: Router ) { }

  postPreferences(obj: {}) : Observable<String[]>{
    
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers,
    });
     return this.http.post(this.baseUrl+'student/registration/company-preference',obj, options)
    .map((response: Response) => {
      
      return response;
    })
    .catch((error: Response | any) => {
      console.log(error.statusText);
      return Observable.throw(error);
    });
  }

}
