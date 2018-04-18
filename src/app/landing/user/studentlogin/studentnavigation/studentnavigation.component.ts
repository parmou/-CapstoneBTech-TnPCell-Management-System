import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { BaseService } from '../../../../service/student/base.service';
@Component({
  selector: 'app-studentnavigation',
  templateUrl: './studentnavigation.component.html',
  styleUrls: ['./studentnavigation.component.css']
})
export class StudentnavigationComponent implements OnInit {

  isCoordinator : boolean = false;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private router : Router, private base : BaseService) { }

  ngOnInit() {

    this.isCoordinator = this.storage.get('isCoordinator');
    
  }

  logout() {
    this.storage.remove('name');
    this.storage.remove('rollno');
    this.storage.remove('isCoordinator');
    this.router.navigate(['/']);
  }

  getTrainingPage() {
    let array = [];
    array.push(this.storage.get('rollno'));
    this.base.trainingPage(array).subscribe(
      (res) => {

      }, 
      (err) => {

      },
      () => {
        this.router.navigate(['/student/training']);
      }
    )
  }
  

}
