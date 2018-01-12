import { Component, OnInit } from '@angular/core';
import { TrainingComponent } from '../training.component';
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {


 
  constructor( private training : TrainingComponent) { 
    
  }

  ngOnInit() {
  }

  setStepperState(position : number) {
    
      this.training.setStepperState(position);
    
  }
 

}
