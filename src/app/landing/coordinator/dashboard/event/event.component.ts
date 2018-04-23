import { Component, OnInit } from '@angular/core';

import {BaseServiceCoordinator} from '../../../../service/coordinator/base.service';
import { EventModel } from './event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  eventName : any = "";
  branch : any = "";
  year : any = "";

  times : any[] = [ 
    {
      "type" : "dummy type",
      "value": "dummy value"
    }
    
  ];

  events : any =[];
  sizeBoolean: boolean = false;
  eventResponse: any[];

  
  constructor(private service: BaseServiceCoordinator) { }

  ngOnInit() {
    this.service.getEvents().subscribe(
      (res) => {
        this.events = res;
      },
      (err) => {

      },
      () => {
        if(this.events.length != 0)
        this.sizeBoolean = true;
        console.log(this.events);
      }
    );

    
    
  }

  

  add(type : String) {
    
    this.times.push({"type" : type, "value" : ""});
   
  }
  remove(position : number) {
    this.times.splice(position,1);
  }

  addEvent() {

    let array : any = [];
    array.push(this.eventName);
    array.push(this.branch);
    array.push(this.year);
    array.push(this.times);
    
    this.service.addEvent(array).subscribe(
      (res) => {
        this.eventResponse = res;
      },
      (err) => {

      },
      ()=> {
        if(this.events.length != 0)
          this.sizeBoolean = true;
          this.events.push(this.eventResponse);
      } 
    );
    
  }

}
