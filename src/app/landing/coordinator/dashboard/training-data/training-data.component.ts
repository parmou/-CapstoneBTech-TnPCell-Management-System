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
  approvalStatus : any;
  approvedCompanyIndex : any;
  deletedData : any;
  userPresent : boolean = false;

  error : boolean = false;
  constructor(private search_service : SearchFormServiceService) { }

  ngOnInit() {
    this.data = this.search_service.getResponse(); 
    if(this.data.length == 0) {
      this.userPresent = false;
    } else {
        this.userPresent = true;
        this.userData = this.data[0];
     if (this.userData._training.companyPreference.length != 0)
    this.approvedCompanyIndex = this.userData._training.approvalStatus;
    else 
      this.approvedCompanyIndex = "NONE";
    }
    
  }

  setUserData(index : string) {
    
    this.userData = this.data[Number.parseInt(index ,10)];
    if (this.userData._training.companyPreference.length != 0)
    this.approvedCompanyIndex = this.userData._training.approvalStatus;
    else 
      this.approvedCompanyIndex = "NONE";
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
          }
        )
    
  }


  approveCompany(index : string) {

    let array : any = []
    array.push(this.userData._training.companyPreference[index]);
    array.push(this.userData._creator._id);
    array.push(this.userData._training._id);

    this.search_service.approveCompany(array).subscribe(
      (res) => {
            this.approvalStatus = res;
          },
          (err) =>{
            this.error = true;
          },
          () => {
            this.error = false;

            this.data[Number.parseInt(index ,10)] = this.approvalStatus;
            this.userData = this.data[Number.parseInt(index ,10)];


             if (this.userData._training.companyPreference.length != 0 )
              this.approvedCompanyIndex = this.userData._training.approvalStatus;
            else 
              this.approvedCompanyIndex = "NONE";
          }
    )

  }

  deleteUser() {

    let array = [];
    array.push(this.userData._creator._id);
    array.push(this.userData._training._id);
    array.push(this.userData._id);

    this.search_service.deleteUser(array).subscribe(
      (res) => {
            this.deletedData = res;
          },
          (err) =>{

          },
          () => {
            
            if (this.deletedData.length == 0) {
              this.userData = null;
              this.userPresent = false;
            }
             
            else {
              this.userData = this.deletedData[0];

              this.data = this.deletedData;


             if (this.userData._training.companyPreference.length != 0 )
              this.approvedCompanyIndex = this.userData._training.approvalStatus;
            else 
              this.approvedCompanyIndex = "NONE";
            }
              

          }
    )
  }

  

}
