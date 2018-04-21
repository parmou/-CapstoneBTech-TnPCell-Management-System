import { Injectable } from '@angular/core';
import { SpinnerComponent } from './spinner.component';

@Injectable()
export class SpinnerService {

  constructor() { }

  private spinnerCache = new Set<SpinnerComponent>();
  //private spin = new SpinnerComponent();

  showit(){
    
  }

  hideit(){

  }

  _register(spinner: SpinnerComponent): void {
    console.log('spinner registered');
    this.spinnerCache.add(spinner);
  }

  _unregister(spinnerToRemove: SpinnerComponent): void {
    this.spinnerCache.forEach(spinner => {
      if (spinner === spinnerToRemove) {
        this.spinnerCache.delete(spinner);
        console.log('spinner unregistered');
      }
    });
  }

  show(spinnerName: string): void {
    console.log('show function');
    this.spinnerCache.forEach(spinner => {
      if (spinner.name === spinnerName) {
        spinner.show = true;
        console.log('show spinner');
      }
    });
  }

  hide(spinnerName: string): void {
    this.spinnerCache.forEach(spinner => {
      if (spinner.name === spinnerName) {
        spinner.show = false;
        console.log('hide');
      }
    });
  }


}
