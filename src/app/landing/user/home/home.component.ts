import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: String;
   isCoordinator: String;
  rollno: String;
  year: String;
  branch: String;
 email: String;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.username = this.storage.get('name');
    this.email = this.storage.get('isCoordinator');
    this.rollno = this.storage.get('rollno');
    this.year = this.storage.get('year');
    this.branch = this.storage.get('branch'); 
   }

  ngOnInit() {
   this.username = this.storage.get('name');
    this.email = this.storage.get('isCoordinator');
    this.rollno = this.storage.get('rollno');
    this.year = this.storage.get('year');
    this.branch = this.storage.get('branch');

    
  }

}
