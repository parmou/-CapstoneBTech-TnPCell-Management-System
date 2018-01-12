import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  checkState1 : boolean = false;
  checkState2 : boolean = false;
  checkState3 : boolean = false;
  checkState4 : boolean = true;
  constructor() { }

  ngOnInit() {
  }

  setStepperState( position : number) {
    if (position == 1) {
      this.checkState1 = true;
      this.checkState2 = false;
      this.checkState3 = false;
      this.checkState4 = false;
    }

    if (position == 2) {
      this.checkState1 = false;
      this.checkState2 = true;
      this.checkState3 = false;
      this.checkState4 = false;
    }

    if (position == 3) {
      this.checkState1 = false;
      this.checkState2 = false;
      this.checkState3 = true;
      this.checkState4 = false;
    }
    if (position == 4) {
      this.checkState1 = false;
      this.checkState2 = false;
      this.checkState3 = false;
      this.checkState4 = true;
    }


  }


}
