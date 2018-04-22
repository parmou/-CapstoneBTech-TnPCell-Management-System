import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {BaseServiceCoordinator} from '../../../service/coordinator/base.service';
import {BaseService} from '../../../service/student/base.service';


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

  events : any =[];
  sizeBoolean: boolean = false;
  eventResponse: any[];

  studentData : any;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private service: BaseServiceCoordinator, private base : BaseService) {
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

    this.studentData = this.base.getStudentData();
    console.log(this.studentData);

    this.service.getEvents().subscribe(
      (res) => {
        this.events = res;
      },
      (err) => {

      },
      () => {
        if(this.events.length != 0)
        this.sizeBoolean = true;
      }
    );

    
  }

}
