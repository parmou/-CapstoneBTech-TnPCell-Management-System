import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class EditDetailsService {

  constructor( private http: Http, private router: Router) { }

  baseUrl = "student";

  getData() {

  }

  updateBasicDetails(obj : any[]) : Observable<any[]> {
     let headers = new Headers({
      'Content-Type': 'application/json'
    });
    console.log(this.baseUrl);
    let options = new RequestOptions({
      headers: headers,
    });
     return this.http.post(this.baseUrl+'/edit-user-basic-details',obj, options)
    .map((response: Response) => {
      return response.json();
    })
    .catch((error: Response | any) => {
      console.log(error.statusText);
      return Observable.throw(error);
    });
  }

  updatePersonalDetails(obj: any[]) : Observable<any[]> {
     let headers = new Headers({
      'Content-Type': 'application/json'
    });
    console.log(this.baseUrl);
    let options = new RequestOptions({
      headers: headers,
    });
     return this.http.post(this.baseUrl+'/edit-user-personal-details',obj, options)
    .map((response: Response) => {
      return response.json();
    })
    .catch((error: Response | any) => {
      console.log(error.statusText);
      return Observable.throw(error);
    });
  }

  updatePassword(obj: any[]) : Observable<any[]> {
     let headers = new Headers({
      'Content-Type': 'application/json'
    });
    console.log(this.baseUrl);
    let options = new RequestOptions({
      headers: headers,
    });
     return this.http.post(this.baseUrl+'/edit-user-password',obj, options)
    .map((response: Response) => {
      return response.json();
    })
    .catch((error: Response | any) => {
      console.log(error.statusText);
      return Observable.throw(error);
    });
  }

}
