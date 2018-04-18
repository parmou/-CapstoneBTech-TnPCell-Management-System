import { Component, OnInit, Inject } from '@angular/core';
import { FileUploadService } from '../../../../service/student/file-upload.service';
import { FileUpload } from '../../../../service/student/fileupload';
import { DataModel } from './app.model';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { RegisterationService } from '../../../../service/student/registeration.service';


@Component({
  selector: 'app-company-approval',
  templateUrl: './company-approval.component.html',
  styleUrls: ['./company-approval.component.css']
})
export class CompanyApprovalComponent implements OnInit {

  selectedFiles: FileList
  currentFileUpload: FileUpload
  progress: {percentage: number} = {percentage: 0}

  constructor(private uploadService: FileUploadService, @Inject(LOCAL_STORAGE) private storage: WebStorageService, private registration : RegisterationService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
 
  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
 
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
  }

  sendData(obj : DataModel) {
    let array : any = [];
    array.push(obj.inputInstitituename);
    array.push(obj.inputInstititueaddress);
    array.push(obj.inputStartDate);
    array.push(obj.inputEndDate);
    array.push(this.uploadService.getFileDownloadURL());
    array.push(this.storage.get('rollno'));

    this.registration.postCompanyData(array).subscribe(
      (res) => {
        
      },
      (err) => {

      },
      () => {
        console.log('done!');
      }
    )
    
  }
}
