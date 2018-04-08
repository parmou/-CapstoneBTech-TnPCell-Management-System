import { Component, OnInit } from '@angular/core';

import {BaseServiceCoordinator} from '../../../../service/coordinator/base.service'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  times : any[] = [ 
    {
      "type" : "date"
    }
     
  ];

  events : any[] = [1];
  constructor(private service: BaseServiceCoordinator) { }

  ngOnInit() {
    
  }

  add(type : String) {
    this.times.push({"type" : type});
    this.events.push(1);
  }
  remove(position : number) {
    this.times.splice(position,1);
  }

  addEvent( eventName: String) {
    /* format the array and pass as a string */
    let details : String;

    this.service.addEvent(details);
  }

}
