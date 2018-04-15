import { Component, OnInit } from '@angular/core';
import { AppModel } from './app.model';
import { RegisterationService } from '../../../../service/student/registeration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})
export class PreferenceComponent implements OnInit {

  constructor( private registerationService : RegisterationService) {}

  ngOnInit() {
  }

  company1 : String;
  company2 : String;
  company3 : String;

  sendPreferences(value: AppModel){
    this.company1 = value.instituteName1 + "/" + value.instituteAddress1;
    this.company2 = value.instituteName2 + "/" + value.instituteAddress2;
    this.company3 = value.instituteName3 + "/" + value.instituteAddress3;
    
    this.registerationService.postPreferences(value)
                                            .subscribe(
                                              (res) => {
                                                console.log(res);
                                              },
                                              (error) => {
                                                console.log('this is error');
                                                console.log(error);
                                              },
                                            );

  }
}
