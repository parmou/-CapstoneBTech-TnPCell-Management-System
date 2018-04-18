import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';

import {AppModel} from '../../landing/coordinator/dashboard/search-form/app.model'

@Injectable()
export class SearchFormServiceService {

  baseURL = '/coordinator/dashboard'

  res : any;

  constructor(private http: Http, private router: Router) { }

  getData(obj : {}) : Observable<AppModel> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers,
    });
     return this.http.post(this.baseURL+'/get-student-details',obj, options)
    .map((response: Response) => {
      this.res = response.json();
      return this.res;
    })
    .catch((error: Response | any) => {
      console.log(error.statusText);
      return Observable.throw(error);
    });
  }

  getResponse() {
    return this.res;
  }

  changeCoordinatorStatus(obj: any[]) : Observable<any[]> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers,
    });
     return this.http.post(this.baseURL+'/change-status',obj, options)
    .map((response: Response) => {
      
      return response.json();
    })
    .catch((error: Response | any) => {
      console.log(error.statusText);
      return Observable.throw(error);
    });
  }

  approveCompany(obj: any[]) : Observable<any[]> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers,
    });
     return this.http.post(this.baseURL+'/approve-company',obj, options)
    .map((response: Response) => {
      
      return response.json();
    })
    .catch((error: Response | any) => {
      console.log(error.statusText);
      return Observable.throw(error);
    });
  }

  deleteUser( obj : any[]) : Observable<any[]> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers,
    });
     return this.http.post(this.baseURL+'/delete-user',obj, options)
    .map((response: Response) => {
      
      return response.json();
    })
    .catch((error: Response | any) => {
      
      return Observable.throw(error);
    });
  }

}
