import { Component, OnInit, Inject } from '@angular/core';
import { FileUploadService } from '../../../../service/student/file-upload.service';
import { FileUpload } from '../../../../service/student/fileupload';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { EditDetailsService } from '../../../../service/student/edit-details.service';
import { PersonalModel } from './personal.model';

@Component({
  selector: 'app-update-personal-details',
  templateUrl: './update-personal-details.component.html',
  styleUrls: ['./update-personal-details.component.css']
})
export class UpdatePersonalDetailsComponent implements OnInit {

  selectedFiles: FileList
  currentFileUpload: FileUpload
  progress: {percentage: number} = {percentage: 0}

  constructor(private uploadService: FileUploadService, @Inject(LOCAL_STORAGE) private storage: WebStorageService, private edit : EditDetailsService) { }

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

  updatePersonalDetails(obj : PersonalModel) {
    let array : any = [];
    array.push(obj.totalCgpa);
    array.push(this.uploadService.getFileDownloadURL());
    array.push(this.storage.get('rollno'));

    this.edit.updatePersonalDetails(array).subscribe(
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
