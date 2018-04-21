import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { SpinnerService } from './spinner.service';
 
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  @Input() name: String
  @Input() loadingImage: string;
  @Input() show = false;

  constructor( private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    //if (!this.loadingImage) throw new Error("Spinner must have a 'loadingImage' supplied.");
    if(!this.name) throw new Error("Spinner must have a 'name' supplied");

    this.spinnerService._register(this);
    console.log('call for register');
  }

  ngOnDestroy(): void{
    this.spinnerService._unregister(this);
    console.log('call for unregister');
  }
}
