import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { UserModel } from './user.model';
import { EditDetailsService  } from '../../../../service/student/edit-details.service';

@Component({
  selector: 'app-update-user-details',
  templateUrl: './update-user-details.component.html',
  styleUrls: ['./update-user-details.component.css']
})
export class UpdateUserDetailsComponent implements OnInit {

  name : any;
  branches = ['CSE', 'ECE', 'ME', 'CE', 'CHE', 'BT', 'BME', 'EE'];
  years = ['1', '2', '3', '4'];
  constructor(private router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService, private service : EditDetailsService) { }

  ngOnInit() {
  }

  updateBasicDetails(value : UserModel) {
    let array : any = [];
    array.push(value);
    array.push(this.storage.get('rollno'));

    this.service.updateBasicDetails(array).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {

      },
      () => {
        this.storage.set('name', this.name);
      }
    );

  }

}
