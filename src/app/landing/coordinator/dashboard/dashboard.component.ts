import { Component, OnInit } from '@angular/core';
import { BaseServiceCoordinator } from '../../../service/coordinator/base.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private base : BaseServiceCoordinator) { }

  ngOnInit() {
  }

  
  

}
