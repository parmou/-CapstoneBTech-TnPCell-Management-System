import { Component, OnInit, Inject } from '@angular/core';

import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { EditDetailsService } from '../../../../service/student/edit-details.service';
import { PasswordModel } from './password.model';
@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private edit : EditDetailsService) { }

  ngOnInit() {
  }

  updatePassword(value: PasswordModel) {
    if (value.new_ === value.new_again) {
      let array: any = [];
      array.push(value);
      array.push(this.storage.get('rollno'));
      console.log(value);
      this.edit.updatePassword(array).subscribe(
        (res) => {

        },
        (err) => {

        },
        () => {

        }
      );
    }
    
  }

}
