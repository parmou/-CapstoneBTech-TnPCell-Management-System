import { Component, OnInit } from '@angular/core';
import { 
  
  Router 
} from '@angular/router';

@Component({
  selector: 'app-sindex',
  templateUrl: './sindex.component.html',
  styleUrls: ['./sindex.component.css']
})
export class SindexComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  

}
