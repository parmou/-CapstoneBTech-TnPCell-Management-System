import { Component, OnInit } from '@angular/core';
import { AppModel } from './app.model';
import { Router } from '@angular/router'
import { SearchFormServiceService } from '../../../../service/coordinator/search-form-service.service'
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(private service : SearchFormServiceService, private router : Router) { }

  ngOnInit() {
  }

  getStudentData(value : AppModel) {
    /**
     * code for AppModel and making request for getting student training details 
     * 
     * 1. Make a service
     * 2. Add a post request method on client side
     * 3. Add a post method in server side
     * 4. Fetch the training details of all the students of the particular year and branch
     * 5. Add them in an array
     * 6. Send back the data
     * 7. Navigate to training-data route
     * 8. Display the data 
     */ 
    this.service.getData(value).subscribe(
      (res) => {
        /* SHOW LOADER */
      },
      (err) => {
        /* Handle ERROR */
      },
      () => {
        this.router.navigate(['/coordinator/training-data']);
      }
    )


  }

}
