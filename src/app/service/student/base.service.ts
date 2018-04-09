import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';


@Injectable()
export class BaseService {

  //base url for student
  baseUrl = "http://localhost:3000/student/home";
 
  constructor( private http: Http, private router: Router ) { }

  studentHome() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.get(this.baseUrl,  {
    headers: headers
    })
      .subscribe(
        (res) => {
           console.log(res);
           this.router.navigate(['/student/home']);

        
      }
    );
  }

  

}
