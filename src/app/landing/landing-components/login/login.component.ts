import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../../service/student/base.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isValid = true;
  iserror = false;
  constructor(private student : BaseService) { }



  ngOnInit() {
  }

  login() {
    this.student.studentHome();
  }
  
}
