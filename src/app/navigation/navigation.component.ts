import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { BaseService } from '../service/student/base.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private router : Router, private base: BaseService) { }

  ngOnInit() {
    
  }

  checkForUser() {
    if(this.storage.get('name')) {
      let array : any = [];
      array.push(this.storage.get('rollno'));
      this.base.getStudentPage(array).subscribe(
        (res)=>{

        },
        (err) => {

        },
        () => {
          this.router.navigate(['/student/home']);
        }
      )
    }
    else {
      this.router.navigate(['/login']);
    }
  }

}
