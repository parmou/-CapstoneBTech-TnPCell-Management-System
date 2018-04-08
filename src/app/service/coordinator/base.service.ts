import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class BaseServiceCoordinator {

  //base url for coordinator
  baseUrl = "http://localhost:3000/coordinator/dashboard";

  eventUrl = "http://localhost:3000/coordinator/event";

  constructor(private http: Http, private router: Router) { }

  addEvent( details : String) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.post(this.eventUrl,details, options)
    .map((response: Response) => {
      const result = response.json();
      return result;
    })
    .catch((error: Response | any) => {
      console.log(error.statusText);
      return Observable.throw(error);
    });
  }

}
