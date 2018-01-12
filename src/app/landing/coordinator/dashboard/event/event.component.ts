import { Component, OnInit } from '@angular/core';


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
  constructor() { }

  ngOnInit() {
  }

  add(type : String) {
    this.times.push({"type" : type});
    this.events.push(1);
  }
  remove(position : number) {
    this.times.splice(position,1);
  }

}
