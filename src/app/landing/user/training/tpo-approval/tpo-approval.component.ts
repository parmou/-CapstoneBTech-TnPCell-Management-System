import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../../../service/student/base.service';

@Component({
  selector: 'app-tpo-approval',
  templateUrl: './tpo-approval.component.html',
  styleUrls: ['./tpo-approval.component.css']
})
export class TpoApprovalComponent implements OnInit {

  approvedData : any;
  indexed : number = 0; 

  constructor(private base : BaseService) { }

  ngOnInit() {
    this.approvedData = this.base.getTrainingData();
    if(this.approvedData.approvalStatus) {
      let i : number = 0;
      for(i = 0; i < this.approvedData.companyPreference.length; i++) {
        if(this.approvedData.companyPreference[i] == this.approvedData.approvalStatus) {
          this.indexed = i;
        }

      }

    }

  }

}
