import { Component, OnInit } from '@angular/core';

import {BaseServiceCoordinator} from '../../../../service/coordinator/base.service'
import { EventModel } from './event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  times : any[] = [ 
    {
      "type" : "date",
      "value": ""
    }
    
  ];

  events : any[] = [1];
  constructor(private service: BaseServiceCoordinator) { }

  ngOnInit() {
    
  }

  rand(type: String)
  {
    console.log(type);
  }

  add(type : String,value: String) {
    this.times.push({"type" : type,"value": value});
    this.events.push(1);
  }
  remove(position : number) {
    this.times.splice(position,1);
  }

  addEvent(eventName: EventModel) {
    console.log('from angular');
    console.log(this.times);
    console.log(eventName);
    /* format the array and pass as a string */
    let details : String;

    this.service.addEvent(details);
  }

}
