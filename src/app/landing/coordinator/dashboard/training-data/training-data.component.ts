import { Component, OnInit } from '@angular/core';
import { SearchFormServiceService } from '../../../../service/coordinator/search-form-service.service'


@Component({
  selector: 'app-training-data',
  templateUrl: './training-data.component.html',
  styleUrls: ['./training-data.component.css']
})
export class TrainingDataComponent implements OnInit {

  userData : any;
  responseData : any;
  data : any;
  constructor(private search_service : SearchFormServiceService) { }

  ngOnInit() {
    this.data = this.search_service.getResponse(); 
    this.userData = this.data[1];
  }

  setUserData(index : string) {
    
    this.userData = this.data[Number.parseInt(index ,10)];
    console.log(this.userData);
  }

  changeCoordinatorStatus(status : boolean, index : string) {

    var array = [];
    array.push(!status);
    array.push(this.data[Number.parseInt(index ,10)]._creator.rollno);
    
      this.search_service.changeCoordinatorStatus(array)
        .subscribe(
          (res) => {
            this.responseData = res;
          },
          (err) =>{

          },
          () => {
            this.data[Number.parseInt(index ,10)] = this.responseData;
            this.userData = this.data[Number.parseInt(index ,10)];
            console.log(this.userData);
          }
        )
    
  }

  

}
