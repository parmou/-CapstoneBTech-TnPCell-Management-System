import { Component, OnInit } from '@angular/core';
import { Registration } from './registration';
@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  profiles = ['Graduate Trainee',
              'System Engineer',
              'Develepor',
              'Data Analyst',
              'Software Engineer',
              'others'];
  purposes = ['placement', 'Internship'];

  model = new Registration(12,'abc','www.xyz.com',this.profiles[0], 1 ,'','','','',this.purposes[0]);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }
}
