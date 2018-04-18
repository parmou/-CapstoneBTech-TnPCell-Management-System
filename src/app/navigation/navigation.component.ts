import { Component, OnInit, Inject } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private router : Router) { }

  ngOnInit() {
    
  }

  checkForUser() {
    if(this.storage.get('name')) {
      this.router.navigate(['/student/home']);
    }
    else {
      this.router.navigate(['/login']);
    }
  }

}
