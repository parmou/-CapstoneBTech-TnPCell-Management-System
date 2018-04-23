import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';


@Injectable()
export class BaseService {

  //base url for student
  baseUrl = "http://localhost:3000/student";
  trainingData : any;
  studentData : any;
 
  constructor( private http: Http, private router: Router ) { }

  studentHome() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.get(this.baseUrl+'/home',  {
    headers: headers
    })
      .subscribe(
        (res) => {
           console.log(res);
           this.router.navigate(['/student/home']);

        
      }
    );
  }

  trainingPage( obj : {})  : Observable<any[]>{
     let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers,
    });
     return this.http.post(this.baseUrl+'/training',obj, options)
    .map((response: Response) => {
      this.trainingData = response.json();
      return response.json();
    })
    .catch((error: Response | any) => {
      console.log(error.statusText);
      return Observable.throw(error);
    });
  }

  getTrainingData() {
    return this.trainingData;
  }

  getStudentPage(obj : {}) : Observable<any[]>{
     let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers,
    });
     return this.http.post(this.baseUrl+'/home',obj, options)
    .map((response: Response) => {
      this.studentData = response.json();
      return response.json();
    })
    .catch((error: Response | any) => {
      console.log(error.statusText);
      return Observable.throw(error);
    });

  }

  getStudentData() {
    console.log(this.getStudentData);
    return this.studentData;
  }

}
